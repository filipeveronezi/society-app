const express = require('express');
const authMiddleware = require('./app/middlewares/auth')

const authRoutes = express.Router();

authRoutes.use(authMiddleware);

authRoutes.get('/courts', (req, res) => {
  res.send({ login: true, user: req.userId})
});

module.exports = authRoutes;