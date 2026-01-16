<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# STRUCTURA - AI-Powered Architecture Platform

This is a modern architecture platform built with React, TypeScript, and Vite, featuring AI consultation and 3D project viewing capabilities.

## Features

- 🤖 AI Consultant powered by Gemini API
- 🎨 3D Project Viewer with Three.js
- 📱 Responsive design
- 🚀 Fast development with Vite
- ⚡ Built with React 19 and TypeScript

## Run Locally

**Prerequisites:** Node.js 16+

1. Clone the repository:
   ```bash
   git clone https://github.com/amroduveydari1/STRUCTURA.git
   cd STRUCTURA
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amroduveydari1/STRUCTURA)

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variable in Vercel dashboard:
   - `GEMINI_API_KEY` = your API key

The project is pre-configured with `vercel.json` for optimal deployment.
