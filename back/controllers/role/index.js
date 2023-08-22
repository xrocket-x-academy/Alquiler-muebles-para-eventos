const { roleProvider } = require('../../providers');

const roleController = {
    get: {
        all: async (req, res) => {
            try {
                const roles = await roleProvider.get.all();
                res.status(200).json(roles);
            } catch (error) {
                res.status(500).json(error);
            }
        },
        byId: async (req, res) => {
            const { id } = req.params;
            try {
                const role = await roleProvider.get.byId(id);
                return res.status(200).json(role);
            } catch (error) {
                return res.status(500).json(error);
            }
        },
    },
};
module.exports = { roleController };
