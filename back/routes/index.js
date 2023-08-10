const Express = require('express');
const muebleRouter = require('./muebleroutes');
// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const appRoutes = Express.Router();

// routers
const { signInRouter } = require('./auth/sign-in');
const { UserRouter } = require('./user');
// Rutas
appRoutes.use('/mueble', muebleRouter);

appRoutes.use('/auth', signInRouter);
appRoutes.use('/user', UserRouter);
// use=
appRoutes.use('/', rootPath.handler);
appRoutes.use(rootPath.setHeaders);
appRoutes.use(errors.handler);

module.exports = appRoutes;
