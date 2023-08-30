/* eslint-disable max-len */
const { rentalDetailsProvider } = require('../../providers/furniture/rentaldetails');

exports.createRentalDetails = async (req, res) => {
    try {
        const {
            rentalCode, unitPrice, quantity, endDate,
        } = req.body;
        const newRentalDetails = await rentalDetailsProvider.create({
            rentalCode,
            unitPrice,
            quantity,
            endDate,
        });
        res.json({ rentalDetails: newRentalDetails, message: 'Rental details created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating rental details', error: error.message });
    }
};

exports.getRentalDetailsByRentalCode = async (req, res) => {
    const { rentalCode } = req.params;
    try {
        const rentalDetails = await rentalDetailsProvider.getRentalDetailsByRentalCode(rentalCode);
        res.json({ rentalDetails });
    } catch (error) {
        res.status(404).json({ message: 'Rental details not found' });
    }
};

exports.updateRentalDetailsByRentalCode = async (req, res) => {
    const { rentalCode } = req.params;
    const { unitPrice, quantity, endDate } = req.body;
    try {
        const updatedRentalDetails = await rentalDetailsProvider.updateRentalDetailsByRentalCode(rentalCode, {
            unitPrice,
            quantity,
            endDate,
        });
        res.json({ rentalDetails: updatedRentalDetails, message: 'Rental details updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating rental details', error: error.message });
    }
};

exports.deleteRentalDetailsByRentalCode = async (req, res) => {
    const { rentalCode } = req.params;
    try {
        const deletionMessage = await rentalDetailsProvider.deleteRentalDetailsByRentalCode(rentalCode);
        res.json({ message: deletionMessage });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting rental details', error: error.message });
    }
};
