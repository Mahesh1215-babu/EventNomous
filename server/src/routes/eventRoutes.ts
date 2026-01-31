import express from 'express';
import { createEvent, getEvents } from '../controllers/eventController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/', auth, createEvent);
router.get('/', auth, getEvents);

export default router;
