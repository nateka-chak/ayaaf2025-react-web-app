import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const isAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user.id);
  if (user?.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  next();
};

export const isAuthenticated = async (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  next();
};

// export const isMember = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const user = await User.findById(req.user.id);
//   if (user?.role !== 'member') return res.status(403).json({ message: 'Member only' });
//   next();       
// }
// export const isDelegate = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const user = await User.findById(req.user.id);
//   if (user?.role !== 'delegate') return res.status(403).json({ message: 'Delegate only' });
//   next(); 
// }
// export const isAdminOrMember = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const user = await User.findById(req.user.id);
//   if (user?.role !== 'admin' && user?.role !== 'member') {
//     return res.status(403).json({ message: 'Admin or Member only' });
//   }
//   next();
// };    
// export const isAdminOrDelegate = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const user = await User.findById(req.user.id);
//   if (user?.role !== 'admin' && user?.role !== 'delegate') {
//     return res.status(403).json({ message: 'Admin or Delegate only' });
//   }
//   next();
// };
// export const isAdminOrMemberOrDelegate = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const user = await User.findById(req.user.id);
//   if (user?.role !== 'admin' && user?.role !== 'member' && user?.role !== 'delegate') {
//     return res.status(403).json({ message: 'Admin, Member or Delegate only' });
//   }
//   next();
// };
// export const isAdminOrMemberOrDelegateOrAuthenticated = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   const user = await User.findById(req.user.id);
//   if (user?.role !== 'admin' && user?.role !== 'member' && user?.role !== 'delegate' && !req.user) {
//     return res.status(403).json({ message: 'Admin, Member, Delegate or Authenticated user only' });
//   }
//   next();
// };
// export const isAuthenticatedOrAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   if (!req.user || req.user.role !== 'admin') {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   next();
// };
// export const isAuthenticatedOrMember = async (req: AuthRequest, res: Response, next: NextFunction) => {
//   if (!req.user || req.user.role !== 'member') {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   next();
// };
