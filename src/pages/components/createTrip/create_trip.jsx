import React from "react";
import "./create_trip.css";
export default function CreateTrip() {
  return (
    <>
      <link rel="stylesheet" href="create_trip.css"></link>
      <div class='container'>
        <div class='text-center card'>
          <div class='container form-signin bg-light'>
            <form>
              <h1 class='h3 mb-3 fw-normal'>Create your next trip! </h1>

              <div class='form-floating'>
                <label class='text-secondary' for='floatingLocation'>
                  Location
                </label>
                <br></br>
                <input
                  type='location'
                  class='form-control'
                  id='floatingLocation'
                  placeholder='Dream location'
                />
              </div>
              <br></br>


              <div class='form-floating'>
                <label class='text-secondary' for='floatingDateAvailable'>
                  Dates available
                </label>
                <br></br>
                <p> First date available: </p>
                <input
                  type='text'
                  class='form-control'
                  id='floatingDateAvailable'
                  placeholder='Day'
                />
                <input
                  type='text'
                  class='form-control'
                  id='floatingDateAvailable'
                  placeholder='Month'
                />
                <input
                  type='text'
                  class='form-control'
                  id='floatingDateAvailable'
                  placeholder='Year'
                />
                <br></br>
                <p>Last Date Available: </p>
                <input
                  type='text'
                  class='form-control'
                  id='floatingDateAvailable'
                  placeholder='Day'
                />
                <input
                  type='text'
                  class='form-control'
                  id='floatingDateAvailable'
                  placeholder='Month'
                />
                <input
                  type='text'
                  class='form-control'
                  id='floatingDateAvailable'
                  placeholder='Year'
                />
              </div>
              <br></br>


              <div class='form-floating'>
                <label class='text-secondary' for='floatingPGenero'>
                  Gender Preference
                </label>
                <br></br>
                <label><input type="checkbox" name="gMen"/> Men</label><br></br>
                <label><input type="checkbox" name="gWomen"/> Women</label><br></br>
                <label><input type="checkbox" name="gNonBinary"/> Non Binary</label><br></br>
              </div>
              <br></br>


              <div class='form-floating mt-3'>
                <label class='text-secondary' for='floatingPAge'>
                  Age Preference
                </label>
                <br></br>
                <input
                  type='number'
                  class='form-control'
                  id='eMin'
                  placeholder='Min'
                />

                <input
                  type='number'
                  class='form-control'
                  id='eMax'
                  placeholder='Max'
                />
              </div>
              <br></br>

              <div class=' mt-4'>
                <label class='mx-2 text-secondary' for='floatingPActivities'>
                    Activities Preference
                </label>
                <br></br>
                <label><input type="checkbox" name="aLandmarks"/> Landmarks</label><br></br>
                <label><input type="checkbox" name="aTours"/> Tours</label><br></br>
                <label><input type="checkbox" name="aCultural"/> Cultural</label><br></br>
                <label><input type="checkbox" name="aParty"/> Party</label><br></br>
                <label><input type="checkbox" name="aLocalCuisine"/> Local Cuisine</label><br></br>
                <label><input type="checkbox" name="aOutdoors"/> Outdoors</label><br></br>
              </div>
              <br></br>

              <button class='w-100 mt-4 btn btn-lg btn-primary' type='submit'>
                Create trip
              </button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}