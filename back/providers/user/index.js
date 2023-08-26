const { sequelizeDatabase } = require('../../config/files/sequelize.config');
const { User } = require('../../models/user');
const { UserXRole } = require('../../models/user/user-x-roles');
const { roleProvider } = require('../role');

const userProvider = {
    create: async (
        { first_name, last_name, username, email, password },
        isAdmin = false,
    ) => {
        const t = await sequelizeDatabase.transaction();
        try {
            const newUser = User.build({
                first_name,
                last_name,
                username,
                email,
                password,
            });
            await newUser.validate();
            await newUser.save({ transaction: t });

            const roleName = isAdmin ? 'admin' : 'user';

            const roleFromDb = await roleProvider.find.byName(roleName);
            if (!roleFromDb) {
                throw new Error(`${roleName} Role not found`);
            }
            await userProvider.assosiate.role.add(newUser.id, roleFromDb.id, t);

            await t.commit();
            return Promise.resolve(newUser);
        } catch (error) {
            await t.rollback();
            console.log(error);
            return Promise.reject();
        }
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
        role: {
            add: async (userId, roleId, transaction = null) => {
                try {
                    const role = await roleProvider.find.byId(roleId);
                    // const user = await userProvider.get.byId(userId);
                    if (!role) {
                        return Promise.reject(
                            new Error('some of the entities doesnt exist'),
                        );
                    }
                    const newRoleRelationship = UserXRole.build({
                        user_id: userId,
                        role_id: roleId,
                    });
                    await newRoleRelationship.validate();
                    if (transaction) {
                        await newRoleRelationship.save({
                            transaction,
                        });
                    } else {
                        await newRoleRelationship.save();
                    }
                    return Promise.resolve();
                } catch (error) {
                    return Promise.reject();
                }
            },
        },
    },
};

module.exports = { userProvider };
