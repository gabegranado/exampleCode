import mongoose from 'mongoose';


const TestSchema = mongoose.Schema({
    testSensorId: {type: String, lowercase: true, required: true, unique: true},
    testSensorLocation: {type: String, lowercase: true, required: true, unique: true},
    testPPM: {type: Number, required: true, unique: true},
    testPH: {type: Number, required: true, unique: true},
})

var Test = mongoose.model('Test', TestSchema);

export default Test;
