// database configuration
module.exports = {
  dialect: 'postgres',
  host: 'users-db',
  username: 'postgres',
  password: 'docker',
  database: 'userssql',
  define: {
    timestamps: true,
    underscored: true,
  },
}