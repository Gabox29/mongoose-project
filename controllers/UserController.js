const User = require("../models/User");
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const UserController = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      const token = jwt.sign({ _id: user._id }, jwt_secret);
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      res.send({ message: "Welcome" + user.name, token });
    } catch (error) {
      console.error(error);
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ message: "Disconnected successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was an error disconnecting", error });
    }
  },
  async getInfo(req, res) {
    try {
      const user = await User.findById(req.user._id).populate("postIds", ["title", "body", "userId"]);
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was an error getting the user information", error });
    }
  },
};

module.exports = UserController;
