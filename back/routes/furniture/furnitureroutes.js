const express = require('express');

const furnitureRouter = express.Router();

const furnitureController = require('../../controllers/furniture/furniturecontrollers');

furnitureRouter.post('/', furnitureController.createFurniture);
furnitureRouter.get('/all', furnitureController.getAll);
furnitureRouter.get('/:id', furnitureController.getFurnitureById);
furnitureRouter.put('/:id', furnitureController.updateFurniture);
furnitureRouter.put('/update-availability/:id', furnitureController.updateAvailability);
furnitureRouter.delete('/:id', furnitureController.deleteFurniture);

module.exports = furnitureRouter;
