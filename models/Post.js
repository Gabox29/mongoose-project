const mongoose = require("mongoose");

// Comment schema
const commentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

// Post schema
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    username: { type: String, required: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

// Create the Post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
