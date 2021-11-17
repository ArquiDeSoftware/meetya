import { Router } from 'express';
import { addUser } from '../controllers/userController'

const api = Router();

// access this by localhost:9000/api

api.post('/users', addUser)

api.get('/', (req, res) => {
    res.send('Welcome to APIs!');
});

export default api;
