import Match from "./Match";

class MatchProvider implements Match {
    cache: MatchCache;

    get_matches(): string {
        return "what  up";
    }

}

export default MatchProvider;