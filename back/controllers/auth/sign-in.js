const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userProvider } = require('../../providers');
const { HttpsStatusCodes } = require('../../utils/http-status-codes');
const { ApiResponse } = require('../../utils/json-response');

const signInController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userProvider.get.byEmail(email);
        if (!user) {
            return ApiResponse.error(
                res,
                HttpsStatusCodes.NOT_FOUND,
                'user not found',
            );
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return ApiResponse.error(
                res,
                HttpsStatusCodes.UNAUTHORIZED,
                'bad credentials',
            );
        }

        // we create the token
        const payload = { sub: user.id };
        const token = jwt.sign(payload, process.env.SESSION_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION_TIME,
        });
        return ApiResponse.success(res, HttpsStatusCodes.OK, token);
    } catch (error) {
        return ApiResponse.error(
            res,
            HttpsStatusCodes.INTERNAL_SERVER_ERROR,
            null,
        );
    }
};
module.exports = { signInController };
