import express from 'express';
import { initiatePNPL, getTransactions } from '../controllers/paymentController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/pnpl', auth, initiatePNPL);
router.get('/history', auth, getTransactions);

export default router;
