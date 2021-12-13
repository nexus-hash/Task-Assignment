const jwt = require("jsonwebtoken");

function verifyJwt(req, res, next) {
  const TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    req.hasJwt = false;
    next();
    return;
  }

  const token = authHeader.split(" ")[1];

  // get the jwt from the cookie
  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ tokenError: err });
      return;
    }

    req.hasJwt = true;
    req.decodedJwt = decoded;
    next();
  });
}
