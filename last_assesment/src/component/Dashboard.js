import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import BarChart from './BarChart';
import {userData} from './Data'
import LineChart from './LineChart';


import PieChart from './PieChart';
import './styles/Dashboard.css'

function Dashboard(props) {
    const location = useLocation();
    const [getUserData,setUserData] = useState({
        labels: userData.map((data) => data.year),
        datasets: [{
            label: "Users Gained",
            data:userData.map((data)=>data.userGain),
            backgroundColor : [
              "red",
              "green",
              "yellow",
              "blue",
              "grey"

            ]
        }]
    })

  return (
    <div className='wrapData'>
        <h2>Hey , below shown is the data:</h2>
        {/* Dashboard {location.state.fname} */}
        <BarChart chartData={getUserData} />
        <LineChart chartData={getUserData} />
        <PieChart chartData={getUserData} />
        </div>
  )
}

export default Dashboard