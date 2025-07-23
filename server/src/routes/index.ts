import { Router } from 'express';
import authRoutes from './authRoutes';
import paymentRoutes from './paymentRoutes';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/payment', paymentRoutes);

export default router; 