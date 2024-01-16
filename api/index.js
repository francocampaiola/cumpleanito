import express from 'express';
import RouterUsers from './src/routes/users.routes.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(RouterUsers);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})