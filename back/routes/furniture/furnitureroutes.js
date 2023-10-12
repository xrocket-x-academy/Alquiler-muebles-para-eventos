const express = require('express');
const { authenticationMiddleware } = require('../../middleware/authentication');
const furnitureController = require('../../controllers/furniture/furniturecontrollers');

const FurnitureRouter = express.Router();

FurnitureRouter.post(
    '/',
    authenticationMiddleware,
    furnitureController.createFurniture,
);
FurnitureRouter.get(
    '/all',
    authenticationMiddleware,
    furnitureController.getAll,
);
FurnitureRouter.get(
    '/:id',
    authenticationMiddleware,
    furnitureController.getFurnitureById,
);
FurnitureRouter.put(
    '/:id',
    authenticationMiddleware,
    furnitureController.updateFurniture,
);
FurnitureRouter.put(
    '/update-availability/:id',
    authenticationMiddleware,
    furnitureController.updateAvailability,
);
FurnitureRouter.delete(
    '/:id',
    authenticationMiddleware,
    furnitureController.deleteFurniture,
);

module.exports = { FurnitureRouter };
