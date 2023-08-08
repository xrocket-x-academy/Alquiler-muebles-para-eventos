const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');

class Mueble extends Model {
  static associate() {
    // define association here
  }
}
Mueble.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  sequelize: sequelizeDatabase,
  modelName: 'Mueble',
});

module.exports = { Mueble };
