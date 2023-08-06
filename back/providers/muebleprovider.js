const { Mueble } = require('../models/mueble');

const muebleProvider = {
  createMueble: async (name, description, price) => {
    try {
      const nuevoMueble = await Mueble.create({ name, description, price });
      return nuevoMueble;
    } catch (error) {
      console.error('Error al crear el mueble:', error);
      throw new Error('Error al crear el mueble');
    }
  },
};

module.exports = muebleProvider;
