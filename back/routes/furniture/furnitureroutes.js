const express = require('express');

const furnitureRouter = express.Router();

const { authenticationMiddleware } = require('../../middleware/authentication');

const furnitureController = require('../../controllers/furniture/furniturecontrollers');

const { validateJwt } = require('../../middleware/jwt.middleware');

furnitureRouter.post(
    '/',
    validateJwt,
    authenticationMiddleware,
    furnitureController.createFurniture,
);
furnitureRouter.get(
    '/all',
    authenticationMiddleware,
    furnitureController.getAll,
);
furnitureRouter.get(
    '/:id',
    authenticationMiddleware,
    furnitureController.getFurnitureById,
);
furnitureRouter.put(
    '/:id',
    validateJwt,
    authenticationMiddleware,
    furnitureController.updateFurniture,
);
furnitureRouter.put(
    '/update-availability/:id',
    validateJwt,
    authenticationMiddleware,
    furnitureController.updateAvailability,
);
furnitureRouter.delete(
    '/:id',
    validateJwt,
    authenticationMiddleware,
    furnitureController.deleteFurniture,
);

module.exports = furnitureRouter;
