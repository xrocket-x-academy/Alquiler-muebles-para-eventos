const { Model, DataTypes } = require('sequelize');
const { sequelizeDatabase } = require('../../config/files/sequelize.config');

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
    endDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: sequelizeDatabase,
    modelName: 'RentalDetails',
});

module.exports = { RentalDetails };
