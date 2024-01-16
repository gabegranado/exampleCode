import express from 'express';
import sensorData from '../models/sensorDataModel.js';

import * as CONFIG from "../../config.json" assert { type: "json" };

const router = express.Router();


export const sendSensorData = async (req, res) => {
    const { num, zipOrigin, ph, temperature, tds } = req.body;
    console.log(req.body);
    const newData = new sensorData({ num, zipOrigin, ph, temperature, tds });

    try {
        await newData.save();

        res.status(201).json(newData);
        console.log("success")
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log("error")
    }
}

export default router;
