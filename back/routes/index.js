const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
// routers
// const { signInRouter } = require('./auth/sign-in');
const { UserRouter } = require('./user');
const { authRouter } = require('./auth');
const { roleRouter } = require('./role');
const { FurnitureRouter } = require('./furniture/furnitureroutes');
const {
    FurnitureRentalsRouter,
} = require('./furniture/furniturerentalsroutes');
const { RentalDetailsRouter } = require('./furniture/rentaldetails');

const appRoutes = Express.Router();

// Rutas
appRoutes.use('/furniture', FurnitureRouter);
appRoutes.use('/furniture-rentals', FurnitureRentalsRouter);
appRoutes.use('/rental-details', RentalDetailsRouter);

appRoutes.use('/auth', authRouter);
appRoutes.use('/user', UserRouter);
appRoutes.use('/role', roleRouter);

// use
appRoutes.use('/', rootPath.handler);
appRoutes.use(rootPath.setHeaders);
appRoutes.use(errors.handler);

module.exports = appRoutes;
