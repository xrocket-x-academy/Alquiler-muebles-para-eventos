const { Role } = require('./roles');
const { User } = require('./user');
const { UserXRole } = require('./user-x-roles');

User.hasMany(UserXRole, { as: 'roles', foreignKey: 'user_id' });
Role.hasMany(UserXRole, { as: 'users', foreignKey: 'role_id' });

module.exports = { Role, User, UserXRole };
