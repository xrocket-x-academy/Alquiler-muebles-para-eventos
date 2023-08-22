const { Role } = require('./role');
const { User } = require('./user');
const { RoleXUser } = require('./roles_x_user');

// FK_ROLES_X_USER_ROLES
Role.hasMany(RoleXUser, { as: 'roles', foreignKey: 'role_id' });

// FK_ROLES_X_USER_USERS
User.hasMany(RoleXUser, { as: 'roles', foreignKey: 'user_id' });

module.exports = { User, Role, RoleXUser };
