import Match from "./Match";
import MatchProvider from "./MatchProvider";
const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const MatchCountingProxySchema = new Schema(
    {
        successful_matching_count : Number,
        total_matching_queries : Number,
        match_provider_id : String
    },
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('MatchCountingProxy', MatchCountingProxySchema);

// class MatchCountingProxy implements Match {

//     private sucessful_matching_count: number;
//     private total_matching_queries: number;
//     private mp : MatchProvider;

//     getMatches(): string {
//         return this.mp.getMatches();
//     }
// }

// export default MatchCountingProxy;