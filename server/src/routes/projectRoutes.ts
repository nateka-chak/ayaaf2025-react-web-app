import express from 'express';
import { Project } from '../models/Project';
import sendEmail from '../utils/sendEmail';
import { preventDuplicateSubmissions } from '../middleware/duplicatePrevention';

const router = express.Router();

router.post('/api/register/project', preventDuplicateSubmissions, async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    await sendEmail('New Project Registration', req.body);
    res.json({ success: true, message: 'Project registration successful' });
  } catch (err: any) {
    console.error('Project registration error:', err);
    
    // Handle duplicate key error
    if (err.code === 11000) {
      return res.status(409).json({ 
        error: 'This transaction code has already been used. Please check your payment confirmation.',
        success: false 
      });
    }
    
    res.status(500).json({ error: 'Failed to register project', success: false });
  }
});

export default router;
