import { Router } from 'express';
import { addUser } from '../controllers/userController'
import { addTrip } from '../controllers/tripController'

const api = Router();

// access this by localhost:9000/api

api.post('/users', addUser)
api.post('/trips', addTrip)

api.get('/', (req, res) => {
    res.send('Welcome to APIs!');
});

export default api;
