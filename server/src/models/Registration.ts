import mongoose from 'mongoose';

const baseOptions = {
  timestamps: true,
};

const memberSchema = new mongoose.Schema({
  name: String,
  group: String,
  institution: String,
  number: String,
  transaction: String,
}, baseOptions);

const nonMemberSchema = new mongoose.Schema({
  name: String,
  email: String,
  institution: String,
  transaction: String,
}, baseOptions);

const delegateSchema = new mongoose.Schema({
  name: String,
  phone: String,
  organization: String,
  transaction: String,
}, baseOptions);

const exhibitorSchema = new mongoose.Schema({
  companyName: String,
  contactPerson: String,
  contactNumber: String,
  transaction: String,
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