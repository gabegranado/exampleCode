import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './style.css'

const Card = ({ sensorData }) => {

    const navigate = useNavigate();

    const switchPage = () => {
        navigate(`/sensordetails/${sensorData.testSensorId}`);
    }

    const isSafe = () => {
        if (parseInt(sensorData.testPPM) > 250) {
            return (
                <Button   variant='outlined' background='green'
            sx={{ color: 'green' }} onClick={switchPage}>Safe View Data</Button>
            )
        }
        return (
            <Button   variant='outlined' background='green'
            sx={{ color: 'red' }} onClick={switchPage}>UnSafe View Data</Button>
            )
    }

return (
    <div className="card">
    <div className="card-content">
        <h2 align="center">{sensorData.testSensorLocation}</h2>
        <p align="center">Current PH {sensorData.testPH} Current PPM {sensorData.testPPM}</p>
        {isSafe()}
    </div>
  </div>
)
 
}

export default Card;
