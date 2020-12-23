const express = require('express');
const CourtController = require('./app/controllers/CourtController');
const AddressController = require('./app/controllers/AddressController.js');
const ReportController = require('./app/controllers/ReportController.js');

const routes = express.Router();

routes.get('/courts', CourtController.index);

routes.get('/courts/addresses', AddressController.index);

routes.get('/courts/report', ReportController.show);

routes.post('/courts', CourtController.store);

routes.post('/courts/:court_id/addresses', AddressController.store);

module.exports = routes;