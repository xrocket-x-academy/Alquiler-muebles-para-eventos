/* eslint-disable max-len */
const { furnitureProvider } = require('../providers/furnitureprovider');

exports.createFurniture = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newFurniture = await furnitureProvider.create({ name, description, price });
    res.json({ furniture: newFurniture, message: 'Creaste un mueble, sos un capo' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Mueble' });
  }
};

exports.getFurnitureById = async (req, res) => {
  const furnitureId = req.params.id;
  try {
    const furniture = await furnitureProvider.getMuebleById(furnitureId);
    res.json({ furniture });
  } catch (error) {
    res.status(404).json({ message: 'Mueble not found' });
  }
};

exports.updateFurniture = async (req, res) => {
  const furnitureId = req.params.id;
  const { name, description, price } = req.body;
  try {
    const updatedFurniture = await furnitureProvider.updateFurniture(furnitureId, { name, description, price });
    res.json({ furniture: updatedFurniture, message: 'Mueble updated' });
  } catch (error) {
    res.status(404).json({ message: 'Mueble not found' });
  }
};

exports.deleteFurniture = async (req, res) => {
  const furnitureId = req.params.id;
  try {
    await furnitureProvider.deleteFurniture(furnitureId);
    res.json({ message: 'Mueble deleted' });
  } catch (error) {
    res.status(404).json({ message: 'Mueble not found' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const furnitureIds = await furnitureProvider.getAll({ limit: parseInt(limit, 10), offset: parseInt(offset, 10) });
    res.json({ furnitureIds });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Mueble IDs' });
  }
};
