const { muebleProvider } = require('../providers/muebleprovider');

exports.createMueble = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const nuevoMueble = await muebleProvider.create({ name, description, price });
    res.json({ mueble: nuevoMueble, message: 'Creaste un mueble, sos un capo' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el mueble' });
  }
};
