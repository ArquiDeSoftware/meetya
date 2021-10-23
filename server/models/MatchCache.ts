
class MatchCache {

    private cache : Map<uuid, string>;
    private max_cache_size: Number;

    constructor(){
        this.cache = new Map();
        this.max_cache_size = 10;
    }


    getMatch(userID: uuid): string {

        return this.cache.get(userID) ?? "No existe el match";
    }

    addMatch(userID: uuid, nombreMatch: string) {
    
        this.cache.set(userID,nombreMatch);
    }

}

export default MatchCache;