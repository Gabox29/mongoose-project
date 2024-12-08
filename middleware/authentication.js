const jwt = require("jsonwebtoken");
const  jwt_secret  = "sldfkjlekjlkj32fj23lkj"
const User = require("../models/User"); 


const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: "No estás autorizado" });
    }

   
    const payload = jwt.verify(token, jwt_secret);

    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(401).send({ message: "Usuario no encontrado" });
    }


    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error, message: "Ha habido un problema con el token" });
  }
};



module.exports = { authentication };