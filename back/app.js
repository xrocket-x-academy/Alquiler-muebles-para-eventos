require('dotenv').config();

// Express Dependencies:
const express = require('express');
// Sanitizacion XSS
const xss = require('xss-clean');
// Custom Dependencies:
const helmet = require('helmet');
const session = require('express-session');
// Winston logger Dependencies
const cors = require('cors');
const logger = require('./utils/winston.logger');

// Models:
const { sequelizeDatabase } = require('./config/files/sequelize.config');
const { User } = require('./models/user');
// eslint-disable-next-line no-unused-vars
const { Mueble } = require('./models/mueble');
const { Role } = require('./models/indexDB');
const { RoleXUser } = require('./models/indexDB');

// middlewares
const { logMiddleware } = require('./middleware/log.middleware');
// Rutes:
const routes = require('./routes');

const config = require('./config/config');
const validateEnv = require('./utils/validateEnv');

const app = express();
validateEnv.validate();
app.use(helmet());
app.use(helmet.ieNoOpen());
// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000;
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));

app.use(xss());
// Sets cookies security settings
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'strict',
    secure: true,
  },
};
if (config.environment === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded(
  {
    extended: false,
    limit: '10kb',
    parameterLimit: 10,
  },
));

// Cors configuration
const whitelist = process.env.CORS.split(' ');

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      logger.api.error('Not allowed by CORS', { origin });
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

if (config.environment === 'production') {
  app.set('trust proxy', 1); // trust first proxy
}

(async () => {
  try {
    await sequelizeDatabase.authenticate();
    // USER MODULE
    await Role.sync();
    await User.sync();
    await RoleXUser.sync();

    // FURNITURE MODULE
    await Mueble.sync();

    // RENTALS MODULE

    logger.api.debug('Conexión con la Base de Datos: EXITOSA');
  } catch (err) {
    logger.api.error('Conexión con la Base de Datos: FALLIDA');
    logger.api.error(err);
  }
})();
if (process.env.ENVIRONMENT === 'development') {
  app.use(logMiddleware);
}
app.use('/', routes);
module.exports = app;
