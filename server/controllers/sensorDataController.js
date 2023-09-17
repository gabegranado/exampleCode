import express from 'express';
import mongoose from 'mongoose';

import Test from '../models/testModel.js';

const router = express.Router();

export const createTestData = async (req, res) => {
    const { testSensorId, testSensorLocation, testPPM, testPH } = req.body;
    console.log(req.body);
    const newTest = new Test({ testSensorId, testSensorLocation, testPPM, testPH });

    try {
        await newTest.save();

        res.status(201).json(newTest);
        console.log("success")
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log("error")
    }
}

export const getTestData = async (req, res) => {
    try {
        const allTestData = await Test.find();
        console.log("got test data");
        res.status(200).json(allTestData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;
