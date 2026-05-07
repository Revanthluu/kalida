# Deploying Kalida Corner to Vercel

Since this is a full-stack project with a separate `frontend` and `backend`, here is the best way to deploy it.

## 1. Deploying the Frontend (React + Vite)

Vercel is optimized for React/Vite applications.

### Option A: Via Vercel Dashboard (Recommended)
1. Go to [Vercel](https://vercel.com/) and log in.
2. Click **"Add New"** -> **"Project"**.
3. Import your GitHub repository: `https://github.com/Revanthluu/kalida`.
4. **Configure Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend` (Click "Edit" and select the `frontend` folder)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Option B: Via Vercel CLI
If you have the Vercel CLI installed:
```bash
cd frontend
vercel
```

## 2. Handling the Backend

Vercel is primarily for frontend and serverless functions. To run your `backend/src/index.ts` server, you have two choices:

### Choice 1: Deploy Backend to Render/Heroku (Easier)
1. Deploy your `backend` folder to a service like [Render](https://render.com/) or [Railway](https://railway.app/).
2. In your `frontend` code, update the API URL to point to your new backend URL.

### Choice 2: Vercel Serverless Functions
To run the backend on Vercel, you would need to move your Express routes into a `api/` folder at the root. For this project, **Choice 1** is recommended for a standard Express server.

## 3. Environment Variables

If you have sensitive data (like email keys), make sure to add them in the Vercel Dashboard:
1. Go to **Settings** -> **Environment Variables**.
2. Add your keys (e.g., `VITE_API_URL`, `EMAIL_USER`, etc.).

---

**Note**: Since we are using Tailwind CSS v4, Vercel will handle the build process automatically as long as the `package.json` in the `frontend` folder is correctly configured (which it is!).
