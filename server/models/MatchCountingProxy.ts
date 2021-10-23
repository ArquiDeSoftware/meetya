import Match from "./Match";
import MatchProvider from "./MatchProvider";

class MatchCountingProxy implements Match {

    private sucessful_matching_count: Number;
    private total_matching_queries: Number;
    private mp : MatchProvider;

    getMatches(): string {
        return this.mp.get_matches();
    }
}

export default MatchCountingProxy;