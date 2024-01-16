import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import sprintf from 'sprintf';
import sensorDataRoutes from './routes/sensorDataAPI.js';


import * as CONFIG from "../config.json" assert { type: "json" };
var dbPsw = CONFIG.default.dbPassword;

const app = express();
const PORT = 3010;
const CONNECTION_URL = sprintf("mongodb+srv://casgrana:%s@cluster1.dgf2xh7.mongodb.net/?retryWrites=true&w=majority", dbPsw);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/sendSensorData', sensorDataRoutes);

mongoose.connect(CONNECTION_URL, function(err) {
    if (err) {
        console.log('error, not connected to database' + err);
    } else {
        console.log('connection to database succesful');
    }
})

app.listen(PORT, function() {
    console.log('running the server on port ' + PORT);
});