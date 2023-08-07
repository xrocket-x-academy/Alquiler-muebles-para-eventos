const { UserProvider } = require('../../providers/user');

const AuthController = {
  sign: {
    in: async (req, res) => {
      const { usernamme, email, password } = req.body;
      try {
        const user = await UserProvider.create({ usernamme, email, password });
        res.status(201).send(user);
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },
  },
};
module.exports = { AuthController };
