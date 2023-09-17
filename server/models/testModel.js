import mongoose from 'mongoose';


const TestSchema = mongoose.Schema({
    testSensorId: {type: String, lowercase: true, required: true, unique: true},
    testSensorLocation: {type: String, lowercase: true, required: true, unique: false},
    testPPM: {type: Number, required: true, unique: false},
    testPH: {type: Number, required: true, unique: false},
})

var Test = mongoose.model('Test', TestSchema);

export default Test;
