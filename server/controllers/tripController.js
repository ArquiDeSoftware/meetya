const Trip = require('../models/Trip');

async function addTrip(req, res) {
    try {
        const {
            user_uuid,
            destination,
            activities_preference,
            gender_preference,
            date_range
        } = req.body
        
        const trip = Trip({
            user_uuid,
            destination,
            activities_preference,
            gender_preference,
            date_range
        })

        const tripStored = await trip.save();

        res.status(201).send(tripStored)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addTrip };