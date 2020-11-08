const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const conn = new Sequelize(dbConfig);

User.init(conn);

module.exports = conn;