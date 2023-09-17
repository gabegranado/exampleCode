import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const ListElement = ({ sensorData }) => {
    const navigate = useNavigate();

    const switchPage = () => {
        navigate(`/sensordetails/${sensorData.testSensorId}`);
    }

    return (
        <div>
            <l1>{sensorData.testSensorLocation}    </l1>
            <Button onClick={switchPage} variant="contained">Go To</Button>
            <div>
                <l1>{sensorData.testSensorLocation}</l1>
            </div>
        </div>
    );
}

export default ListElement;
