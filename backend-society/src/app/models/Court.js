const { Model, DataTypes } = require('sequelize');

class Court extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      hour_value: DataTypes.DECIMAL(10,2),
      user_id: DataTypes.INTEGER
    }, {
      sequelize,
    })
  }

  static associate(models) {
    this.hasOne(models.Address, { foreignKey: 'court_id', as: 'court' });
  }
}

module.exports = Court;