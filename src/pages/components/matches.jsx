import Topbar from "../../components/topbar/Topbar";
import React, { useState, useEffect } from 'react';
import { getTrips } from '../../services/trips'
import { CircularProgress } from '@material-ui/core';
import Swiper from '../swiper/swiper';
import { getMatches } from '../../services/matches'

export default function Home() {

  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formattedData = {
    "trip_uuid" : "1",
    "username": "pepe",
    "destination": "Los Mochis",
    "activities_preference": {
      "hike": true
    },
    "gender_preference": {
      "male": true
    },
    "start_date" : "2018-02-02",
	  "end_date" : "2018-02-08"
  };

  useEffect(() => {
    const fetchMatches = async () => {
      await getMatches(formattedData)
      .then(trips => {
        setMatches(trips.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
    }
    fetchMatches();
  }, [])

  return (
    <>
      <Topbar />
        {isLoading ? 
          <div style={{"marginTop" : "40px", "textAlign" : "center"}}><CircularProgress size={50}/></div>
          :
          matches.map((match, idx) => <div key={idx}>{match}</div>)
        }
    </>
  );
}