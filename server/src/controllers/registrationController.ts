import { Request, Response } from 'express';
import Registration from '../models/Registration';

interface AuthRequest extends Request {
  user?: { id: string };
}

export const createRegistration = async (req: AuthRequest, res: Response) => {
  try {
    const { packageType, amount } = req.body;
    const userId = req.user?.id;

    const reg = await Registration.create({
      userId,
      packageType,
      amount,
      isPaid: true,
    });

    res.status(201).json(reg);
  } catch (err) {
    res.status(500).json({ message: 'Failed to register' });
  }
};
