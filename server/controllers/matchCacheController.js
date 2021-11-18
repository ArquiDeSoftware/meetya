const MatchCache = require('../models/MatchCache')

async function addMatchCache(req, res) {
    try {
        const {
            trip_uuid,
            cache,
            max_cache_size
        } = req.body
        
        const matchCache = MatchCache({
            trip_uuid,
            cache,
            max_cache_size
        })

        const matchCacheStored = await matchCache.save();

        res.status(201).send(matchCacheStored)
    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

async function getAllMatchCaches(_, res) {
    try {
        const matchCaches = await MatchCache
        .find({})
        .lean()
        .exec()

        res.status(201).send(matchCaches)

    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

async function getMatchCache(req, res) {
    try {
        const {
            trip_uuid
        } = req.body

        const matchCache = await MatchCache
        .find({trip_uuid : trip_uuid})
        .lean()
        .exec()

        res.status(201).send(matchCache)

    } catch (e) {
        res.status(500).send({ message : e.message })
    }
}

export { getMatchCache, getAllMatchCaches, addMatchCache };