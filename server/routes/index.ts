import { Router } from 'express';
import { addUser, getAllUsers } from '../controllers/userController'
import { addTrip, getAllTrips } from '../controllers/tripController'
import { addMatchCountingProxy } from '../controllers/matchCountingProxyController'
import { addMatchProvider } from '../controllers/matchProviderController'
import { addUserMatch, getUserMatches } from '../controllers/userMatchController'

const api = Router();

// access this by localhost:9000/api

// users
api.post('/users', addUser)
api.get('/getAllUsers', getAllUsers)
// trip
api.post('/trips', addTrip)
api.get('/getAllTrips', getAllTrips)
// match counting proxy
api.post('/matchCountingProxy', addMatchCountingProxy)
api.post('/matchProvider', addMatchProvider)
// user match
api.post('/userMatch', addUserMatch)
api.post('/getUserMatches', getUserMatches)

api.get('/', (req, res) => {
    res.send('Welcome to APIs!');
});

export default api;
