const Post = require("../models/Post");

const PostController = {
  async create(req, res) {
    try {
      const post = await Post.create(req.body);
      res.status(201).send(post);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },
};
module.exports = PostController;