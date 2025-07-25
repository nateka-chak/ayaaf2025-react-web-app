import { Router } from 'express';
import authRoutes from './authRoutes';
import paymentRoutes from './paymentRoutes';
import registrationRoutes from './registrationRoutes';

const router = Router();

router.use(registrationRoutes)
router.use('/api/auth', authRoutes);
router.use('/api/payment', paymentRoutes);

export default router; 