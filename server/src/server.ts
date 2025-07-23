// server.ts
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db';
import allRoutes from './routes';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Load all routes from routes/index.ts
app.use(allRoutes);

app.post('/api/member-register', (req, res) => {
  const { name, group, institution, number, transaction } = req.body;
  // Save to DB or send email using nodemailer...
  res.json({ success: true });
});
app.get('/', (req, res) => {
  res.send('Welcome to the AYAAF API');
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
});
