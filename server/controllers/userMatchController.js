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

function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}

// falta agregar que no sea el mismo usuario, y que compartan date range, para los resulting users regresar sus puntos de contacto
const getUserMatches = async (req, res) => {
    try {
        const {
            username,
            gender_preference,
            destination,
            activities_preference,
            start_date,
            end_date
        } = req.body

        const userMatches = await 
            User
            .find({username: {$ne: username} }, 'username gender points_of_contact trip_wishlist')
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
            .filter(trip => userMatchesHandles.has(trip.username))
        // filter trips on activities
        const tripsWithMatchingActivities = tripsForMatchingUsers
            .filter(trip => {
                const entries = Object.entries(trip.activities_preference)
                const intersection = entries.filter(pair => pair[0] in activities_preference)
                return intersection.length > 0
            })
        // match date
        const usersWithMatchingDates = tripsWithMatchingActivities
            .map(trip => {return {username : trip.username, start_date : trip.start_date, end_date : trip.end_date}})
            .filter(trip => dateRangeOverlaps(trip.start_date, trip.end_date, new Date(start_date), new Date(end_date)))
            .map(trip => trip.username)
        const finalUserMatchSet = new Set(usersWithMatchingDates)
        // get points of contact
        const userPOCs = userMatches
            .filter(u => finalUserMatchSet.has(u.username))
            .map(u => u.points_of_contact)
        res.status(200).send(userPOCs)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addUserMatch, getUserMatches };