const express = require('express');

const muebleRouter = express.Router();

const muebleController = require('../controllers/mueblecontrollers');

muebleRouter.post('/', muebleController.createMueble);

module.exports = muebleRouter;
