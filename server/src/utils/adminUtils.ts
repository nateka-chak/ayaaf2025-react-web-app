import mongoose from 'mongoose';
import { Member, NonMember, Delegate, Exhibitor } from '../models/Registration';

type RegistrationType = 'member' | 'nonMember' | 'delegate' | 'exhibitor';

const modelMap: Record<RegistrationType, mongoose.Model<any>> = {
  member: Member,
  nonMember: NonMember,
  delegate: Delegate,
  exhibitor: Exhibitor,
};

export const getAllRegistrations = async (type: string) => {
  const Model = modelMap[type as RegistrationType];
  if (!Model) throw new Error('Invalid registration type');
  return Model.find().populate('userId', 'name email');
};
