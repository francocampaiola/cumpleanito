import { getUsers, getUserById } from "../services/users.services.js";

async function usersList(req, res) {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function userById(req, res) {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    usersList,
    userById
}

export {
    usersList,
    userById
}

