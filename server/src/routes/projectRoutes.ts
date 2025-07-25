import express from 'express';
import { Project } from '../models/Project';
import sendEmail from '../utils/sendEmail';

const router = express.Router();

router.post('/api/register/project', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    await sendEmail('New Project Registration', req.body);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register project' });
  }
});

export default router;
