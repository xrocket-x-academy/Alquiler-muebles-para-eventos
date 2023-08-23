const { userProvider } = require('../../providers/user');
const { HttpsStatusCodes } = require('../../utils/http-status-codes');
const { ApiResponse } = require('../../utils/json-response');

const userController = {
    post: async (req, res) => {
        const { first_name, last_name, username, email, password } = req.body;
        try {
            await userProvider.create({
                first_name,
                last_name,
                username,
                email,
                password,
            });
            return ApiResponse.success(res, HttpsStatusCodes.CREATED);
        } catch (error) {
            console.log(error);
            return ApiResponse.error(
                res,
                HttpsStatusCodes.INTERNAL_SERVER_ERROR,
            );
        }
    },
    get: {
        byId: async (req, res) => {
            const { id } = req.params;
            try {
                const user = await userProvider.get.byId(id);
                if (!user) {
                    return ApiResponse.error(res, HttpsStatusCodes.NOT_FOUND);
                }
                return ApiResponse.success(res, HttpsStatusCodes.OK, user);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
        all: async (req, res) => {
            let { offset, limit } = req.query;
            // eslint-disable-next-line no-unused-expressions
            offset ? (offset = parseInt(offset, 10)) : (offset = 0);
            // eslint-disable-next-line no-unused-expressions
            limit ? (limit = parseInt(limit, 10)) : (limit = 10);
            try {
                const users = await userProvider.get.all(offset, limit);
                return ApiResponse.success(res, HttpsStatusCodes.OK, users);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
        byUsername: async (req, res) => {
            const { username } = req.params;
            try {
                const user = await userProvider.get.byUsername(username);
                if (!user) {
                    if (!user) {
                        return ApiResponse.error(
                            res,
                            HttpsStatusCodes.NOT_FOUND,
                        );
                    }
                }
                return ApiResponse.success(res, HttpsStatusCodes.OK, user);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
    },
    delete: {
        byId: async (req, res) => {
            const { id } = req.params;
            try {
                await userProvider.delete.byId(id);
                return ApiResponse.success(res, HttpsStatusCodes.OK);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
    },
    assosiate: {
        role: async (req, res) => {
            const { userId, roleId } = req.body;
            try {
                await userProvider.assosiate.role(userId, roleId);
                return ApiResponse.success(res, HttpsStatusCodes.OK);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
    },
};

module.exports = { userController };
