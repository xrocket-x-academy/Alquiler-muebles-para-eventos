const express = require('express');
const { param, body } = require('express-validator');

const { validateJwt } = require('../../middleware/jwt.middleware');

const { userController } = require('../../controllers/user');
const {
    validateValidationChain,
} = require('../../utils/validate-validationchain');
const { authenticationMiddleware } = require('../../middleware/authentication');

const UserRouter = express.Router();

// get
UserRouter.get('/all', userController.get.all);
UserRouter.get(
    '/username/:username',
    param('username').notEmpty().isString().isLength({ min: 1, max: 50 }),
    validateValidationChain,
    userController.get.all,
);
UserRouter.get(
    '/:id',
    param('id').notEmpty(),
    validateValidationChain,
    userController.get.byId,
);
// put

// delete
UserRouter.delete(
    '/:id',
    param('id').notEmpty(),
    validateValidationChain,
    validateJwt,
    authenticationMiddleware,
    userController.delete.byId,
);
// post
UserRouter.post(
    '/add-role',
    body('userId').notEmpty().isInt(),
    body('roleId').notEmpty().isInt(),
    validateValidationChain,
    authenticationMiddleware,
    validateJwt,
    userController.assosiate.role,
);
module.exports = { UserRouter };
