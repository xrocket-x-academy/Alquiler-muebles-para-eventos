const Express = require('express');
const furnitureRouter = require('./furnitureroutes');
const furnitureRentalsRouter = require('./furniturerentalsroutes');
// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');

const appRoutes = Express.Router();

// routers
// const { signInRouter } = require('./auth/sign-in');
const { UserRouter } = require('./user');
const { authRouter } = require('./auth');
const { roleRouter } = require('./role');
// Rutas
appRoutes.use('/furniture', furnitureRouter);
appRoutes.use('/furnitureRentals', furnitureRentalsRouter);

appRoutes.use('/auth', authRouter);
appRoutes.use('/user', UserRouter);
appRoutes.use('/role', roleRouter);

// use
appRoutes.use('/', rootPath.handler);
appRoutes.use(rootPath.setHeaders);
appRoutes.use(errors.handler);

module.exports = appRoutes;
