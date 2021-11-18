import Match from "./Match";
// import MatchCache from "./MatchCache";

const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const MatchProviderSchema = new Schema(
    {
        cache_id : String
    },
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('MatchProvider', MatchProviderSchema);

// class MatchProvider implements Match {
//     cache: MatchCache;

//     getMatches(): string {
//         return "what  up";
//     }

// }

// export default MatchProvider;