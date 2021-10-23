import Match from "./Match";
import MatchCache from "./MatchCache";

class MatchProvider implements Match {
    cache: MatchCache;

    getMatches(): string {
        return "what  up";
    }

}

export default MatchProvider;