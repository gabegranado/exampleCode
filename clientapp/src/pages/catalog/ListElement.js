import React from 'react';
import { useNavigate } from "react-router-dom";

const ListElement = ({ sensorData }) => {
    const navigate = useNavigate();

    const switchPage = () => {
        navigate(`/sensordetails/${sensorData.testSensorId}`);
    }

    return (
        <div>
            <l1>{sensorData.testSensorLocation}       </l1>
            <button onClick={switchPage}>GO TO</button>
        </div>
    );
}

export default ListElement;
