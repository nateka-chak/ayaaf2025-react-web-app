# 🚀 AYAAF 2025 - Render Backend + cPanel Frontend Deployment

## 📋 **Your Setup (Recommended!)**
- **Backend**: Render (Node.js API)
- **Frontend**: cPanel (React App)
- **Database**: MongoDB Atlas

## 🔧 **Backend Deployment on Render**

### Step 1: Prepare Your Backend

1. **Create a new repository or use existing one**
2. **Ensure your backend structure is correct:**
   ```
   server/
   ├── src/
   │   ├── config/
   │   ├── controllers/
   │   ├── middleware/
   │   ├── models/
   │   ├── routes/
   │   ├── utils/
   │   └── server.ts
   ├── package.json
   ├── tsconfig.json
   └── .env
   ```

### Step 2: Deploy to Render

1. **Go to [render.com](https://render.com) and create account**
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `ayaaf-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Root Directory**: `server` (if your backend is in a server folder)

### Step 3: Set Environment Variables in Render

In your Render dashboard, go to **Environment** tab and add:

```env
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

### Step 4: Get Your Render URL

After deployment, Render will give you a URL like:
```
https://ayaaf-backend.onrender.com
```

## 🌐 **Frontend Configuration for Render Backend**

### Step 1: Update Frontend Environment

In your `client/.env.production` file:
```env
VITE_API_BASE_URL=https://ayaaf-backend.onrender.com/
```

### Step 2: Build and Deploy Frontend

1. **Build your React app:**
   ```bash
   cd client
   npm run build
   ```

2. **Upload to cPanel:**
   - Upload contents of `client/dist/` to your `public_html` folder
   - Or create a subdomain like `app.yourdomain.com`

## 🔍 **Testing Your Setup**

### 1. Test Backend Health
```bash
curl https://ayaaf-backend.onrender.com/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production",
  "deployed": true
}
```

### 2. Test Frontend Connection
1. Open your website
2. Open browser console (F12)
3. Look for these logs:
   ```
   🌐 API Base URL: https://ayaaf-backend.onrender.com/
   🌐 Current Hostname: yourdomain.com
   🌐 Environment: production
   ```

### 3. Test Registration Forms
Try submitting the exhibitor registration form and check:
- Browser console for any errors
- Network tab for API calls
- Response from the backend

## 🛠️ **Troubleshooting**

### Common Issues:

1. **"Failed to fetch" or Network Error**
   - Check if your Render service is running
   - Verify the API URL in browser console
   - Test the health endpoint directly

2. **CORS Errors**
   - The updated CORS configuration should handle this
   - Check if your domain is in the allowed origins

3. **Render Service Not Starting**
   - Check Render logs for build errors
   - Verify environment variables are set
   - Ensure MongoDB connection string is correct

### Debug Steps:

1. **Check Render Logs:**
   - Go to your Render dashboard
   - Click on your service
   - Check the "Logs" tab for errors

2. **Test API Endpoints:**
   ```bash
   # Health check
   curl https://ayaaf-backend.onrender.com/health
   
   # Test registration
   curl -X POST https://ayaaf-backend.onrender.com/api/register/exhibitor \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","institution":"Test","number":"123","transaction":"TEST123"}'
   ```

3. **Check Frontend Console:**
   - Open browser DevTools
   - Look for API URL logs
   - Check for any error messages

## ✅ **Advantages of This Setup**

- **Render**: Perfect for Node.js backends, automatic deployments, SSL included
- **cPanel**: Familiar for frontend hosting, good for static sites
- **MongoDB Atlas**: Managed database, no server maintenance
- **Cost Effective**: Render has a generous free tier

## 🔄 **Updates**

### Backend Updates:
1. Push changes to GitHub
2. Render automatically redeploys
3. No manual intervention needed

### Frontend Updates:
1. Make changes locally
2. Run `npm run build`
3. Upload new `dist/` contents to cPanel

---

**Your setup is perfect! Render + cPanel is a great combination for this type of application.** 