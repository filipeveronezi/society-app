// imports
const express = require('express');
const routes = require('./routes');
const authRoutes = require('./authRoutes')
const path = require('path');

// link to database directory
require('./database');

// API config
const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());

// Avaiable routes
app.use(routes);
app.use(authRoutes);
// app.use(express.static(path.join(__dirname, '..', '..', 'web')));

// API up
app.listen(PORT, HOST);