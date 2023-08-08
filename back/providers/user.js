const { User } = require('../models/user');

const UserProvider = {
  create: async ({ username, email, password }) => {
    try {
      const newUser = User.build({ username, email, password });
      await newUser.validate();
      await newUser.save();

      const userFromDb = await this.UserProvider.get.byUsername({ username });

      return Promise.resolve({ user: userFromDb });
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

      const userUpdated = await User.findOne({
        where: {
          id,
          isDeleted: false,
        },
      });
      return Promise.resolve({ user: userUpdated });
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
    byId: async ({ id }, excludeSensitiveData = true) => {
      let excludedPropeties = [];
      if (excludeSensitiveData) {
        excludedPropeties = ['password', 'email', 'isDeleted'];
      }
      try {
        const user = await User.findOne({
          where: {
            id,
            isDeleted: false,
          },
          attributes: { exclude: [...excludedPropeties] },
        });
        if (!user) {
          return Promise.reject(new Error('User not found'));
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    },
    byUsername: async ({ username }, excludeSensitiveData = true) => {
      let excludedPropeties = [];
      if (excludeSensitiveData) {
        excludedPropeties = ['password', 'email', 'isDeleted'];
      }
      try {
        const user = await User.findOne({
          where: {
            username,
            isDeleted: false,
          },
          attributes: { exclude: [...excludedPropeties] },
        });
        if (!user) {
          return Promise.reject(new Error('User not found'));
        }
        return Promise.resolve(user);
      } catch (error) {
        return Promise.reject(new Error(error));
      }
    },
    byEmail: async ({ email }, excludeSensitiveData = true) => {
      let excludedPropeties = [];
      if (excludeSensitiveData) {
        excludedPropeties = ['password', 'email', 'isDeleted'];
      }
      try {
        const user = await User.findOne({
          where: {
            email,
          },
          attributes: { exclude: [...excludedPropeties] },
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
