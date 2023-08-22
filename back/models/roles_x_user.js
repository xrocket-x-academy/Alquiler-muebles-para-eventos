const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');

class RoleXUser extends Model {
  static associate() {
    // add associations here
  }
}

RoleXUser.init({
  role_x_user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED, // Foreign Key `Users`
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER.UNSIGNED, // // Foreign Key `Roles`
    allowNull: false,
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
  modelName: 'RolesXUser',
});

module.exports = { RoleXUser };
