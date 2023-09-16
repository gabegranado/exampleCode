import react from 'react'
import { useParams } from "react-router-dom";

const SensorDetails = () => {
    const params = useParams();
    console.log("test");
    console.log(params);
    var sensorId;
    for (var key in params) {
        if (key === "sensorId") {
            sensorId = params[key];
        }
      }
    return (
     <div>
        <p>sensorTest{sensorId}</p>
     </div>
    );
  };
  
  export default SensorDetails;