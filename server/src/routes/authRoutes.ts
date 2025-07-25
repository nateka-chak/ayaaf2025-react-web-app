// routes/authRoutes.ts
import express from 'express';
import { register, login } from '../controllers/authController';

const router = express.Router();
router.post('/register', register);
router.post('/login', login);

// Additional routes can be added here as needed
// Export the router to be used in the main app 

export default router;
