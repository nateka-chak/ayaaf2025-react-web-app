import { Request, Response, NextFunction } from 'express';

// Store recent submissions to prevent duplicates
const recentSubmissions = new Map<string, number>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 5 * 60 * 1000) { // 5 minutes
      recentSubmissions.delete(key);
    }
  }
}, 5 * 60 * 1000); // Run every 5 minutes

export const preventDuplicateSubmissions = (req: Request, res: Response, next: NextFunction) => {
  // Create a unique key based on user data and timestamp
  const userData = JSON.stringify({
    name: req.body.name,
    number: req.body.number,
    transaction: req.body.transaction,
    timestamp: Math.floor(Date.now() / 10000) // Round to 10-second intervals
  });
  
  const submissionKey = Buffer.from(userData).toString('base64');
  
  // Check if this submission was made recently (within 10 seconds)
  if (recentSubmissions.has(submissionKey)) {
    return res.status(429).json({ 
      error: 'Duplicate submission detected. Please wait a moment before trying again.',
      success: false 
    });
  }
  
  // Store this submission
  recentSubmissions.set(submissionKey, Date.now());
  
  next();
}; 