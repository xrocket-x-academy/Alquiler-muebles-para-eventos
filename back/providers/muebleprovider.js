const { Mueble } = require('../models/mueble');

const muebleProvider = {
  create: async ({ name, description, price }) => {
    try {
      const nuevoMueble = await Mueble.build({ name, description, price });
      await nuevoMueble.validate();
      await nuevoMueble.save();
      return Promise.resolve(nuevoMueble);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getMuebleById: async (muebleId) => {
    try {
      const mueble = await Mueble.findByPk(muebleId);
      if (!mueble) {
        return Promise.reject(new Error('Mueble not found'));
      }
      return Promise.resolve(mueble);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  updateMueble: async (muebleId, { name, description, price }) => {
    try {
      const mueble = await Mueble.findByPk(muebleId);
      if (!mueble) {
        return Promise.reject(new Error('Mueble not found'));
      }
      mueble.name = name;
      mueble.description = description;
      mueble.price = price;
      await mueble.validate();
      await mueble.save();
      return Promise.resolve(mueble);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  deleteMueble: async (muebleId) => {
    try {
      const mueble = await Mueble.findByPk(muebleId);
      if (!mueble) {
        return Promise.reject(new Error('Mueble not found'));
      }
      await mueble.destroy();
      return Promise.resolve('Mueble deleted');
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getAll: async ({ limit, offset }) => {
    const finalLimit = limit || 10;
    const finalOffset = offset || 0;
    try {
      const muebles = await Mueble.findAll({
        attributes: ['id'],
        limit: finalLimit,
        offset: finalOffset,
      });
      return Promise.resolve(muebles);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

module.exports = { muebleProvider };
