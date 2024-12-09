const User = require("../models/User");

const UserController = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = UserController;