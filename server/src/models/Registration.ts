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