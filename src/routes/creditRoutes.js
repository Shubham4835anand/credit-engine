import express from 'express';
import { handleEnroll, getCredits } from '../controllers/creditController.js';

const router = express.Router();
router.post('/enroll', handleEnroll);
router.get('/credits/:userId', getCredits);
export default router;
