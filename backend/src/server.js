const express = require('express');
const routes = require('./routes');
const authRoutes = require('./authRoutes')
const path = require('path');

require('./database');

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(routes);
app.use(authRoutes);
app.use(express.static(path.join(__dirname, '..', 'web')));

app.listen(PORT, HOST);