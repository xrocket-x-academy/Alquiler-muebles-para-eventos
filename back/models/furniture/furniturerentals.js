const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../../config/files/sequelize.config');
const { RentalDetails } = require('./rentaldetails');
const { User } = require('../user');
// aca voy a necesitar un clientId por parte de User

class FurnitureRentals extends Model {
    static associate() {
    // define association here
    }
}
FurnitureRentals.init({
    rentalCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: RentalDetails,
            key: 'rentalCode',
        },
    },
    // USAR ID DE USUARIO PARA CLIENT ID
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    rentalDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },

}, {
    sequelize: sequelizeDatabase,
    modelName: 'FurnitureRentals',
});

module.exports = { FurnitureRentals };
