import React, { useState } from "react";
import "./create_trip.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function CreateTrip() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      username: "diegomez",
      destination: data.location,
      activities_preference: {
        landmarks: data.aLandmarks,
        tours: data.aTours,
        cultural: data.cultural,
        party: data.party,
        localCuisine: data.aLocalCuisine,
        outdoors: data.aOutdoors,
      },
      gender_preference: {
        men: data.gMen,
        women: data.women,
        nonBinary: data.nonBinary,
      },
      start_date: startDate,
      end_date: endDate,
    };

    console.log(formattedData);

    axios.post('http://localhost:9000/api/trips', formattedData);
    navigate('/');
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();

  const returnToMain = () => {
    navigate('/');
  }

  return (
    <>
      <link rel="stylesheet" href="create_trip.css"></link>
      <div className="container">
        <button onClick={returnToMain}>Back</button>
        <div className="text-center card">
          <div className="container form-signin bg-light">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="h3 mb-3 fw-normal">Create your next trip! </h1>

              <div className="form-floating">
                <label className="text-secondary" htmlFor="floatingLocation">
                  Location
                </label>
                <br></br>
                <input
                  type="location"
                  className="form-control"
                  id="floatingLocation"
                  placeholder="Dream location"
                  {...register("location", { required: true })}
                />
                {errors.location && <p style={{color: "red"}}>Location is required</p>}
              </div>
              <br></br>

              <div className="form-floating">
                <label className="text-secondary" htmlFor="floatingDateAvailable">
                  Dates available
                </label>
                <br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    label="First date available"
                    value={startDate}
                    onChange={setStartDate}
                  />
                </MuiPickersUtilsProvider>

                <br></br>
                <br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    label="Last date available"
                    value={endDate}
                    onChange={setEndDate}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <br></br>

              <label className="text-secondary" htmlFor="floatingPGenero">
                Gender Preference
              </label>
              <br></br>
              <label>
                <input type="checkbox" name="gMen" {...register("gMen")} /> Men
              </label>
              <br></br>
              <label>
                <input type="checkbox" name="gWomen" {...register("gWomen")} />{" "}
                Women
              </label>
              <br></br>
              <label>
                <input
                  type="checkbox"
                  name="gNonBinary"
                  {...register("gNonBinary")}
                />{" "}
                Non Binary
              </label>
              <br></br>

              <div className=" mt-4">
                <label
                  className="mx-2 text-secondary"
                  htmlFor="floatingPActivities"
                >
                  Activities Preference
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="aLandmarks"
                    {...register("aLandmarks")}
                  />{" "}
                  Landmarks
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="aTours"
                    {...register("aTours")}
                  />{" "}
                  Tours
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="aCultural"
                    {...register("aCultural")}
                  />{" "}
                  Cultural
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="aParty"
                    {...register("aParty")}
                  />{" "}
                  Party
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="aLocalCuisine"
                    {...register("aLocalCuisine")}
                  />{" "}
                  Local Cuisine
                </label>
                <br></br>
                <label>
                  <input
                    type="checkbox"
                    name="aOutdoors"
                    {...register("aOutdoors")}
                  />{" "}
                  Outdoors
                </label>
                <br></br>
              </div>
              <br></br>

              <button
                className="w-100 mt-4 btn btn-lg btn-primary"
                type="submit"
              >
                Create trip
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
