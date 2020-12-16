module.exports = {
  dialect: 'postgres',
  host: 'society-db',
  username: 'postgres',
  password: 'docker',
  database: 'societysql',
  define: {
    timestamps: true,
    underscored: true,
  },
};