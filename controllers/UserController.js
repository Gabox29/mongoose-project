const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwt_secret = "sldfkjlekjlkj32fj23lkj";

const userController = {
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).send({ message: "Incorrect email or password" });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Incorrect email or password" });
      }

      const token = jwt.sign({ id: user._id }, jwt_secret, { expiresIn: "1h" }); 
      await user.save(); 

      res.send({ token, message: "Successfully logged in", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "An error occurred during login", error });
    }
  },

 

  async create(req, res) {
    try {
      console.log("voy a crear un nuevo usuario")
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = new User(req.body); 
      await user.save(); 
      res.status(201).send({ message: "User created successfully", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem creating the user", error });
    }
  },
};

module.exports = userController;