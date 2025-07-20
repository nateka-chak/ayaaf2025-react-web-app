import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  packageType: { type: String, enum: ['member', 'non-member'] },
  amount: Number,
  isPaid: { type: Boolean, default: true }, // Always true for now
  registeredAt: { type: Date, default: Date.now }
});

export default mongoose.model('Registration', registrationSchema);
