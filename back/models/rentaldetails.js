const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../config/files/sequelize.config');
const { Furniture } = require('./furniture');
const { FurnitureRentals } = require('./furniturerentals');

class RentalDetails extends Model {
    static associate() {
    // define association here
    }
}
RentalDetails.init({
    rentalCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    unitPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelizeDatabase,
    modelName: 'RentalDetails',
});

RentalDetails.belongsTo(Furniture, { foreignKey: 'furnitureId' });
RentalDetails.hasMany(FurnitureRentals, { foreignKey: 'rentalCode' });
module.exports = { RentalDetails };
