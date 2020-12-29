const express = require('express');
const CourtController = require('./app/controllers/CourtController');
const AddressController = require('./app/controllers/AddressController.js');
const ReportController = require('./app/controllers/ReportController.js');

const routes = express.Router();

routes.get('/courts', CourtController.index);

routes.get('/courts/addresses', AddressController.index);

routes.get('/courts/report', ReportController.show);

routes.get('/courts/report/:court_id/:user_id', ReportController.showOne);

routes.post('/courts', CourtController.store);
routes.post('/courts/:court_id/addresses', AddressController.store);

routes.put('/courts/:court_id', CourtController.update);
routes.put('/courts/:court_id/addresses', AddressController.update);

routes.delete('/courts/:court_id', CourtController.delete);

module.exports = routes;