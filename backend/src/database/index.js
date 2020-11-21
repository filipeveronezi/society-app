const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// get Models
const User = require('../app/models/User');

// connect Sequelize to DB with database credentials defined in config/database.js
const conn = new Sequelize(dbConfig);

// start User ORM
User.init(conn);

// export connection
module.exports = conn;