import { Request, Response } from 'express';
import Registration from '../models/Registration';

interface AuthRequest extends Request {
  user?: { id: string };
}
/**
 * Create a new registration
 * @param req - Express request object
 * @param res - Express response object
 */

export const createRegistration = async (req: AuthRequest, res: Response) => {
  try {
    const { packageType, amount } = req.body;
    const userId = req.user?.id;

    if (!userId || !packageType || !amount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const registration = await Registration.create({
      userId,
      packageType,
      amount,
      isPaid: true,
    });

    res.status(201).json(registration);
  } catch (err) {
    console.error('Error creating registration:', err);
    res.status(500).json({ message: 'Failed to register' });
  }

}

/**
 * Get all registrations
 * @param req - Express request object
 * @param res - Express response object
 */

export const getAllRegistrations = async (req: AuthRequest, res: Response) => {
  try {
    const registrations = await Registration.find().populate('userId', 'name');
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching registrations:', err);
    res.status(500).json({ message: 'Failed to fetch registrations' });
  }
}



/**
 * Get a registration by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const getRegistrationById = async (req: AuthRequest, res: Response) => {
  try {
    const registration = await Registration.findById(req.params.id).populate('userId', 'name');
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    res.status(200).json(registration);
  } catch (err) {
    console.error('Error fetching registration:', err);
    res.status(500).json({ message: 'Failed to fetch registration' });
  }

}

/**
 * Update a registration by ID
 * @param req - Express request object
 * @param res - Express response object
 */

export const updateRegistration = async (req: AuthRequest, res: Response) => {
  try {
    const { packageType, amount, isPaid } = req.body;
    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { packageType, amount, isPaid },
      { new: true }
    ).populate('userId', 'name');

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json(registration);
  } catch (err) {
    console.error('Error updating registration:', err);
    res.status(500).json({ message: 'Failed to update registration' });
  }

}

/**
 * Delete a registration by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const deleteRegistration = async (req: AuthRequest, res: Response) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (err) {
    console.error('Error deleting registration:', err);
    res.status(500).json({ message: 'Failed to delete registration' });
  }
}
/**
 * Get registrations for a specific user
 * @param req - Express request object
 * @param res - Express response object
 */

export const getUserRegistrations = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(400).json({ message: 'User not authenticated' });
    }

    const registrations = await Registration.find({ userId }).populate('userId', 'name');
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching user registrations:', err);
    res.status(500).json({ message: 'Failed to fetch user registrations' });
  }

}
/**
 * Get all registrations for admin
 * @param req - Express request object
 * @param res - Express response object
 */ 
export const getAdminRegistrations = async (req: AuthRequest, res: Response) => {
  try {
    const registrations = await Registration.find().populate('userId', 'name');
    res.status(200).json(registrations);
  } catch (err) {
    console.error('Error fetching admin registrations:', err);
    res.status(500).json({ message: 'Failed to fetch admin registrations' });
  }
} 

