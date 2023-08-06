const express = require('express');

const { UserController } = require('../../controllers/user');

const signInRouter = express.Router();

signInRouter.post('/sign-in', UserController.sign.in);

module.exports = { signInRouter };
