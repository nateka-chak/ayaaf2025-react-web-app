// server.ts
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import bcrypt from 'bcryptjs';
import User from './models/User';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});


async function createAdminIfNotExists() {
  const admin = await User.findOne({ email: 'admin@ayaaf.com' });
  if (!admin) {
    const hashed = await bcrypt.hash('254254', 10);
    await User.create({
      name: 'AYAAF',
      email: 'admin@ayaaf.com',
      password: hashed,
      role: 'admin',
    });
    console.log('Admin created');
  }
}
