const { FurnitureRentals } = require('../../models/furniture/furniturerentals');

const furnitureRentalsProvider = {
    create: async ({
        rentalCode, clientId, amount, rentalDate, startDate, endDate,
    }) => {
        try {
            const newFurnitureRentals = await FurnitureRentals.build({
                rentalCode, clientId, amount, rentalDate, startDate, endDate,
            });
            await newFurnitureRentals.validate();
            await newFurnitureRentals.save();
            return Promise.resolve(newFurnitureRentals);
        } catch (error) {
            return Promise.reject(error);
        }
    },

    getFurnitureRentalsByRentalCode: async (rentalCode) => {
        try {
            const furnitureRentals = await FurnitureRentals.findOne({ where: { rentalCode } });
            if (!furnitureRentals) {
                return Promise.reject(new Error('Furniture rental not found'));
            }
            return Promise.resolve(furnitureRentals);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    updateFurnitureRentalsByRentalCode: async (rentalCode) => {
        try {
            const furnitureRentals = await FurnitureRentals.findOne({ where: { rentalCode } });
            if (!furnitureRentals) {
                return Promise.reject(new Error('Furniture rental not found'));
            }
            furnitureRentals.clientId = clientId;
            furnitureRentals.amount = amount;
            furnitureRentals.rentalDate = rentalDate;
            furnitureRentals.startDate = startDate;
            furnitureRentals.endDate = endDate;
            await furnitureRentals.validate();
            await furnitureRentals.save();
            return Promise.resolve(furnitureRentals);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    deleteFurnitureRentalsByRentalCode: async (rentalCode) => {
        try {
            const furnitureRentals = await FurnitureRentals.findOne({ where: { rentalCode } });
            if (!furnitureRentals) {
                return Promise.reject(new Error('furniture rentals not found'));
            }
            if (!furnitureRentals.endDate) {
                return Promise.reject(new Error('furniture rentals already deleted'));
            }
            furnitureRentals.endDate = new Date();
            await furnitureRentals.save;
            return Promise.resolve('furniture rentals deleted');
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

module.exports = { furnitureRentalsProvider };
