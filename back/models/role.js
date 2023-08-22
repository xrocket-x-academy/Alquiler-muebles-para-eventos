const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');

class Role extends Model {
  static associate() {
    // add associations here
  }
}

Role.init({
  role_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize: sequelizeDatabase,
  modelName: 'Roles',
});

module.exports = { Role };
