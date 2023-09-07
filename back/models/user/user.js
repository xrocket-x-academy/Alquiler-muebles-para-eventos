const bcrypt = require('bcrypt');

const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../../config/files/sequelize.config');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 30],
            },
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
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
            unique: true,
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
                len: [14, 128],
            },
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            defaultValue: null,
            allowNull: true,
        },
    },
    {
        sequelize: sequelizeDatabase,
        modelName: 'User',
    },
);

User.beforeCreate(async (user) => {
    const saltRounds = 10 || process.env.SALT_ROUNDS;
    user.password = await bcrypt.hash(user.password, saltRounds);
});

module.exports = { User };
