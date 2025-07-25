import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db';
import allRoutes from './routes';
import memberRegisterRoute from './routes/registrationRoutes';
import nonMemberRegisterRoute from './routes/registrationRoutes';
import exhibitorRegisterRoute from './routes/registrationRoutes';
import delegateRegisterRoute from './routes/registrationRoutes';
import transactionEmailRoute from './routes/registrationRoutes';
import { Member } from './models/Registration'; // ✅ Import correct model

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Load routes
app.use(allRoutes);
app.use('/api/member-register', memberRegisterRoute);
app.use('/api/non-member-register', nonMemberRegisterRoute);
app.use('/api/exhibitor-register', exhibitorRegisterRoute);
app.use('/api/delegate-register', delegateRegisterRoute);
app.use('/api/send-transaction-email', transactionEmailRoute);

// Optional direct post for member (can be removed if handled in registrationRoutes.ts)
app.post('/api/member-register', async (req, res) => {
  try {
    const { name, group, institution, number, transaction } = req.body;

    if (!name || !group || !institution || !number || !transaction) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newRegistration = new Member({ name, group, institution, number, transaction });
    await newRegistration.save();

    res.json({ success: true, message: 'Registration submitted successfully' });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the AYAAF API');
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
});
