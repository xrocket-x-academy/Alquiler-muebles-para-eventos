const express = require('express');

const muebleRouter = express.Router();

const muebleController = require('../controllers/mueblecontrollers');

muebleRouter.post('/', muebleController.createMueble);
muebleRouter.get('/all', muebleController.getAll);
muebleRouter.get('/:id', muebleController.getMuebleById);
muebleRouter.put('/:id', muebleController.updateMueble);
muebleRouter.delete('/:id', muebleController.deleteMueble);

module.exports = muebleRouter;
