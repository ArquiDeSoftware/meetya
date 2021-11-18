import { uuid } from "./types";
const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    gender: String,
    points_of_contact: String,
    trip_wishlist: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);