const { roleProvider } = require('../../providers');
const { HttpsStatusCodes } = require('../../utils/http-status-codes');
const { ApiResponse } = require('../../utils/json-response');

const roleController = {
    get: {
        all: async (req, res) => {
            try {
                const roles = await roleProvider.get.all();
                return ApiResponse.success(res, HttpsStatusCodes.OK, roles);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
        byId: async (req, res) => {
            const { id } = req.params;
            try {
                const role = await roleProvider.get.byId(id);
                if (!role) {
                    return ApiResponse.error(res, HttpsStatusCodes.NOT_FOUND);
                }
                return ApiResponse.success(res, HttpsStatusCodes.OK, role);
            } catch (error) {
                return ApiResponse.error(
                    res,
                    HttpsStatusCodes.INTERNAL_SERVER_ERROR,
                );
            }
        },
    },
};
module.exports = { roleController };
