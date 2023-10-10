const { RentalDetails } = require('../../models/furniture/rentaldetails');
const { FurnitureRentals } = require('../../models/furniture/furniturerentals');

const rentalDetailsProvider = {
    create: async ({
        rentalCode, unitPrice, quantity, endDate,
    }) => {
        try {
            const newRentalDetails = await RentalDetails.build({
                rentalCode, unitPrice, quantity, endDate,
            });
            await newRentalDetails.validate();
            await newRentalDetails.save();
            return Promise.resolve(newRentalDetails);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getRentalDetailsByRentalCode: async (rentalCode) => {
        try {
            const rentalDetails = await RentalDetails.findOne({ where: { rentalCode } });
            if (!rentalDetails) {
                return Promise.reject(new Error('Furniture rental not found'));
            }
            return Promise.resolve(rentalDetails);
        } catch (error) {
            return Promise.resolve(error);
        }
    },
    updateRentalDetailsByRentalCode: async (rentalCode) => {
        try {
            const rentalDetails = await RentalDetails.findOne({ where: { rentalCode } });
            if (!rentalDetails) {
                return Promise.reject(new Error('Rental details not found'));
            }
            rentalDetails.unitPrice = unitPrice;
            rentalDetails.quantity = quantity;
            rentalDetails.endDate = endDate;
            await rentalDetails.validate();
            await rentalDetails.save();
            return Promise.resolve(rentalDetails);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    deleteRentalDetailsByRentalCode: async (rentalCode) => {
        try {
            const rentalDetails = await RentalDetails.findOne({ where: { rentalCode } });
            if (!rentalDetails) {
                return Promise.reject(new Error('Rental details not found'));
            }
            if (!rentalDetails.endDate) {
                return Promise.reject(new Error('Rental details already deleted'));
            }
            rentalDetails.endDate = new Date();
            await rentalDetails.save;
            return Promise.resolve('Rental details deleted');
        } catch (error) {
            return Promise.reject(error);
        }
    },
    associate: {
        addFurnitureRentalsToRentalDetails: async (rentalCodeRentalDetails,
            rentalCodeFurnitureRentals) => {
            try {
                const rentalDetails = await RentalDetails.findOne({
                    where: {
                        rentalCode: rentalCodeRentalDetails,
                    },
                });

                const furnitureRentals = await FurnitureRentals.findOne({
                    where: {
                        rentalCode: rentalCodeFurnitureRentals,
                    },
                });

                if (!rentalDetails || !furnitureRentals) {
                    return Promise.reject(new Error('RentalDetails or FurnitureRentals not found'));
                }

                rentalDetails.setFurnitureRentals(furnitureRentals);
                furnitureRentals.setRentalDetails(rentalDetails);

                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        },

    },
};

module.exports = { rentalDetailsProvider };
