const Post = require("../models/Post");

const PostController = {
  async create(req, res) {
    try {
      const post = await Post.create(req.body);
      res.status(201).send({ message: "Post created successfully", post });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong", error });
    }
  },
  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true });
      res.send({ message: "Post updated successfully", post });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong", error });
    }
  },
  async delete(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      res.send({ message: "Post deleted", post });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong", error });
    }
  },
};
module.exports = PostController;
