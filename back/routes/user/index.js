const express = require('express');
const { UserController } = require('../../controllers/user');

const UserRouter = express.Router();

// get
UserRouter.get('/all', UserController.get.all);
UserRouter.get('/id/:id', UserController.get.byId);
UserRouter.get('/username/:username', UserController.get.byUsername);

// put
UserRouter.put('/:id', UserController.put.byId);

// delete
UserRouter.delete('/:id', UserController.delete.byId);

module.exports = { UserRouter };
