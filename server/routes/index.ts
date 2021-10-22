import { Router } from 'express';

const api = Router();

api.get('/', (req, res) => {
    res.send('Welcome to APIs!');
});

export default api;
