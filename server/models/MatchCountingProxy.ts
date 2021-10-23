import Match from "./Match";
import MatchProvider from "./MatchProvider";

class MatchCountingProxy implements Match {

    private sucessful_matching_count: number;
    private total_matching_queries: number;
    private mp : MatchProvider;

    getMatches(): string {
        return this.mp.getMatches();
    }
}

export default MatchCountingProxy;