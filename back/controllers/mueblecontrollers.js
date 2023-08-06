const muebleProvider = require('../providers/muebleprovider');

exports.createMueble = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const nuevoMueble = await muebleProvider.createMueble(nombre, descripcion, precio);
    res.json({ mueble: nuevoMueble, message: 'Creaste un mueble, sos un capo' });
  } catch (error) {
    console.error('No creaste un mueble y no sos un capo:', error);
    res.status(500).json({ message: 'Error al crear el mueble' });
  }
};
