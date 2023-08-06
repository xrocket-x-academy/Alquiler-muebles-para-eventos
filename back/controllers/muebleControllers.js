const mueble = require('../models/mueble');

exports.createMueble = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newmueble = await mueble.create({ name, description, price });
    res.json({ mueble: newmueble, message: 'Creaste un mueble, sos un capo' });
  } catch (error) {
    console.error('No creaste un mueble y no sos un capo:', error);
    res.status(500).json({ message: 'Error al crear el mueble' });
  }
};
