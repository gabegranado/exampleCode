import mongoose from 'mongoose';

const sensorDataModel = mongoose.Schema({
    num: {type: String, lowercase: true, required: true, unique: false},
    zipOrigin: {type: String, lowercase: true, required: true, unique: false},
    ph: {type: Number, required: true, unique: false},
    temperature: {type: Number, required: true, unique: false},
    tds: {type: Number, required: true, unique: false}
})

var sensorData = mongoose.model('sensor1', sensorDataModel);

export default sensorData;
