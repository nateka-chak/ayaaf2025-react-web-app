// API Base URL configuration for development and production
const getApiBaseUrl = () => {
  // If VITE_API_BASE_URL is explicitly set, use it (for Render deployment)
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // For production (when not on localhost)
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Use your Render backend URL
    return 'https://ayaaf2025-react-web-app.onrender.com/';
  }
  
  // For development (localhost)
  return 'http://localhost:5000/';
};

export const VITE_API_BASE_URL = getApiBaseUrl();

// Log the API URL for debugging (remove in production)
console.log('🌐 API Base URL:', VITE_API_BASE_URL);
console.log('🌐 Current Hostname:', window.location.hostname);
console.log('🌐 Environment:', import.meta.env.MODE);