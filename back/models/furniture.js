const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');
const { User } = require('./user');
const { RentalDetails } = require('./rentaldetails');

class Furniture extends Model {
  static associate() {
    // define association here
  }
}
Furniture.init({
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
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize: sequelizeDatabase,
  modelName: 'Furniture',
});

Furniture.belongsTo(User, { as: 'owner', foreignKey: 'ownerId' });
Furniture.hasMany(RentalDetails, { foreignKey: 'furnitureId' });
module.exports = { Furniture };
