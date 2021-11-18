const UserMatch = require('../models/UserMatch')

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

export { addUserMatch };