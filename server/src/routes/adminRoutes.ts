import express from 'express';
import { Member, NonMember, Delegate, Exhibitor } from '../models/Registration';
import { Project } from '../models/Project';

const router = express.Router();

// Type definition for registration data
interface RegistrationData {
  _id: any;
  name: string;
  institution: string;
  number: string;
  transaction: string;
  group?: string;
  title?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: string;
}

// Get all registrations for admin dashboard
router.get('/api/admin/registrations', async (req, res) => {
  try {
    // Fetch all registrations from different collections
    const [members, nonMembers, delegates, exhibitors, projects] = await Promise.all([
      Member.find().sort({ createdAt: -1 }).lean(),
      NonMember.find().sort({ createdAt: -1 }).lean(),
      Delegate.find().sort({ createdAt: -1 }).lean(),
      Exhibitor.find().sort({ createdAt: -1 }).lean(),
      Project.find().sort({ createdAt: -1 }).lean()
    ]);

    // Combine all registrations with type information
    const allRegistrations: RegistrationData[] = [
      ...members.map((m: any) => ({ ...m, type: 'Member' })),
      ...nonMembers.map((n: any) => ({ ...n, type: 'Non-Member' })),
      ...delegates.map((d: any) => ({ ...d, type: 'Delegate' })),
      ...exhibitors.map((e: any) => ({ ...e, type: 'Exhibitor' })),
      ...projects.map((p: any) => ({ ...p, type: 'Project' }))
    ];

    // Sort by creation date (newest first) - handle cases where createdAt might not exist
    allRegistrations.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });

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