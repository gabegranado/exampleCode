export default (sensorData=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL_SENSOR_DATA':
            console.log('sensor Data');
            console.log("action" + action.payload[0]);
            return action.payload;
        default:
            return sensorData;
    }
}
