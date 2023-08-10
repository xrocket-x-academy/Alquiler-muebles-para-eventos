const { UserProvider } = require('../../providers/user');

const AuthController = {
  sign: {
    up: async (req, res) => {
      const { username, email, password } = req.body;
      try {
        const user = await UserProvider.create({ username, email, password });
        res.status(201).send(user);
        // here we generate and return the jwt token
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },
  },
};
module.exports = { AuthController };
