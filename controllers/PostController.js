const Post = require("../models/Post");

const PostController = {
  async create(req, res, next) {
    try {
      const post = await Post.create(req.body);
      res.status(201).send({ message: "Post created successfully", post });
    } catch (error) {
      next(error);
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
  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const posts = await Post.find()
        .populate("userId", ["name", "email"])
        .limit(limit)
        .skip((page - 1) * limit);
      res.status(200).send(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong", error });
    }
  },
  async getByTitle(req, res) {
    try {
      if (req.params.title.length > 20) {
        return res.status(400).send("Search query too long");
      }
      const title = new RegExp(req.params.title, "i");
      const post = await Post.findOne({ title });
      res.status(200).send(post);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong", error });
    }
  },
  async getById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      res.status(200).send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Something went wrong", error });
    }
  },
  async insertComment(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { $push: { comments: { userId: req.user._id, body: req.body.comment } } },
        { new: true }
      );
      res.send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem with your comment", error });
    }
  },
};
module.exports = PostController;
