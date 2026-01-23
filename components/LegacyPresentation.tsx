
import React, { useState } from 'react';
import { Language, UI_STRINGS } from '../translations';

interface LegacyPresentationProps {
  onClose: () => void;
  lang: Language;
}

const IMAGES = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
  "https://images.unsplash.com/photo-1449156001931-8283327c5f14?auto=format&fit=crop&q=80&w=1600"
];

const LegacyPresentation: React.FC<LegacyPresentationProps> = ({ onClose, lang }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const t = UI_STRINGS[lang].legacyPresentation;
  const slidesCount = t.slides.length;

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slidesCount) % slidesCount);

  const handleDownloadDossier = () => {
    const timestamp = new Date().getFullYear();
    const dossierContent = `
============================================================
           S T R U C T U R A  |  L E G A C Y  D O S S I E R
============================================================
              ARCHITECTURAL EXCELLENCE SINCE 1998
============================================================

1. THE MANIFESTO
At STRUCTURA, we believe that architecture is the ultimate bridge 
between the ephemeral dream and the concrete reality. Our legacy
is defined by uncompromising precision and the emotional resonance 
of the spaces we engineer.

2. THE PLATFORM (MISSION CONTROL)
Our professional suite (STRUCTURA v2.5.0) enables:
- BIM Level 400 Coordination
- Sub-millimeter clash detection
- Real-time carbon impact auditing
- Decentralized stakeholder sync

3. CORE VALUES
- INTEGRITY: Structural and ethical stability in every joint.
- INNOVATION: Proprietary alloy systems and digital twin nodes.
- EMOTION: Human-centric design that inspires long-term occupancy.

4. GLOBAL IMPACT
- 450+ Major Landmarks Delivered
- 12M Sq. Meters Engineered
- 24 International Offices

Generated for hello@amrostudio.co relay.
(c) ${timestamp} STRUCTURA GLOBAL HOLDINGS.
============================================================
    `;
    const blob = new Blob([dossierContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `STRUCTURA_LEGACY_DOSSIER_${timestamp}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col animate-fade-in-up">
      {/* Background and Slide Content */}
      <div className="relative flex-1 flex overflow-hidden">
        {t.slides.map((slide: any, index: number) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === activeSlide ? 'opacity-100 translate-x-0' : 
              index < activeSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
            }`}
          >
            <img 
              src={IMAGES[index]} 
              alt={slide.title} 
              className="w-full h-full object-cover opacity-30"
            />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-24 text-left rtl:text-right">
                <div className="max-w-4xl">
                  <span className="text-amber-500 font-architectural font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block">
                    {slide.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-7xl font-architectural font-bold text-white mb-10 tracking-tighter leading-none">
                    {slide.title}
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-2xl border-l rtl:border-l-0 rtl:border-r border-zinc-700 pl-8 rtl:pl-0 rtl:pr-8">
                    {slide.description}
                  </p>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 inline-block">
                    <span className="text-amber-600 font-architectural font-bold uppercase text-[9px] tracking-[0.3em] block mb-2">{t.focus}</span>
                    <p className="text-white font-medium italic text-sm md:text-base">"{slide.emphasis}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Brand Watermark */}
        <div className="absolute top-10 left-10 rtl:left-auto rtl:right-10 flex items-center space-x-4 rtl:space-x-reverse">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="60" height="60" fill="white" transform="rotate(45 50 50)"/>
            <rect x="35" y="35" width="30" height="30" fill="black" transform="rotate(45 50 50)"/>
          </svg>
          <span className="text-white font-architectural font-bold tracking-tighter text-lg">STRUCTURA</span>
        </div>

        {/* Exit Button */}
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 rtl:right-auto rtl:left-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all z-50 group"
        >
          <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {/* Navigation Arrows */}
        <div className="absolute bottom-24 right-10 rtl:right-auto rtl:left-10 flex space-x-4 rtl:space-x-reverse">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 border border-white/20 flex items-center justify-center text-white hover:border-amber-500 hover:text-amber-500 transition-all"
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 bg-white text-black flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all"
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Presentation Footer */}
      <div className="h-24 bg-black border-t border-white/5 px-10 flex justify-between items-center">
        <div className="flex space-x-2 rtl:space-x-reverse">
          {t.slides.map((_: any, i: number) => (
            <button 
              key={i} 
              onClick={() => setActiveSlide(i)}
              className={`h-1 transition-all duration-500 ${i === activeSlide ? 'w-12 bg-amber-500' : 'w-6 bg-zinc-800 hover:bg-zinc-600'}`}
            />
          ))}
        </div>
        <button 
          onClick={handleDownloadDossier}
          className="flex items-center space-x-3 rtl:space-x-reverse text-[9px] font-architectural font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors"
        >
          <span>{t.download}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        </button>
      </div>
    </div>
  );
};

export default LegacyPresentation;
