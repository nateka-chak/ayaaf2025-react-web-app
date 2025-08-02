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

// Enhanced CORS configuration for production (including Render)
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow localhost for development
    if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true);
    }
    
    // Allow Render domains
    if (origin.includes('render.com') || origin.includes('onrender.com')) {
      return callback(null, true);
    }
    
    // Allow your specific production domain
    if (origin.includes('ayaaf2025.tajithreeinone.com')) {
      return callback(null, true);
    }
    
    // Allow common hosting domains
    if (origin.includes('netlify.app') || origin.includes('vercel.app') || origin.includes('github.io')) {
      return callback(null, true);
    }
    
    // Allow your production domain
    if (origin.includes('ayaaf.africa') || origin.includes('yourdomain.com')) {
      return callback(null, true);
    }
    
    // For now, allow all origins (you can restrict this later)
    callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    deployed: true
  });
});

// Load all routes
app.use(allRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the AYAAF API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    deployed: true
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl
  });
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📊 MongoDB Connected: ${mongoose.connection.host}`);
    console.log(`🚀 Deployed on Render: ${process.env.RENDER ? 'Yes' : 'No'}`);
  });
}).catch((error) => {
  console.error('❌ MongoDB connection failed:', error);
  process.exit(1);
});
