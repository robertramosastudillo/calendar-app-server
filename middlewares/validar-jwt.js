const { response } = require("express");
const jwt = require("jsonwebtoken");

const validaJWT = (req, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.json.status(401).json({
      ok: false,
      mgs: "Token valido",
    });
  }

  next();
};

module.exports = { validaJWT };
