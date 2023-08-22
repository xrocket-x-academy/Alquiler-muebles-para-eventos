const { Role } = require('./role');
const { User } = require('./user');
const { RoleXUser } = require('./roles_x_user');

// FK_ROLES_X_USER_ROLES
RoleXUser.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasOne(RoleXUser, { foreignKey: 'role_id' });

// FK_ROLES_X_USER_USERS
RoleXUser.belongsTo(User, { foreignKey: 'user_id' });
User.hasOne(RoleXUser, { foreignKey: 'user_id' });

module.exports = { User, Role, RoleXUser };
