// controllers/authController.ts
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

// Register and login functions
// These functions handle user registration and login, including password hashing and JWT token generation

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hashed });
    res.status(201).json(user);
  } catch {
    res.status(400).json({ message: "Registration failed" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (
    !user ||
    typeof user.password !== "string" ||
    !(await bcrypt.compare(password, user.password))
  ) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!);
  res.json({ token, user });
};
