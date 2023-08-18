const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../../config/files/sequelize.config');

class User extends Model {
    static associate() {
        // add associations here
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 30],
            },
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [1, 30],
            },
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 50],
            },
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                len: [1, 50], // max email length is 50 characters
            },
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [14, 16],
            },
            allowNull: false,
        },
        start_date: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
    },
    {
        sequelize: sequelizeDatabase,
        modelName: 'User',
    },
);

module.exports = { User };
