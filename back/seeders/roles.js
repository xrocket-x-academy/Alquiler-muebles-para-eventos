const { Role } = require('../models/user');

const seedRoles = async () => {
    try {
        await Role.findOrCreate({
            where: {
                name: 'user',
            },
        });
        await Role.findOrCreate({
            where: {
                name: 'admin',
            },
        });
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};
module.exports = { seedRoles };
