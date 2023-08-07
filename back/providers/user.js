const { User } = require('../models/user');

const UserProvider = {
  create: async ({ usernamme, email, password }) => {
    try {
      const newUser = User.build({ usernamme, email, password });
      await newUser.validate();
      await newUser.save();
      return Promise.resolve(newUser);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

module.exports = { UserProvider };
