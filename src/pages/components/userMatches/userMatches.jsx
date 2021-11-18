import React from "react";
import Topbar from "../../../components/topbar/Topbar";
import "./userMatches.css";
import React, { useState, useEffect } from 'react';
import { getMatches } from '../../services/matches';

export default function UserMatches() {

    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchMatches = async () => {
        await getMatches()
        .then(matches => {
          setMatches(matches)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
      }
      fetchMatches();
    }, [])
  
    console.log(matches)

    var html = '<ul>';
    for (var i = 0; i <= matches.length; i++) {
        html += '<li>' + matches[i] + '</li>';
    }
    html += '</ul>';
    document.getElementById('listMatches').innerHTML= html;

    return (
      <>
        <div class='container'>
            <h3> User Matches</h3>
            <div id='listMatches'></div>
        </div>
      </>
    );
  }