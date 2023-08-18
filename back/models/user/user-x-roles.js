const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../../config/files/sequelize.config');

class UserXRole extends Model {
    static associate() {
        // define associations here
    }
}

UserXRole.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
            },
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            validate: {
                isDate: true,
            },
            allowNull: true,
        },
    },
    {
        sequelize: sequelizeDatabase,
        modelName: 'UserXRole',
    },
);

module.exports = { UserXRole };
