const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
    }, {
      sequelize,
    })
  }

  static associate(models) {
    this.belongsTo(models.Court, { foreignKey: 'court_id', as: 'address' });
  }
}

module.exports = Address;