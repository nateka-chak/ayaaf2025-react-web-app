import express from 'express';
import { Project } from '../models/Project';
import sendEmail from '../utils/sendEmail';
import { preventDuplicateSubmissions } from '../middleware/duplicatePrevention';

const router = express.Router();

router.post('/api/register/project', preventDuplicateSubmissions, async (req, res) => {
  try {
    const { name, group, institution, number, transaction, title, description } = req.body;
    
    // Validate required fields
    if (!name || !group || !institution || !number || !transaction || !title || !description) {
      return res.status(400).json({ 
        error: 'All fields are required', 
        success: false 
      });
    }

    const newProject = new Project({ name, group, institution, number, transaction, title, description });
    await newProject.save();
    
    // Send email notification
    try {
      await sendEmail('New Project Registration', req.body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the registration if email fails
    }
    
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
