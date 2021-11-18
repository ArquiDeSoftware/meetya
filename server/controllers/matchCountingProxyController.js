const MatchCountingProxy = require('../models/MatchCountingProxy');

async function getMatchCountingProxy(req, res) {
    try {
        const allProxies = await MatchCountingProxy.find({}).lean().exec()
        res.status(200).send(allProxies)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

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

const updateCountingProxy = async (req, res) => {
    try {
        const {
            match_count,
            total_matches
        } = req.body

        const matchCountingProxy = await MatchCountingProxy
            .findOne({})
            .exec()

        matchCountingProxy.successful_matching_count += match_count
        matchCountingProxy.total_matching_queries += total_matches

        const updatedMatchCountingProxy = await matchCountingProxy.save()
        res.status(201).send(updatedMatchCountingProxy)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { addMatchCountingProxy, updateCountingProxy, getMatchCountingProxy };