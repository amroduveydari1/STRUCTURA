# STRUCTURA

An interactive architecture studio website concept combining project storytelling, 3D presentation, and a multilingual interface.

**Live preview:** https://structura-virid.vercel.app/

## Features
- Architecture portfolio, services, and project details
- Interactive 3D project viewer
- English/Arabic language handling
- AI consultant interface and platform dashboard components

## Built with
React, TypeScript, Vite, Three.js, and the Google Gen AI SDK.

## Run locally
```bash
npm ci
npm run dev
```

## Structure
`App.tsx` coordinates the views. `components/` contains the presentation, 3D viewer, dashboard, and AI consultant. `services/geminiService.ts` contains the AI service integration.

## Status
A UI/product concept. AI functionality depends on runtime configuration; model behavior, 3D performance, and production security have not been verified. Review API-key handling before deploying publicly.

Built by [Amro Duveydari](https://github.com/amroduveydari1).
