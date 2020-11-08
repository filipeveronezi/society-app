module.exports = {
  dialect: 'postgres',
  host: 'db',
  // host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'societysql',
  define: {
    timestamps: true,
    underscored: true,
  },
}