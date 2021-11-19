import Topbar from "../../components/topbar/Topbar";
import React, { useState, useEffect } from 'react';
import { getTrips } from '../../services/trips'
import { CircularProgress } from '@material-ui/core';
import Swiper from '../swiper/swiper';

export default function Home() {

  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      await getTrips()
      .then(trips => {
        setTrips(trips)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
    }
    fetchTrips();
  }, [])

  console.log(trips)

  return (
    <>
      <Topbar />
        {isLoading ? 
          <div style={{"marginTop" : "40px", "textAlign" : "center"}}><CircularProgress size={50}/></div>
          :
          <Swiper /> 
        }
    </>
  );
}