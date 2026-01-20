# Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository (GitHub, GitLab, or Bitbucket)

## Environment Variables
Before deploying, make sure to set up your environment variables in Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variable:
   - `GEMINI_API_KEY`: Your Google Gemini API key

## Deployment Methods

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your Git repository
4. Vercel will automatically detect the Vite framework
5. Add your environment variables
6. Click "Deploy"

### Method 3: Deploy via GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub account to Vercel
3. Select the repository
4. Vercel will automatically deploy on every push to main branch

## Project Configuration

The project is already configured for Vercel with:
- ✅ `vercel.json` - Vercel configuration file
- ✅ `.vercelignore` - Files to ignore during deployment
- ✅ `dist/` folder - Production build output

## Build Information

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: Vite

## Local Preview

To preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check that `GEMINI_API_KEY` environment variable is set in Vercel

### 404 Errors on Routes
- The `vercel.json` includes rewrites to handle SPA routing
- All routes will fallback to `index.html`

### Environment Variables Not Working
- Make sure environment variables are added in Vercel dashboard
- Redeploy after adding new environment variables

## Notes

- The project uses CDN imports for some dependencies (see importmap in index.html)
- Three.js is used for 3D visualizations
- React 19+ is being used
- Make sure your Gemini API key has sufficient quota

## Support

For more information, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
