const Mueble = require('../models/mueble');

const muebleProvider = {
  createMueble: async (nombre, descripcion, precio) => {
    try {
      const nuevoMueble = await Mueble.create({ nombre, descripcion, precio });
      return nuevoMueble;
    } catch (error) {
      console.error('Error al crear el mueble:', error);
      throw new Error('Error al crear el mueble');
    }
  },
};

module.exports = { muebleProvider };
