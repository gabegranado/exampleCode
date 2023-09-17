import React, { useEffect } from "react";
import test from './test.json'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSensorData } from "../../actions/sensorData";
import { useNavigate } from "react-router-dom";
import ListElement from "./ListElement";
import Card from "./Card";
import CardGrid from "./CardGrid";
import './style.css'

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
      <CardGrid>
      { sensorData.map((_, i) => (
          <Card sensorData={_}>
            <h2>Card {i + 1}</h2>
          </Card>
        ))
      }
    </CardGrid>
    );
  };
  
  export default Catalog;