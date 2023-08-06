const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const appRoutes = Express.Router();

// routers
const { signInRouter } = require('./auth/sign-in');
// Rutas
appRoutes.use('/auth', signInRouter);
// use=
appRoutes.use('/', rootPath.handler);
appRoutes.use(rootPath.setHeaders);
appRoutes.use(errors.handler);

module.exports = appRoutes;
