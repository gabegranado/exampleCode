import express, { Router } from 'express';
import { createTestData, getTestData } from '../controllers/sensorDataController.js';

const router = express.Router();

router.post('/', createTestData);
router.get('/', getTestData)

export default router;