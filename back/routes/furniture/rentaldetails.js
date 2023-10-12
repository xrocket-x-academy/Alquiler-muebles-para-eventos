const express = require('express');

const RentalDetailsRouter = express.Router();

const rentalDetailsControllers = require('../../controllers/furniture/rentaldetails');

RentalDetailsRouter.post(
    '/rental-details',
    rentalDetailsControllers.createRentalDetails,
);
RentalDetailsRouter.get(
    '/rental-details/:rentalCode',
    rentalDetailsControllers.getRentalDetailsByRentalCode,
);
RentalDetailsRouter.put(
    '/rental-details/:rentalCode',
    rentalDetailsControllers.updateRentalDetailsByRentalCode,
);
RentalDetailsRouter.delete(
    '/rental-details/:rentalCode',
    rentalDetailsControllers.deleteRentalDetailsByRentalCode,
);

module.exports = { RentalDetailsRouter };
