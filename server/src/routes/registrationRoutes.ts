import express from 'express';
import { Member, NonMember, Delegate, Exhibitor } from '../models/Registration';
import sendEmail from '../utils/sendEmail';

const router = express.Router();

// Member Registration
router.post('/api/register/member', async (req, res) => {
  try {
    const newEntry = new Member(req.body);
    await newEntry.save();
    await sendEmail('New Member Registration', req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register member' });
  }
});

// Non-member Registration
router.post('/api/register/non-member', async (req, res) => {
  try {
    const newEntry = new NonMember(req.body);
    await newEntry.save();
    await sendEmail('New Non-Member Registration', req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register non-member' });
  }
});

// Delegate Registration
router.post('/api/register/delegate', async (req, res) => {
  try {
    const newEntry = new Delegate(req.body);
    await newEntry.save();
    await sendEmail('New Delegate Registration', req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register delegate' });
  }
});

// Exhibitor Registration
router.post('/api/register/exhibitor', async (req, res) => {
  try {
    const newEntry = new Exhibitor(req.body);
    await newEntry.save();
    await sendEmail('New Exhibitor Registration', req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register exhibitor' });
  }
});

export default router;
