const { Role } = require('../../models/user');

const roleProvider = {
    find: {
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
        byName: async (name) => {
            try {
                const role = await Role.findOne({
                    where: { name, end_date: null },
                });
                return Promise.resolve(role);
            } catch (error) {
                return Promise.reject(error);
            }
        },
    },
    create: async (name) => {
        try {
            const role = await Role.create({ name });
            return Promise.resolve(role);
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

module.exports = { roleProvider };
