// imports
const express = require('express');
const routes = require('./routes');
const authRoutes = require('./authRoutes')
const cors = require('cors');

// link to database directory
require('./database');

// API config
const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());

// Enable CORS
app.use(cors());

// Avaiable routes
app.use(routes);
app.use(authRoutes);
// app.use(express.static(path.join(__dirname, '..', '..', 'web')));

// API up
app.listen(PORT, HOST);