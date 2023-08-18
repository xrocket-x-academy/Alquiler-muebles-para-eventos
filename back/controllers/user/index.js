// const { UserProvider } = require('../../providers/user');

// const UserController = {
//   get: {
//     all: async (req, res) => {
//       try {
//         const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
//         const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;

//         const users = await UserProvider.get.all({ limit, offset });
//         res.send(users);
//       } catch (error) {
//         res.send(error);
//       }
//     },
//     byId: async (req, res) => {
//       try {
//         const { id } = req.params;
//         const user = await UserProvider.get.byId({ id });
//         res.send(user);
//       } catch (error) {
//         res.send(error);
//       }
//     },
//     byUsername: async (req, res) => {
//       try {
//         const { username } = req.params;
//         const user = await UserProvider.get.byUsername({ username });
//         res.send(user);
//       } catch (error) {
//         res.send(error);
//       }
//     },
//   },
//   put: {
//     byId: async (req, res) => {
//       try {
//         const { id } = req.params;
//         const { username, email, password } = req.body;
//         const user = await UserProvider.update({ id }, { username, email, password });
//         res.send(user);
//       } catch (error) {
//         res.send(error);
//       }
//     },
//   },
//   delete: {
//     byId: async (req, res) => {
//       try {
//         const { id } = req.params;
//         const user = await UserProvider.delete({ id });
//         res.send(user);
//       } catch (error) {
//         res.send(error);
//       }
//     },
//   },
// };

// module.exports = { UserController };
