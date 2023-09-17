import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSensorData } from "../../actions/sensorData";

const Home = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getSensorData());
    }, [dispatch]);

    return (
     <div>
        <p>test</p>
     </div>
    );
  };
  
  export default Home;