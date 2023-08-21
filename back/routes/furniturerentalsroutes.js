const express = require('express');

const furnitureRentalsRouter = express.Router();

const furnitureRentalsController = require('../controllers/furniturerentals');

furnitureRentalsRouter.post('/', furnitureRentalsController.createFurnitureRental);
furnitureRentalsRouter.get('/:rentalCode', furnitureRentalsController.getFurnitureRentalByRentalCode);

module.exports = furnitureRentalsRouter;
