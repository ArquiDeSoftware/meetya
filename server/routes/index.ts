import { Router } from 'express';
import { addUser } from '../controllers/userController'
import { addTrip } from '../controllers/tripController'
import { addMatchCountingProxy } from '../controllers/matchCountingProxyController'

const api = Router();

// access this by localhost:9000/api

api.post('/users', addUser)
api.post('/trips', addTrip)
api.post('/matchCountingProxy', addMatchCountingProxy)

api.get('/', (req, res) => {
    res.send('Welcome to APIs!');
});

export default api;
