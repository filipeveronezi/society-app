const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json")

// Authorization Middleware used to validate token in HTTP header

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Some basic validations to improve performance
  if(!authHeader) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  const parts = authHeader.split(' ');

  if(!parts.length == 2) {
    return res.status(401).send({ error: 'Invalid authorization header'});
  }

  const [ scheme, hash ] = parts;

  if(scheme != "Bearer" && scheme != "bearer") {
    return res.status(401).send({ error: 'Token malformatted'});
  }

  // Actual JWT verification
  jwt.verify(hash, authConfig.secret, (err, decoded) => {
    if(err) return res.status(401).send({ error: 'Invalid token' });

    req.userId = decoded.id;

    return next();
  })

};