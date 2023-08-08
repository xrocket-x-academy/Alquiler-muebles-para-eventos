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

exports.getMuebleById = async (req, res) => {
  const muebleId = req.params.id;
  try {
    const mueble = await muebleProvider.getMuebleById(muebleId);
    res.json({ mueble });
  } catch (error) {
    res.status(404).json({ message: 'Mueble not found' });
  }
};

exports.updateMueble = async (req, res) => {
  const muebleId = req.params.id;
  const { name, description, price } = req.body;
  try {
    const updatedMueble = await muebleProvider.updateMueble(muebleId, { name, description, price });
    res.json({ mueble: updatedMueble, message: 'Mueble updated' });
  } catch (error) {
    res.status(404).json({ message: 'Mueble not found' });
  }
};

exports.deleteMueble = async (req, res) => {
  const muebleId = req.params.id;
  try {
    await muebleProvider.deleteMueble(muebleId);
    res.json({ message: 'Mueble deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Mueble not found' });
  }
};
