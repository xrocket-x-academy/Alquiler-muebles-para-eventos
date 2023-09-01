const { User, Role } = require('../../models/user');
const { UserXRole } = require('../../models/user/user-x-roles');

const userProvider = {
    create: async ({ first_name, last_name, username, email, password }) => {
        try {
            const newUser = User.build({
                first_name,
                last_name,
                username,
                email,
                password,
            });
            newUser.validate();
            await newUser.save();
            return Promise.resolve(newUser);
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    },
    checkAvailabilityOf: {
        username: async (username) => {
            const user = await User.findOne({
                where: {
                    username,
                },
            });
            if (user) {
                return false;
            }
            return true;
        },
        email: async (email) => {
            const user = await User.findOne({
                where: {
                    email,
                },
            });
            if (user) {
                return false;
            }
            return true;
        },
    },
    get: {
        byId: async (id) => {
            try {
                const user = await User.findOne({
                    where: {
                        id,
                        end_date: null,
                    },
                    include: [
                        {
                            model: UserXRole,
                            as: 'roles',
                            attributes: ['role_id'],
                        },
                    ],
                });
                return Promise.resolve(user);
            } catch (error) {
                console.log(error);
                return Promise.reject();
            }
        },
        byUsername: async (username) => {
            try {
                const user = await User.findOne({
                    where: {
                        username,
                        end_date: null,
                    },
                });
                return Promise.resolve(user);
            } catch (error) {
                console.log(error);
                return Promise.reject();
            }
        },
        byEmail: async (email) => {
            try {
                const user = await User.findOne({
                    where: {
                        email,
                        end_date: null,
                    },
                });
                return Promise.resolve(user);
            } catch (error) {
                console.log(error);
                return Promise.reject();
            }
        },
        all: async (offset, limit) => {
            try {
                const user = await User.findAll({
                    offset,
                    limit,
                    attributes: ['id'],
                    where: {
                        end_date: null,
                    },
                });
                return Promise.resolve(user);
            } catch (error) {
                console.log(error);
                return Promise.reject();
            }
        },
    },
    delete: {
        byId: async (id) => {
            try {
                const user = await User.findOne({
                    where: {
                        id,
                        end_date: null,
                    },
                });
                if (!user) {
                    return Promise.reject(
                        new Error('User not found, or already deleted'),
                    );
                }
                user.end_date = new Date();
                await user.save();
                return Promise.resolve();
            } catch (error) {
                console.log(error);
                return Promise.reject();
            }
        },
    },
    assosiate: {
        role: async (userId, roleId) => {
            try {
                const role = await Role.findOne({
                    where: {
                        id: roleId,
                        end_date: null,
                    },
                });
                const user = await User.findOne({
                    where: {
                        id: userId,
                        end_date: null,
                    },
                });

                if (!role || !user) {
                    return Promise.reject(
                        new Error('some of the entities doesnt exist'),
                    );
                }
                await UserXRole.create({
                    role_id: role.id,
                    user_id: user.id,
                });
                return Promise.resolve();
            } catch (error) {
                console.log(error);
                return Promise.reject();
            }
        },
    },
};

module.exports = { userProvider };
