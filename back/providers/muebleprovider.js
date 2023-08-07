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
};

module.exports = { muebleProvider };
