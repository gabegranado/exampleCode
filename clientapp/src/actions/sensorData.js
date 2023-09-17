import * as api from '../api/index.js';

export const getSensorData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTest();
    console.log('sensorData payload', data);
    dispatch({ type: 'FETCH_ALL_SENSOR_DATA', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};