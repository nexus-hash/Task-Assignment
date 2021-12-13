const jwt = require("jsonwebtoken");

const JWT_EXPIRES_IN = "15m";

function makeJwt(payload, expiresIn = JWT_EXPIRES_IN) {
  return jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
    expiresIn: expiresIn,
  });
}

module.exports = { makeJwt };
