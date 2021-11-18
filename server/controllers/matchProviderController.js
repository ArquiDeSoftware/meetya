const MatchProvider = require('../models/MatchProvider');

const addMatchProvider = async (req, res) => {
    try {
        const {
            cache_id
        } = req.body

        const matchProvider = MatchProvider({
            cache_id
        })

        const matchProviderStored = await matchProvider.save();

        res.status(201).send(matchProviderStored)

    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addMatchProvider };