const Trip = require('../models/Trip');

async function addTrip(req, res) {
    try {
        const {
            username,
            destination,
            activities_preference,
            gender_preference,
            start_date,
            end_date
        } = req.body
        
        const trip = Trip({
            username,
            destination,
            activities_preference,
            gender_preference,
            start_date,
            end_date
        })

        const tripStored = await trip.save();

        res.status(201).send(tripStored)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

async function getAllTrips(req, res) {
    try {
        const allTrips = await Trip.find({}).lean().exec()
        res.status(200).send(allTrips)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addTrip, getAllTrips };