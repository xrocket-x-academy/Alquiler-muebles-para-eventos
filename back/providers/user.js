const { User } = require('../models/user');

const UserProvider = {
  create: async ({ username, email, password }) => {
    try {
      const newUser = User.build({ username, email, password });
      await newUser.validate();
      await newUser.save();
      return Promise.resolve(newUser);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  },
  delete: async ({ id }) => {
    try {
      const user = await User.findOne({
        where: {
          id,
          isDeleted: false,
        },
      });
      if (!user) {
        return Promise.reject(new Error('The user doesnt exist, or is already deleted'));
      }
      user.isDeleted = true;
      await user.save();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  },
  update: async ({ id }, { username, email, password }) => {
    try {
      const user = await User.findOne({
        where: {
          id,
          isDeleted: false,
        },
      });
      if (!user) {
        return Promise.reject(new Error('User not found'));
      }

      if (username) {
        user.username = username;
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = password;
      }
      await user.save();
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  },
  get: {
    all: async ({ limit, offset }) => {
      const finalLimit = limit || 10;
      const finalOffset = offset || 0;
      try {
        const users = await User.findAll({
          limit: finalLimit,
          offset: finalOffset,
          where: {
            isDeleted: false, // we exclude the already deleted accounts
          },
          attributes: ['id'], // the atributes option is used to specify which attributes should be returned
        });
        return Promise.resolve(users);
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    },
    byId: async ({ id }) => {
      try {
        const user = await User.findOne({
          where: {
            id,
            isDeleted: false,
          },
          attributes: { exclude: ['password', 'email'] },
        });
        if (!user) {
          return Promise.reject(new Error('User not found'));
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    },
    byUsername: async ({ username }) => {
      try {
        const user = await User.findOne({
          where: {
            username,
            isDeleted: false,
          },
        });
        if (!user) {
          return Promise.reject(new Error('User not found'));
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    },
    byEmail: async ({ email }) => {
      try {
        const user = await User.findOne({
          where: {
            email,
          },
        });
        if (!user) {
          return Promise.reject(new Error('User not found'));
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    },
  },
};

module.exports = { UserProvider };
