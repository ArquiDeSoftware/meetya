import { uuid } from "./types";

class Trip {

    private trip_uuid: uuid;
    private user_uuid: uuid;
    public destination: string;
    private activities_preference: Set<string>;
    private gender_preference: Set<string>;
    private date_range: Set<Date>;

    constructor(trip_uuidC: uuid, user_uuidC: uuid, 
        destinationC: string, activities_preferenceC: Set<string>,
        gender_preferenceC: Set<string>, date_rangeC: Set<Date>){
        
            this.trip_uuid = trip_uuidC;
            this.user_uuid = user_uuidC;
            this.destination = destinationC;
            this.activities_preference = activities_preferenceC;
            this.gender_preference = gender_preferenceC;
            this.date_range = date_rangeC;

    }

    request_matches(): string {
        //aver aquí va algo con match
        return "matches";
    }

    get_activities_preference(): Set<string> {
        return this.activities_preference;
    }

    get_gender_preference(): Set<string> {
        return this.gender_preference;
    }

    get_date_range(): Set<Date> {
        return this.date_range;
    }
}

export default Trip;