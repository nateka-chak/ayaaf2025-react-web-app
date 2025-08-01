import mongoose from 'mongoose';

const baseOptions = {
  timestamps: true,
};

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  group: { type: String, required: true },
  institution: { type: String, required: true },
  number: { type: String, required: true },
  transaction: { type: String, required: true, unique: true },
}, baseOptions);

const nonMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  institution: { type: String, required: true },
  number: { type: String, required: true },
  transaction: { type: String, required: true, unique: true },
}, baseOptions);

const delegateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  institution: { type: String, required: true },
  number: { type: String, required: true },
  transaction: { type: String, required: true, unique: true },
}, baseOptions);

const exhibitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  institution: { type: String, required: true },
  number: { type: String, required: true },
  transaction: { type: String, required: true, unique: true },
}, baseOptions);

// Add indexes for better performance
memberSchema.index({ transaction: 1 });
nonMemberSchema.index({ transaction: 1 });
delegateSchema.index({ transaction: 1 });
exhibitorSchema.index({ transaction: 1 });

export const Member = mongoose.model('Member', memberSchema);
export const NonMember = mongoose.model('NonMember', nonMemberSchema);
export const Delegate = mongoose.model('Delegate', delegateSchema);
export const Exhibitor = mongoose.model('Exhibitor', exhibitorSchema);
export default {
  Member,
  NonMember,
  Delegate,
  Exhibitor,
};