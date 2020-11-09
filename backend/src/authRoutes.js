// Routes that need authentication

const express = require('express');
const authMiddleware = require('./app/middlewares/auth')

const authRoutes = express.Router();

// every req will pass through the authorization function
authRoutes.use(authMiddleware);

// list of avaiable courts for rent
authRoutes.get('/courts', (req, res) => {
  res.send({ login: true, user: req.userId})
});

module.exports = authRoutes;