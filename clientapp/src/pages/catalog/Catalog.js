import react from 'react'
import test from './test.json'

const Catalog = () => {

    const mockSensor = [
        { sensorNum: 1, phLevel: 23 },
        { sensorNum: 2, phLevel: 42 },
        { sensorNum: 3, phLevel: 44 },
        { sensorNum: 4, phLevel: 1 },
        { sensorNum: 5, phLevel: 89 },
        { sensorNum: 6, phLevel: 101 },
        ];

    return (
     <div>
    <ul>
        {mockSensor.map((data) => (
        <li>{data.sensorNum}</li>
        ))}
    </ul>
     </div>
    );
  };
  
  export default Catalog;