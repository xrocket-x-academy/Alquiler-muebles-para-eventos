const { Furniture } = require('../models/furniture');

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
  getFurnitureById: async (furnitureId) => {
    try {
      const furniture = await Furniture.findByPk(furnitureId);
      if (!furniture) {
        return Promise.reject(new Error('Mueble not found'));
      }
      return Promise.resolve(furniture);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  updateFurniture: async (furnitureId, {
    name, description, price, stock, startDate, endDate,
  }) => {
    try {
      const furniture = await Furniture.findByPk(furnitureId);
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

  deleteFurniture: async (furnitureId) => {
    try {
      const furniture = await Furniture.findByPk(furnitureId);
      if (!furniture) {
        return Promise.reject(new Error('Mueble not found'));
      }
      await furniture.destroy();
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
};

module.exports = { furnitureProvider };
