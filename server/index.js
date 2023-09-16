import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import sprintf from 'sprintf'

const dbPsw = "57xljKpNyhRxNWrz";
const app = express();
const PORT = 3000;
const CONNECTION_URL = sprintf("mongodb+srv://casgrana:%s@cluster1.jlyjhgq.mongodb.net/?retryWrites=true&w=majority", dbPsw);

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

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