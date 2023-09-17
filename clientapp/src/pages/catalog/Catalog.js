import React, { useEffect } from "react";
import test from './test.json'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSensorData } from "../../actions/sensorData";
import { useNavigate } from "react-router-dom";
import ListElement from "./ListElement";

const Catalog = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getSensorData());
     }, [dispatch]);

     const switchPage = (id) => {
        //navigate(`/sensordetails/${id}`);

      }
    const sensorData = useSelector((state) => state.sensorData);
    //console.log("SENSOR DATA!: ", sensorData[0]);

    return (
     <div>
    <ul>
        {sensorData.map((data) => (
        <li>
        <ListElement sensorData={data} ></ListElement>
        </li>
        ))}
    </ul>
     </div>
    );
  };
  
  export default Catalog;