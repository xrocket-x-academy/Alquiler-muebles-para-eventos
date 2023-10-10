const express = require('express');

const rentalDetailsRouter = express.Router();

const rentalDetailsControllers = require('../../controllers/furniture/rentaldetails');

rentalDetailsRouter.post('/rental-details', rentalDetailsControllers.createRentalDetails);
rentalDetailsRouter.get('/rental-details/:rentalCode', rentalDetailsControllers.getRentalDetailsByRentalCode);
rentalDetailsRouter.put('/rental-details/:rentalCode', rentalDetailsControllers.updateRentalDetailsByRentalCode);
rentalDetailsRouter.delete('/rental-details/:rentalCode', rentalDetailsControllers.deleteRentalDetailsByRentalCode);

module.exports = rentalDetailsRouter;
