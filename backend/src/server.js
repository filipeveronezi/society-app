const express = require('express');
const routes = require('./routes');

require('./database');

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);