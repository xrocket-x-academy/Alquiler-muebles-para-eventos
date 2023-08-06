const { UserProvider } = require('../../providers/user');

const AuthController = {
  sign: {
    in: async (req, res) => {
      const { name, email, password } = req.body;
      try {
        const user = await UserProvider.create({ name, email, password });
        res.status(201).send(user);
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },
  },
};
module.exports = { AuthController };
