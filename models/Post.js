const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    username: { type: String, required: true },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
