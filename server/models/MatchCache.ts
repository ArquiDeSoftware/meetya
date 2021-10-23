import { uuid } from "./types";

class MatchCache {

    private cache : Map<uuid, string>;
    private max_cache_size: number;

    constructor(){
        this.cache = new Map();
        this.max_cache_size = 10;
    }


    getMatch(userID: uuid): string {
        const has_key = this.cache.has(userID);
        let match: string= '';
        if (has_key) {
            match = this.cache.get(userID) ?? '';
            this.cache.delete(userID);
            this.cache.set(userID, match);
        }
        return match ?? "No existe el match";
    }

    addMatch(userID: uuid, nombreMatch: string) {
        // LRU Cache
        if (this.cache.size >= this.max_cache_size) {
            const match_to_delete = this.cache.keys().next().value;
            this.cache.delete(match_to_delete);
        }
        this.cache.set(userID,nombreMatch);
    }

}

export default MatchCache;