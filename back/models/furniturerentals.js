const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');
const { RentalDetails } = require('./rentaldetails');
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
    // clientId a desarrollar aca
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

FurnitureRentals.belongsTo(RentalDetails, { foreignKey: 'rentalCode' });
module.exports = { FurnitureRentals };
