import mongoose from 'mongoose';

const projectRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  group: { type: String, required: true },
  institution: { type: String, required: true },
  number: { type: String, required: true },
  transaction: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export const Project = mongoose.model('Project', projectRegistrationSchema);
