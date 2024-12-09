const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    birthday: Date,
    tokens: [],
    postIds: [{ type: ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
