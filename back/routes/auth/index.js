const express = require('express');
const { body } = require('express-validator');
const {
    signInController,
    signUpController,
} = require('../../controllers/auth');
const {
    validateValidationChain,
} = require('../../utils/validate-validationchain');

const authRouter = express.Router();

authRouter.post(
    '/sign-in',
    body('email').notEmpty().isString().isLength({ min: 1, max: 50 }),
    body('password').notEmpty().isString().isLength({ min: 14, max: 128 }),
    validateValidationChain,
    signInController,
);
authRouter.post(
    '/sign-up',
    body('first_name').notEmpty().isString().isLength({ min: 1, max: 30 }),
    body('last_name').notEmpty().isString().isLength({ min: 1, max: 30 }),
    body('username').notEmpty().isString().isLength({ min: 1, max: 50 }),
    body('email').notEmpty().isEmail().isLength({ min: 1, max: 50 }),
    body('password').notEmpty().isString().isLength({ min: 14, max: 128 }),
    validateValidationChain,
    signUpController,
);
module.exports = { authRouter };
