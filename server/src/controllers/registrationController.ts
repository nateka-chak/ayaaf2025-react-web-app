import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { Member, NonMember, Delegate, Exhibitor } from '../models/Registration';

interface AuthRequest extends Request {
  user?: { id: string };
}

type RegistrationType = 'member' | 'nonMember' | 'delegate' | 'exhibitor';

const modelMap: Record<RegistrationType, mongoose.Model<any>> = {
  member: Member,
  nonMember: NonMember,
  delegate: Delegate,
  exhibitor: Exhibitor,
};

/**
 * Create a new registration
 * @param req - Express request object
 * @param res - Express response object
 */
export const createRegistration = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { type, ...data } = req.body;
    const Model = modelMap[type as RegistrationType];
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registration = await Model.create(data);
    res.status(201).json(registration);
  } catch (err) {
    console.error('Error creating registration:', err);
    res.status(500).json({ message: 'Failed to register' });
  }
};

/**
 * Get all registrations
 * @param req - Express request object
 * @param res - Express response object
 */
export const getAllRegistrations = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const Model = modelMap[type as RegistrationType];
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registrations = await Model.find().populate('userId', 'name');
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching registrations:', err);
    res.status(500).json({ message: 'Failed to fetch registrations' });
  }
};

/**
 * Get a registration by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const getRegistrationById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const Model = modelMap[type as RegistrationType];
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registration = await Model.findById(req.params.id).populate('userId', 'name');
    if (!registration) {
      res.status(404).json({ message: 'Registration not found' });
      return;
    }
    res.status(200).json(registration);
  } catch (err) {
    console.error('Error fetching registration:', err);
    res.status(500).json({ message: 'Failed to fetch registration' });
  }
};

/**
 * Update a registration by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const updateRegistration = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { type, ...data } = req.body;
    const Model = modelMap[type as RegistrationType];
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registration = await Model.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    ).populate('userId', 'name');

    if (!registration) {
      res.status(404).json({ message: 'Registration not found' });
      return;
    }

    res.status(200).json(registration);
  } catch (err) {
    console.error('Error updating registration:', err);
    res.status(500).json({ message: 'Failed to update registration' });
  }
};

/**
 * Delete a registration by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const deleteRegistration = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const Model = modelMap[type as RegistrationType];
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registration = await Model.findByIdAndDelete(req.params.id);
    if (!registration) {
      res.status(404).json({ message: 'Registration not found' });
      return;
    }
    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (err) {
    console.error('Error deleting registration:', err);
    res.status(500).json({ message: 'Failed to delete registration' });
  }
};

/**
 * Get registrations for a specific user
 * @param req - Express request object
 * @param res - Express response object
 */
export const getUserRegistrations = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { type } = req.query;
    const Model = modelMap[type as RegistrationType];
    if (!userId) {
      res.status(400).json({ message: 'User not authenticated' });
      return;
    }
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registrations = await Model.find({ userId }).populate('userId', 'name');
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching user registrations:', err);
    res.status(500).json({ message: 'Failed to fetch user registrations' });
  }
};

/**
 * Get all registrations for admin
 * @param req - Express request object
 * @param res - Express response object
 */ 
export const getAdminRegistrations = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const Model = modelMap[type as RegistrationType];
    if (!Model) {
      res.status(400).json({ message: 'Invalid registration type' });
      return;
    }
    const registrations = await Model.find().populate('userId', 'name');
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching admin registrations:', err);
    res.status(500).json({ message: 'Failed to fetch admin registrations' });
  }
}; 

