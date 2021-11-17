const MatchCountingProxy = require('../models/MatchCountingProxy');

const addMatchCountingProxy = async (req, res) => {
    try {
        const {
            successful_matching_count,
            total_matching_queries,
            match_provider_id
        } = req.body

        const matchCountingProxy = MatchCountingProxy({
            successful_matching_count,
            total_matching_queries,
            match_provider_id
        })

        const matchCountingProxyStored = await matchCountingProxy.save();

        res.status(201).send(matchCountingProxyStored)

    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addMatchCountingProxy };