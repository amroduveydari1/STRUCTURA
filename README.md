<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# STRUCTURA | Engineering Excellence

> Modern architecture and engineering portfolio platform powered by React, Three.js, and AI.

[![GitHub Repository](https://img.shields.io/badge/GitHub-STRUCTURA-blue?logo=github)](https://github.com/amroduveydari1/STRUCTURA)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

## 🏗️ About STRUCTURA

STRUCTURA is a cutting-edge web platform showcasing architectural and engineering projects with interactive 3D visualizations, AI-powered consultations, and immersive AR experiences. Built with modern web technologies to deliver exceptional user experiences.

## 👨‍💻 Repository Owner

**Maintained by:** [Amrod Uveydari](https://github.com/amroduveydari1)

**Repository:** https://github.com/amroduveydari1/STRUCTURA

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with Tailwind CSS
- 🎯 **3D Project Viewer** - Interactive Three.js visualizations
- 🤖 **AI Consultant** - Powered by Google Gemini AI
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🌐 **Multi-language Support** - Available in multiple languages
- 🚀 **AR Integration** - Augmented reality project viewing
- 📊 **Platform Dashboard** - Comprehensive project management

## 🛠️ Tech Stack

- **Framework:** React 19+ with TypeScript
- **3D Graphics:** Three.js
- **AI Integration:** Google Gemini AI
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Deployment:** Vercel

## 🚀 Run Locally

**Prerequisites:** Node.js (v16 or higher)


1. **Clone the repository:**
   ```bash
   git clone https://github.com/amroduveydari1/STRUCTURA.git
   cd STRUCTURA
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## 🌐 Deploy to Vercel

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

**Quick Deploy:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

Don't forget to add `GEMINI_API_KEY` in your Vercel project settings!

## 📁 Project Structure

```
STRUCTURA-main/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Project3DViewer.tsx
│   ├── AIConsultant.tsx
│   └── ...
├── services/           # API services
│   └── geminiService.ts
├── dist/              # Production build
├── App.tsx            # Main application component
├── index.tsx          # Entry point
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
└── vercel.json        # Vercel deployment config
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**Amrod Uveydari**
- GitHub: [@amroduveydari1](https://github.com/amroduveydari1)
- Repository: [STRUCTURA](https://github.com/amroduveydari1/STRUCTURA)

## 🙏 Acknowledgments

- Google Gemini AI for intelligent consultations
- Three.js for 3D rendering capabilities
- React team for the amazing framework
- Vercel for hosting and deployment

---

<div align="center">
Made with ❤️ by Amrod Uveydari
</div>
