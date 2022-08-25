require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findByIdUserService } = require("../service/users.service");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).send({ message: "O Token não foi informado"});
  }

  const parts = authHeader.split(" ");

  if(parts.length !== 2) {
    return res.status(401).send({ message: "Token Inválido"});
  }

  const [schema, token] = parts;

  if(!/^Bearer$/i.test(schema)) {
    return res.status(401).send({ message: "Token mal informado"});
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    const user = await findByIdUserService(decoded.id);

    if (err || !user || !user.id) {
      return res.status(401).send({ message: "Token Inválido"});
    }

    req.userId.id = user.id;

    return next();
  });
};