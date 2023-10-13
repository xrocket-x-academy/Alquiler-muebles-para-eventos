const express = require('express');
const { authenticationMiddleware } = require('../../middleware/authentication');
const furnitureController = require('../../controllers/furniture/furniturecontrollers');
const { validateJwt } = require('../../middleware/jwt.middleware');

const FurnitureRouter = express.Router();

FurnitureRouter.post(
    '/',
    validateJwt,
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
    validateJwt,
    authenticationMiddleware,
    furnitureController.updateFurniture,
);
FurnitureRouter.put(
    '/update-availability/:id',
    validateJwt,
    authenticationMiddleware,
    furnitureController.updateAvailability,
);
FurnitureRouter.delete(
    '/:id',
    validateJwt,
    authenticationMiddleware,
    furnitureController.deleteFurniture,
);

module.exports = { FurnitureRouter };
