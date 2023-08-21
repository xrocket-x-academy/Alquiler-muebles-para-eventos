const { furnitureRentalsProvider } = require('../providers/furniturerentals');

exports.createFurnitureRental = async (req, res) => {
  try {
    const {
      rentalCode, clientId, amount, rentalDate, startDate, endDate,
    } = req.body;
    const newFurnitureRental = await furnitureRentalsProvider.create({
      rentalCode,
      clientId,
      amount,
      rentalDate,
      startDate,
      endDate,
    });
    res.json({ furnitureRental: newFurnitureRental, message: 'Furniture rental created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating furniture rental' });
  }
};

exports.getFurnitureRentalByRentalCode = async (req, res) => {
  const { rentalCode } = req.params;
  try {
    const furnitureRental = await
    furnitureRentalsProvider.getFurnitureRentalsByRentalCode(rentalCode);
    res.json({ furnitureRental });
  } catch (error) {
    res.status(404).json({ message: 'Furniture rental not found' });
  }
};
