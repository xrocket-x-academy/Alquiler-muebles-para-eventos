const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const { userProvider } = require('../providers/user'); // Adjust the path as needed

// Configure JWT strategy
passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SESSION_SECRET,
        },
        async (jwtPayload, done) => {
            try {
                const user = await userProvider.get.byId(jwtPayload.sub);
                if (!user) {
                    console.log('user doesnt exist');
                    return done('user doesnt exist', false);
                }
                return done(null, true);
            } catch (error) {
                return done(error, false);
            }
        },
    ),
);

// Custom authentication middleware
const validateJwt = passport.authenticate('jwt', { session: false });

module.exports = { validateJwt };
