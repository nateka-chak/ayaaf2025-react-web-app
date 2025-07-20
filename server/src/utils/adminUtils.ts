import Registration from '../models/Registration';

export const getAllRegistrations = async () => {
  return Registration.find().populate('userId', 'name email');
};
