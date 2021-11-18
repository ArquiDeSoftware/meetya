import { uuid } from "./types";
const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const UserMatchSchema = new Schema(
    {
        user_uuid : String,
        points_of_contact : String
    },
    {
        timestamps: true 
    }
)

module.exports = mongoose.model('UserMatch', UserMatchSchema);

// class UserMatch {
//     public user_uuid: uuid;
//     public points_of_contact: string;

//     constructor(user_uuidC: uuid, points_of_contactC: string){
//         this.user_uuid = user_uuidC;
//         this.points_of_contact = points_of_contactC;
//     }

//     getContacts() : string {
//         //do something
//         return "contacts";
//     }

// }

// export default UserMatch;