const UserMatch = require('../models/UserMatch')
const User = require('../models/User')
const Trip = require('../models/Trip')
const assert = require('assert');

const addUserMatch = async (req, res) => {
    try {
        const {
            user_uuid,
            points_of_contact
        } = req.body

        const userMatch = UserMatch({
            user_uuid,
            points_of_contact
        })

        const userMatchStored = await userMatch.save();

        res.status(201).send(userMatchStored)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

// falta agregar que no sea el mismo usuario, y que compartan date range, para los resulting users regresar sus puntos de contacto
const getUserMatches = async (req, res) => {
    try {
        const {
            gender_preference,
            destination,
            activities_preference,
            start_date,
            end_date
        } = req.body

        const userMatches = await 
            User
            .find({}, 'username gender points_of_contact trip_wishlist')
            .lean()
            .exec()

        // match gender preference
        const userMatchesWithGenderPreference = userMatches
            .filter(user => user.gender in gender_preference)
            .map(user => {
                return {id : user._id, username : user.username}
            })
        let userMatchesHandles = new Set(userMatchesWithGenderPreference.map(u => u.username))
        // get trips for users with same destination
        const allTrips = await
            Trip.find({ destination : destination })
            .lean()
            .exec()
        // filter on gender preference users
        const tripsForMatchingUsers = allTrips
            .filter(trip => userMatchesHandles.has(trip.user_uuid))
        // filter trips on activities
        const tripsWithMatchingActivities = tripsForMatchingUsers
            .filter(trip => {
                const entries = Object.entries(trip.activities_preference)
                const intersection = entries.filter(pair => pair[0] in activities_preference)
                return intersection.length > 0
            })
        // match date

        res.status(200).send(tripsWithMatchingActivities)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addUserMatch, getUserMatches };