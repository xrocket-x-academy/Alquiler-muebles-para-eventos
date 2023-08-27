const jwt = require('jsonwebtoken');

const { userProvider } = require('../../providers/user');
const { ApiResponse } = require('../../utils/json-response');
const { HttpsStatusCodes } = require('../../utils/http-status-codes');

const signUpController = async (req, res) => {
    const { first_name, last_name, username, email, password } = req.body;

    try {
        // we check the availability of the username and email
        const emailIsAvaiable = await userProvider.checkAvailabilityOf.email(email);
        if (!emailIsAvaiable) {
            return ApiResponse.error(
                res,
                HttpsStatusCodes.CONFLICT,
                'email already in use',
            );
        }

        const usernameIsAvaiable = await userProvider.checkAvailabilityOf.username(
            username,
        );

        if (!usernameIsAvaiable) {
            return ApiResponse.error(
                res,
                HttpsStatusCodes.CONFLICT,
                'username already in use',
            );
        }

        // we proceed to create the user
        const user = await userProvider.create({
            first_name,
            last_name,
            username,
            email,
            password,
        });

        // we generate the token
        const payload = {
            sub: user.id,
        };
        const token = jwt.sign(payload, process.env.SESSION_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION_TIME,
        });

        return ApiResponse.success(res, HttpsStatusCodes.CREATED, token);
    } catch (error) {
        console.log(error);
        return ApiResponse.error(
            res,
            HttpsStatusCodes.INTERNAL_SERVER_ERROR,
            'Error while creating the user',
        );
    }
};
module.exports = { signUpController };
