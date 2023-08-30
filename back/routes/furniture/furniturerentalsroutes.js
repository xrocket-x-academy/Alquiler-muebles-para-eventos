const express = require('express');

const furnitureRentalsRouter = express.Router();

const furnitureRentalsController = require('../../controllers/furniture/furniturerentals');

furnitureRentalsRouter.post('/furniture-rentals', furnitureRentalsController.createFurnitureRental);
furnitureRentalsRouter.get('/furniture-rentals/:rentalcode', furnitureRentalsController.getFurnitureRentalByRentalCode);
furnitureRentalsRouter.put('/furniture-rentals/:rentalcode', furnitureRentalsController.updateFurnitureRentalByRentalCode);
furnitureRentalsRouter.delete('/furniture-rentals/:rentalcode', furnitureRentalsController.deleteFurnitureRentalByRentalCode);

module.exports = furnitureRentalsRouter;
