const express = require('express');
const CourtController = require('./app/controllers/CourtController');
const AddressController = require('./app/controllers/AddressController.js');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ hello: 'World' });
});

routes.post('/courts', CourtController.store);

routes.post('/courts/:court_id/addresses', AddressController.store);

module.exports = routes;