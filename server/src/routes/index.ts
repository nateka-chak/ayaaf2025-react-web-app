import { Router } from 'express';
import authRoutes from './authRoutes';
import paymentRoutes from './paymentRoutes';
import registrationRoutes from './registrationRoutes';
import projectRoutes from './projectRoutes';
import adminRoutes from './adminRoutes';

const router = Router();

// Registration routes
router.use(registrationRoutes);

// Project routes
router.use(projectRoutes);

// Admin routes
router.use(adminRoutes);

// Auth routes
router.use('/api/auth', authRoutes);

// Payment routes (for sponsorship)
router.use('/api/payment', paymentRoutes);

export default router; 