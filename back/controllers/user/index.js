const { userProvider } = require('../../providers/user');

const userController = {
    post: async (req, res) => {
        const { first_name, last_name, username, email, password } = req.body;
        try {
            const user = await userProvider.create({
                first_name,
                last_name,
                username,
                email,
                password,
            });
            res.status(201).json({ user });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    get: {
        byId: async (req, res) => {
            const { id } = req.params;
            try {
                const user = await userProvider.get.byId(id);
                res.status(200).json({ user });
            } catch (error) {
                console.log(error);
            }
        },
        all: async (req, res) => {
            let { offset, limit } = req.query;
            // eslint-disable-next-line no-unused-expressions
            offset ? (offset = parseInt(offset, 10)) : (offset = 0);
            // eslint-disable-next-line no-unused-expressions
            limit ? (limit = parseInt(limit, 10)) : (limit = 10);
            try {
                const users = await userProvider.get.all(offset, limit);
                return res.status(200).json({ users });
            } catch (error) {
                return res.status(500).send(error);
            }
        },
        byUsername: async (req, res) => {
            const { username } = req.params;
            try {
                const user = await userProvider.get.byUsername(username);
                if (!user) {
                    return res.status(404).send();
                }
                return res.status(200).json({ user });
            } catch (error) {
                return res.status(500).send(error);
            }
        },
    },
    delete: {
        byId: async (req, res) => {
            const { id } = req.params;
            try {
                await userProvider.delete.byId(id);
                return res.status(200).send();
            } catch (error) {
                return res.status(500).send(error);
            }
        },
    },
    assosiate: {
        role: async (req, res) => {
            const { userId, roleId } = req.body;
            try {
                await userProvider.assosiate.role(userId, roleId);
                return res.status(200).send();
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
        },
    },
};

module.exports = { userController };
