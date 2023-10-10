const express = require('express');

const furnitureRouter = express.Router();

const authenticationMiddleware = require('../../middleware/authentication');

const furnitureController = require('../../controllers/furniture/furniturecontrollers');

furnitureRouter.post('/', authenticationMiddleware, furnitureController.createFurniture);
furnitureRouter.get('/all', authenticationMiddleware, furnitureController.getAll);
furnitureRouter.get('/:id', authenticationMiddleware, furnitureController.getFurnitureById);
furnitureRouter.put('/:id', authenticationMiddleware, furnitureController.updateFurniture);
furnitureRouter.put('/update-availability/:id', authenticationMiddleware, furnitureController.updateAvailability);
furnitureRouter.delete('/:id', authenticationMiddleware, furnitureController.deleteFurniture);

module.exports = furnitureRouter;
