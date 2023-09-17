import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import './style.css'

const Card = ({ sensorData }) => {

    const navigate = useNavigate();

    const switchPage = () => {
        navigate(`/sensordetails/${sensorData.testSensorId}`);
    }

return (
    <div className="card">
    <div className="card-content">
        <h2 align="center">{sensorData.testSensorLocation}</h2>
        <p align="center">Current PH {sensorData.testPH} Current PPM {sensorData.testPPM}</p>
        <Button onClick={switchPage}>View Data</Button>
    </div>
  </div>
)
 
}

export default Card;
