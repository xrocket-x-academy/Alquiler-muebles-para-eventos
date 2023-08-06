const { User } = require('../models/user');

const UserProvider = {
  create: async ({ name, email, password }) => {
    try {
      const newUser = User.build({ name, email, password });
      await newUser.validate();
      await newUser.save();
      return Promise.resolve(newUser);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

module.exports = { UserProvider };
