const { Furniture } = require('./furniture');
const { RentalDetails } = require('./rentaldetails');
const { FurnitureRentals } = require('./furniturerentals');
const { User } = require('../user/user');

User.hasMany(Furniture, { as: 'Furnitures', foreignKey: 'ownerId' });
Furniture.hasMany(RentalDetails, { as: 'RentalDetails', foreignKey: 'id' });
RentalDetails.hasOne(FurnitureRentals, { as: 'FurnitureRentals', foreignKey: 'rentalCode' });
User.hasOne(FurnitureRentals, { as: 'FurnitureRentals', foreignKey: 'clientId ' });

module.exports = { Furniture, RentalDetails, FurnitureRentals, User };
