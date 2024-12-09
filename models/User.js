const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name must be at most 50 characters long"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [128, "Password must be at most 128 characters long"],
    },
    birthday: {
      type: Date,
      required: [true, "Birthday is required"],
      validate: {
        validator: function (value) {
          return value < new Date();
        },
        message: "Birthday must be a past date",
      },
    },
    tokens: [],
    postIds: [{ type: ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
