import express from 'express';
import { Member, NonMember, Delegate, Exhibitor } from '../models/Registration';
import sendEmail from '../utils/sendEmail';
import { preventDuplicateSubmissions } from '../middleware/duplicatePrevention';

const router = express.Router();

// Member Registration
router.post('/api/register/member', preventDuplicateSubmissions, async (req, res): Promise<void> => {
  try {
    const { name, group, institution, number, transaction } = req.body;
    
    // Validate required fields
    if (!name || !group || !institution || !number || !transaction) {
      res.status(400).json({ 
        error: 'All fields are required', 
        success: false 
      });
      return;
    }

    const newEntry = new Member({ name, group, institution, number, transaction });
    await newEntry.save();
    
    // Send email notification
    try {
      await sendEmail('New Member Registration', req.body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the registration if email fails
    }
    
    res.json({ success: true, message: 'Member registration successful' });
  } catch (err: any) {
    console.error('Member registration error:', err);
    
    // Handle duplicate key error
    if (err.code === 11000) {
      res.status(409).json({ 
        error: 'This transaction code has already been used. Please check your payment confirmation.',
        success: false 
      });
      return;
    }
    
    res.status(500).json({ error: 'Failed to register member', success: false });
  }
});

// Non-member Registration
router.post('/api/register/non-member', preventDuplicateSubmissions, async (req, res): Promise<void> => {
  try {
    const { name, institution, number, transaction } = req.body;
    
    // Validate required fields
    if (!name || !institution || !number || !transaction) {
      res.status(400).json({ 
        error: 'All fields are required', 
        success: false 
      });
      return;
    }

    const newEntry = new NonMember({ name, institution, number, transaction });
    await newEntry.save();
    
    // Send email notification
    try {
      await sendEmail('New Non-Member Registration', req.body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the registration if email fails
    }
    
    res.json({ success: true, message: 'Non-member registration successful' });
  } catch (err: any) {
    console.error('Non-member registration error:', err);
    
    // Handle duplicate key error
    if (err.code === 11000) {
      res.status(409).json({ 
        error: 'This transaction code has already been used. Please check your payment confirmation.',
        success: false 
      });
      return;
    }
    
    res.status(500).json({ error: 'Failed to register non-member', success: false });
  }
});

// Delegate Registration
router.post('/api/register/delegate', preventDuplicateSubmissions, async (req, res): Promise<void> => {
  try {
    const { name, institution, number, transaction } = req.body;
    
    // Validate required fields
    if (!name || !institution || !number || !transaction) {
      res.status(400).json({ 
        error: 'All fields are required', 
        success: false 
      });
      return;
    }

    const newEntry = new Delegate({ name, institution, number, transaction });
    await newEntry.save();
    
    // Send email notification
    try {
      await sendEmail('New Delegate Registration', req.body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the registration if email fails
    }
    
    res.json({ success: true, message: 'Delegate registration successful' });
  } catch (err: any) {
    console.error('Delegate registration error:', err);
    
    // Handle duplicate key error
    if (err.code === 11000) {
      res.status(409).json({ 
        error: 'This transaction code has already been used. Please check your payment confirmation.',
        success: false 
      });
      return;
    }
    
    res.status(500).json({ error: 'Failed to register delegate', success: false });
  }
});

// Exhibitor Registration
router.post('/api/register/exhibitor', preventDuplicateSubmissions, async (req, res): Promise<void> => {
  try {
    const { name, institution, number, transaction } = req.body;
    
    // Validate required fields
    if (!name || !institution || !number || !transaction) {
      res.status(400).json({ 
        error: 'All fields are required', 
        success: false 
      });
      return;
    }

    const newEntry = new Exhibitor({ name, institution, number, transaction });
    await newEntry.save();
    
    // Send email notification
    try {
      await sendEmail('New Exhibitor Registration', req.body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the registration if email fails
    }
    
    res.json({ success: true, message: 'Exhibitor registration successful' });
  } catch (err: any) {
    console.error('Exhibitor registration error:', err);
    
    // Handle duplicate key error
    if (err.code === 11000) {
      res.status(409).json({ 
        error: 'This transaction code has already been used. Please check your payment confirmation.',
        success: false 
      });
      return;
    }
    
    res.status(500).json({ error: 'Failed to register exhibitor', success: false });
  }
});

export default router;
