import React from "react";
import "./swiper.css";
import DateDisplay from "../components/date_display";

export default function Swiper({ trip }) {
  return (
    <>
    <a href='#' class='col btn btn-crear-trip'>
      Crear Trip
    </a>
    <a href='#' class='col btn btn-matches'>
      Matches
    </a>
    <h1>MeetYa</h1>
    <h3>Swipe to find your travel buddy !</h3>
    <div class='container'>
      <div class='card'>
        <h5 class='card-header'>Destination</h5>
        <img
          src='https://www.dropbox.com/s/5xp7sy21sqb6jm4/ImageCap.jpg?raw=1'
          class='card-img-top'
          alt='...'
        />
        <div class='card-body'>
          <br></br>
          <div class='row'>
            <a href='#' class='col btn btn-danger'>
              Nay
            </a>
            <a href='#' class=' col btn btn-success'>
              YAY!
            </a>
          </div>
          <div class='row '>
            <h6 class='col mx-3 my-2 text-secondary'>Gender: </h6>
            <span class='col'>
              <DateDisplay date={"2020-10-30T12:52:27+05:30"} />
            </span>
          </div>
          <h5 class=' card-title'>Activity</h5>
          <p class='card-text'>
            Here comes the description of the trip.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            ratione minus sed voluptatibus dolore vitae, iure, aliquam
            accusantium deleniti eos doloremque id mollitia. Nihil impedit minus
            fugiat vel officia alias..
          </p>

        </div>
      </div>
    </div>
    <br></br>
    <h3>Meet ya there</h3>
    </>
  );
}
