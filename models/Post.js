const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

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
    userId: {
      type: ObjectId,
      ref: "User",
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
