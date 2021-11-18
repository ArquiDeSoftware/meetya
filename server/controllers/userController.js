const User = require('../models/User');

async function addUser(req, res) {
    try {
        const {
            username,
            password,
            email,
            gender,
            points_of_contact,
            trip_wishlist
        } = req.body
        
        const user = User({
            username,
            password,
            email,
            gender,
            points_of_contact,
            trip_wishlist
        })

        const userStored = await user.save();

        res.status(201).send(userStored)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

async function getAllUsers(req, res) {
    try {
        const allUsers = await User.find({}).lean().exec()
        res.status(200).send(allUsers)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addUser, getAllUsers };