const express = require('express');

const { AuthController } = require('../../controllers/auth');

const signInRouter = express.Router();

signInRouter.post('/sign-up', AuthController.sign.up);

module.exports = { signInRouter };
