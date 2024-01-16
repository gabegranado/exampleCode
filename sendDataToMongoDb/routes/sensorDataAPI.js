import express, { Router } from 'express';
import { sendSensorData } from '../controllers/sensorDataController.js';

const router = express.Router();

router.post('/', sendSensorData);

export default router;