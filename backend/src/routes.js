const express = require('express');
const UserController = require('./controllers/UserController')

const routes = express.Router();

routes.get('/', (req, res) => {
  
})

routes.get('/users', UserController.index);

routes.post('/register', UserController.store);

module.exports = routes;