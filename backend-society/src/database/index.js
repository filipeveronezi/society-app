const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Court = require('../app/models/Court');
const Address = require('../app/models/Address');

const conn = new Sequelize(dbConfig);

Court.init(conn);
Address.init(conn);

Court.associate(conn.models);
Address.associate(conn.models);

module.exports = conn;