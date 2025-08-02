# 🚀 AYAAF 2025 WebApp - cPanel Deployment Guide

## 📋 Prerequisites

- cPanel hosting account with Node.js support
- MongoDB database (MongoDB Atlas recommended)
- Domain name configured in cPanel

## 🔧 Backend Deployment (Node.js)

### Step 1: Prepare Backend for Production

1. **Create production environment file:**
   ```bash
   # In server directory
   cp .env .env.production
   ```

2. **Update `.env.production`:**
   ```env
   NODE_ENV=production
   PORT=5000
   MONGO_URI=your_mongodb_atlas_connection_string
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   ```

### Step 2: Deploy Backend to cPanel

1. **Access cPanel → Node.js Selector**
2. **Create a new Node.js app:**
   - App name: `ayaaf-backend`
   - Node.js version: `18.x` or higher
   - App mode: `Production`
   - App root: `/home/username/ayaaf-backend`
   - App URL: `yourdomain.com/api` (or subdomain like `api.yourdomain.com`)

3. **Upload backend files:**
   ```bash
   # Compress server folder
   zip -r backend.zip server/
   
   # Upload to cPanel File Manager
   # Extract in /home/username/ayaaf-backend/
   ```

4. **Install dependencies:**
   ```bash
   # In cPanel Terminal or SSH
   cd /home/username/ayaaf-backend
   npm install --production
   ```

5. **Build the application:**
   ```bash
   npm run build
   ```

6. **Start the application:**
   ```bash
   npm start
   ```

### Step 3: Configure Backend URL

Update your frontend environment variables to point to your production backend:

```env
# In client/.env.production
VITE_API_BASE_URL=https://yourdomain.com/api/
```

## 🌐 Frontend Deployment (React)

### Step 1: Build Frontend for Production

1. **Create production environment file:**
   ```bash
   # In client directory
   cp .env .env.production
   ```

2. **Update `.env.production`:**
   ```env
   VITE_API_BASE_URL=https://yourdomain.com/api/
   ```

3. **Build the application:**
   ```bash
   cd client
   npm run build
   ```

### Step 2: Deploy to cPanel

1. **Upload build files:**
   - Upload contents of `client/dist/` to your domain's public_html folder
   - Or create a subdomain like `app.yourdomain.com`

2. **Configure .htaccess for React Router:**
   ```apache
   # Create .htaccess in public_html
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_FILENAME} !-l
   RewriteRule . /index.html [L]
   ```

## 🔍 Testing Your Deployment

### 1. Test Backend Health
```bash
curl https://yourdomain.com/api/health
```

### 2. Test Frontend
- Visit your domain
- Open browser console (F12)
- Check for any API connection errors
- Test the exhibitor registration form

### 3. Debug Common Issues

**If forms aren't submitting:**

1. **Check API URL in browser console:**
   ```javascript
   console.log('API URL:', import.meta.env.VITE_API_BASE_URL);
   ```

2. **Test API endpoint directly:**
   ```bash
   curl -X POST https://yourdomain.com/api/register/exhibitor \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","institution":"Test","number":"123","transaction":"TEST123"}'
   ```

3. **Check CORS settings:**
   - Ensure your domain is allowed in backend CORS configuration
   - Update `server/src/server.ts` with your actual domain

## 🛠️ Troubleshooting

### Common Issues:

1. **"Network error" or "Failed to fetch"**
   - Check if backend is running
   - Verify API URL is correct
   - Check CORS configuration

2. **"404 Not Found"**
   - Ensure routes are properly configured
   - Check if backend is accessible at the correct URL

3. **"500 Internal Server Error"**
   - Check MongoDB connection
   - Verify environment variables
   - Check server logs in cPanel

### Debug Steps:

1. **Enable detailed logging:**
   ```javascript
   // In browser console
   console.log('🌐 API Base URL:', VITE_API_BASE_URL);
   console.log('🌐 Current Hostname:', window.location.hostname);
   ```

2. **Check network tab:**
   - Open browser DevTools → Network
   - Submit form and check request/response

3. **Test individual endpoints:**
   ```bash
   # Health check
   curl https://yourdomain.com/api/health
   
   # Test registration
   curl -X POST https://yourdomain.com/api/register/exhibitor \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","institution":"Test","number":"123","transaction":"TEST123"}'
   ```

## 📞 Support

If you encounter issues:

1. Check browser console for errors
2. Verify all environment variables are set
3. Ensure MongoDB is accessible
4. Test API endpoints individually
5. Check cPanel error logs

## 🔄 Updates

To update your deployment:

1. **Backend:**
   ```bash
   cd /home/username/ayaaf-backend
   git pull  # or upload new files
   npm install
   npm run build
   npm start
   ```

2. **Frontend:**
   ```bash
   cd client
   npm run build
   # Upload new dist/ contents to public_html
   ```

---

**Remember:** Always test in development first, then deploy to production! 