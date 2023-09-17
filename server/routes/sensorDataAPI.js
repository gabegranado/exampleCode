import express, { Router } from 'express';
import { createTestData, getTestData, sensorDetail } from '../controllers/sensorDataController.js';

const router = express.Router();

router.post('/', createTestData);
router.get('/', getTestData)
router.get('/sensorDetail/:sensorId', sensorDetail)

export default router;