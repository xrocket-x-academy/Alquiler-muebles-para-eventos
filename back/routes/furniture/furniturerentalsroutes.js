const express = require('express');

const FurnitureRentalsRouter = express.Router();

const furnitureRentalsController = require('../../controllers/furniture/furniturerentals');

FurnitureRentalsRouter.post(
    '/furniture-rentals',
    furnitureRentalsController.createFurnitureRental,
);
FurnitureRentalsRouter.get(
    '/furniture-rentals/:rentalcode',
    furnitureRentalsController.getFurnitureRentalByRentalCode,
);
FurnitureRentalsRouter.put(
    '/furniture-rentals/:rentalcode',
    furnitureRentalsController.updateFurnitureRentalByRentalCode,
);
FurnitureRentalsRouter.delete(
    '/furniture-rentals/:rentalcode',
    furnitureRentalsController.deleteFurnitureRentalByRentalCode,
);

module.exports = { FurnitureRentalsRouter };
