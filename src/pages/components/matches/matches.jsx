import Topbar from "../../../components/topbar/Topbar";
import React, { useState, useEffect } from 'react';
import { getTrips } from '../../../services/trips'
import { CircularProgress } from '@material-ui/core';
import Swiper from '../../swiper/swiper';
import { getMatches } from '../../../services/matches'
import { updateCountingProxy } from '../../../services/countingProxy'
import "./matches.css";
import Card from '../card'

export default function Home() {

  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formattedData = {
    "trip_uuid" : "1",
    "username": "pepe",
    "destination": "Saltillo",
    "activities_preference": {
      "tours": "true",
      "hike" : "true"
    },
    "gender_preference": {
      "male": "true",
      "female" : "true"
    },
    "start_date" : "2018-02-02",
	  "end_date" : "2021-02-08"
  };

  useEffect(() => {
    const fetchMatches = async () => {
      await getMatches(formattedData)
      .then(async ({data}) => {
        const formattedUpdateCount = {
          "match_count" : data ? data.length : 0,
	        "total_matches" : data ? data.length : 0
        }
        await updateCountingProxy(formattedUpdateCount)
        setMatches(data)
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
          
          matches.map((match, idx) => 
              <Card key={idx} title = {match} subheader = {"Contacto"}/>
          )
        }
    </>
  );
}