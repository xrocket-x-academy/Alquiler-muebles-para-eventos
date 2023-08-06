const express = require('express');

const { AuthController } = require('../../controllers/auth');

const signInRouter = express.Router();

signInRouter.post('/sign-in', AuthController.sign.in);

module.exports = { signInRouter };
