const { Role } = require('../../models/user');

const roleProvider = {
    get: {
        all: async () => {
            const roles = await Role.findAll({
                attributes: ['id'],
            });
            return Promise.resolve(roles);
        },
        byId: async (id) => {
            const role = await Role.findByPk(id);
            return Promise.resolve(role);
        },
    },
};

module.exports = { roleProvider };
