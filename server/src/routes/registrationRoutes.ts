import express from 'express';
import { createRegistration } from '../controllers/registrationController';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

router.post('/', authMiddleware, createRegistration);

export default router;
