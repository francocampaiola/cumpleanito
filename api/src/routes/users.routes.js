import express from 'express';
import UsersControllers from '../controllers/users.controllers.js';

const route = express.Router();

route.get('/', UsersControllers.usersList);
route.get('/:id', UsersControllers.userById);

export default route;