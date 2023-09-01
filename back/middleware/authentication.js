const { verify } = require('jsonwebtoken');
const { HttpsStatusCodes } = require('../utils/http-status-codes');
const { ApiResponse } = require('../utils/json-response');

const authenticationMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return ApiResponse.error(
            res,
            HttpsStatusCodes.UNAUTHORIZED,
            'no token was found',
        );
    }

    const tokenDessencripted = verify(token, process.env.SESSION_SECRET);
    if (!tokenDessencripted || !tokenDessencripted.sub) {
        return ApiResponse.error(
            res,
            HttpsStatusCodes.UNAUTHORIZED,
            'invalid token, couldnt find any sub',
        );
    }

    // we check the user is trying to access his own aresource
    if (req.params.id !== tokenDessencripted.sub) {
        return ApiResponse.error(
            res,
            HttpsStatusCodes.UNAUTHORIZED,
            'invalid token, trying to access a resource that doesnt belong to your session',
        );
    }
    return next();
};
module.exports = { authenticationMiddleware };
