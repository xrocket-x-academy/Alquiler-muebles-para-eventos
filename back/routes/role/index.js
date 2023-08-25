const { param } = require('express-validator');
const express = require('express');
const { roleController } = require('../../controllers/role');

const roleRouter = express.Router();

roleRouter.get('/all', roleController.get.all);
roleRouter.get('/:id', param('id').notEmpty().isInt(), roleController.get.byId);

module.exports = { roleRouter };
