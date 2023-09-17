import axios from 'axios';

export const fetchTest = () => axios.get(`http://localhost:3000/sensorData`);