const express = require('express');
const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');


const routes = express.Router();

routes.get('/', (req, res) => {
  // login/register
})

routes.get('/users', UserController.index);

routes.post('/register', UserController.store);

routes.post('/auth', AuthController.authenticate);

module.exports = routes;