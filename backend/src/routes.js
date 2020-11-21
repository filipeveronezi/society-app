// Routes that don't need authentication

const express = require('express');

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');

const routes = express.Router();

// routes.get('/', (req, res) => {

// })

// dev route to get all users:
// routes.get('/users', UserController.index);

// sign up user
routes.post('/register', UserController.store);

// login authentication
routes.post('/auth', AuthController.authenticate);

module.exports = routes;