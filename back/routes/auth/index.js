const express = require('express');
const {
    signInController,
    signUpController,
} = require('../../controllers/auth');

const authRouter = express.Router();

authRouter.post('/sign-in', signInController);
authRouter.post('/sign-up', signUpController);

module.exports = { authRouter };
