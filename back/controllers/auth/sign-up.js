const jwt = require('jsonwebtoken');

const { userProvider } = require('../../providers/user');
const { ApiResponse } = require('../../utils/json-response');
const { HttpsStatusCodes } = require('../../utils/http-status-codes');

const signUpController = async (req, res) => {
    const { first_name, last_name, username, email, password } = req.body;

    try {
        const user = await userProvider.create({
            first_name,
            last_name,
            username,
            email,
            password,
        });

        const payload = {
            sub: user.id,
        };

        const token = jwt.sign(payload, process.env.SESSION_SECRET, {
            expiresIn: '2d',
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
