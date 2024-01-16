import express from 'express';
import { routerUsers } from './users.routes.js';

export function routerApi(app) {
    const router = express();
    app.use('/api', router);
    router.use('/users', routerUsers);
}