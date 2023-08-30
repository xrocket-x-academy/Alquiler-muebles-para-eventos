/* eslint-disable max-len */
const { furnitureRentalsProvider } = require('../../providers/furniture/furniturerentals');

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
        res.status(500).json({ message: 'Error creating furniture rental', error: error.message });
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

exports.updateFurnitureRentalByRentalCode = async (req, res) => {
    const { rentalCode } = req.params;
    const {
        clientId, amount, rentalDate, startDate, endDate,
    } = req.body;
    try {
        const updatedFurnitureRental = await furnitureRentalsProvider.updateFurnitureRentalsByRentalCode(rentalCode, {
            clientId,
            amount,
            rentalDate,
            startDate,
            endDate,
        });
        res.json({ furnitureRental: updatedFurnitureRental, message: 'Furniture rental updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating furniture rental', error: error.message });
    }
};

exports.deleteFurnitureRentalByRentalCode = async (req, res) => {
    const { rentalCode } = req.params;
    try {
        const deletionMessage = await furnitureRentalsProvider.deleteFurnitureRentalsByRentalCode(rentalCode);
        res.json({ message: deletionMessage });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting furniture rental', error: error.message });
    }
};
