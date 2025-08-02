import express from 'express';
import { Member, NonMember, Delegate, Exhibitor } from '../models/Registration';
import { Project } from '../models/Project';

const router = express.Router();

// Get all registrations for admin dashboard
router.get('/api/admin/registrations', async (req, res) => {
  try {
    // Fetch all registrations from different collections
    const [members, nonMembers, delegates, exhibitors, projects] = await Promise.all([
      Member.find().sort({ createdAt: -1 }),
      NonMember.find().sort({ createdAt: -1 }),
      Delegate.find().sort({ createdAt: -1 }),
      Exhibitor.find().sort({ createdAt: -1 }),
      Project.find().sort({ createdAt: -1 })
    ]);

    // Combine all registrations with type information
    const allRegistrations = [
      ...members.map(m => ({ ...m.toObject(), type: 'Member' })),
      ...nonMembers.map(n => ({ ...n.toObject(), type: 'Non-Member' })),
      ...delegates.map(d => ({ ...d.toObject(), type: 'Delegate' })),
      ...exhibitors.map(e => ({ ...e.toObject(), type: 'Exhibitor' })),
      ...projects.map(p => ({ ...p.toObject(), type: 'Project' }))
    ];

    // Sort by creation date (newest first)
    allRegistrations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    res.json({
      success: true,
      data: allRegistrations,
      counts: {
        members: members.length,
        nonMembers: nonMembers.length,
        delegates: delegates.length,
        exhibitors: exhibitors.length,
        projects: projects.length,
        total: allRegistrations.length
      }
    });
  } catch (error) {
    console.error('Admin registrations error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch registrations' 
    });
  }
});

// Get registration statistics
router.get('/api/admin/stats', async (req, res) => {
  try {
    const [members, nonMembers, delegates, exhibitors, projects] = await Promise.all([
      Member.countDocuments(),
      NonMember.countDocuments(),
      Delegate.countDocuments(),
      Exhibitor.countDocuments(),
      Project.countDocuments()
    ]);

    res.json({
      success: true,
      stats: {
        members,
        nonMembers,
        delegates,
        exhibitors,
        projects,
        total: members + nonMembers + delegates + exhibitors + projects
      }
    });
  } catch (error) {
    console.error('Admin stats error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch statistics' 
    });
  }
});

export default router; 