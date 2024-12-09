const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [5, "Title must be at least 5 characters long"],
      maxlength: [100, "Title must be at most 100 characters long"],
      trim: true,
    },
    body: {
      type: String,
      required: [true, "Body is required"],
      minlength: [10, "Body must be at least 10 characters long"],
      trim: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
    comments: [
      {
        userId: { type: ObjectId, ref: "User" },
        body: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
