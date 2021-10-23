import { uuid } from "./types";

class User {
  private user_uuid: uuid;
  public username: string;
  private password: string;
  private email: string;
  private gender: string;
  private points_of_contact: string;
  private trip_wishlist: uuid[];

  constructor(user_uuidC: uuid, usernameC: string, passwordC: string, emailC: string, genderC: string, points_of_contactC: string, trip_wishlistC: uuid[]) {
    this.user_uuid = user_uuidC;
    this.username = usernameC;
    this.password = passwordC;
    this.email = emailC;
    this.gender = genderC;
    this.points_of_contact = points_of_contactC;
    this.trip_wishlist = trip_wishlistC;
  }

  get_trip_wishlist(): uuid[] {
    return this.trip_wishlist;
  }

  get_email(): string {
    return this.email;
  }

  get_gender(): string {
    return this.gender;
  }

  get_points_of_contact(): string {
    return this.points_of_contact;
  }

}

export default User;
