const { Furniture } = require('../../models/furniture/furniture');
const { User } = require('../../models/user/user');
const { RentalDetails } = require('../../models/furniture/rentaldetails');

const furnitureProvider = {
    create: async ({
        name, description, price, stock, startDate, endDate,
    }) => {
        try {
            const newFurniture = await Furniture.build({
                name, description, price, stock, startDate, endDate,
            });
            await newFurniture.validate();
            await newFurniture.save();
            return Promise.resolve(newFurniture);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getFurnitureById: async (id) => {
        try {
            const furniture = await Furniture.findByPk(id);
            if (!furniture) {
                return Promise.reject(new Error('Mueble not found'));
            }
            return Promise.resolve(furniture);
        } catch (error) {
            return Promise.reject(error);
        }
    },

    updateFurniture: async (id, {
        name, description, price, stock, startDate, endDate,
    }) => {
        try {
            const furniture = await Furniture.findByPk(id);
            if (!furniture) {
                return Promise.reject(new Error('Mueble not found'));
            }
            furniture.name = name;
            furniture.description = description;
            furniture.price = price;
            furniture.stock = stock;
            furniture.startDate = startDate;
            furniture.endDate = endDate;
            await furniture.validate();
            await furniture.save();
            return Promise.resolve(furniture);
        } catch (error) {
            return Promise.reject(error);
        }
    },

    deleteFurniture: async (id) => {
        try {
            const furniture = await Furniture.findByPk(id);
            if (!furniture) {
                return Promise.reject(new Error('Mueble not found'));
            }
            if (furniture.endDate) {
                return Promise.reject(new Error('Furniture already deleted'));
            }
            furniture.endDate = new Date();
            await furniture.save;
            return Promise.resolve('Mueble deleted');
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getAll: async ({ limit, offset }) => {
        const finalLimit = limit || 10;
        const finalOffset = offset || 0;
        try {
            const furniture = await Furniture.findAll({
                attributes: ['id'],
                limit: finalLimit,
                offset: finalOffset,
            });
            return Promise.resolve(furniture);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    updateAvailability: async (id, available) => {
        try {
            const furniture = await Furniture.findByPk(id);
            if (!furniture) {
                return Promise.reject(new Error('Mueble not found'));
            }

            furniture.available = available;

            await furniture.save();
            return Promise.resolve(furniture);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    associate: {
        addOwnerToFurniture: async (furnitureId, ownerId) => {
            try {
                const owner = await User.findOne({
                    where: {
                        id: ownerId,
                    },
                });

                const furniture = await Furniture.findByPk(furnitureId);

                if (!owner || !furniture) {
                    return Promise.reject(new Error('Owner or Furniture not found'));
                }

                await furniture.setOwner(owner);
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        },

        addRentalDetailsToFurniture: async (furnitureId, rentalDetailsId) => {
            try {
                const rentalDetails = await RentalDetails.findByPk(rentalDetailsId);

                const furniture = await Furniture.findByPk(furnitureId);

                if (!rentalDetails || !furniture) {
                    return Promise.reject(new Error('RentalDetails or Furniture not found'));
                }

                await furniture.setRentalDetails(rentalDetails);
                return Promise.resolve();
            } catch (error) {
                return Promise.reject(error);
            }
        },
    },
};

module.exports = { furnitureProvider };
