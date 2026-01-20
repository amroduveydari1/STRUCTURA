
import React, { useState } from 'react';
import LegacyPresentation from './LegacyPresentation';
import { Language, UI_STRINGS } from '../translations';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const [showLegacy, setShowLegacy] = useState(false);
  const t = UI_STRINGS[lang].hero;

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=90&w=2400" 
          alt="Structura Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-grid-wallpaper opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent rtl:bg-gradient-to-l"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-10">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
            <div className="w-12 h-[1px] bg-amber-500"></div>
            <span className="text-amber-500 font-architectural font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
              {t.legacy}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-architectural font-bold text-white mb-10 leading-[1] tracking-tighter uppercase">
            {t.title}
          </h1>
          
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mb-14 leading-relaxed font-light border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-600/30 pl-8 rtl:pl-0 rtl:pr-8 text-left rtl:text-right">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 rtl:space-x-reverse">
            <button 
              onClick={scrollToProjects}
              className="group relative overflow-hidden bg-amber-600 text-white px-12 py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] transition-all text-center"
            >
              <span className="relative z-10">{t.explore}</span>
              <div className="absolute inset-0 bg-amber-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => setShowLegacy(true)}
              className="group relative border border-white/20 hover:border-white/50 text-white px-12 py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] transition-all text-center"
            >
              <span className="relative z-10">{t.dossier}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 rtl:left-auto rtl:right-6 md:rtl:right-12 flex items-center space-x-6 rtl:space-x-reverse text-white/20 text-[8px] uppercase tracking-[0.4em] font-architectural font-bold">
        <span>{t.precision}: 0.001mm</span>
        <div className="w-8 h-[1px] bg-white/10"></div>
        <span>{t.level}: 400</span>
      </div>

      {showLegacy && <LegacyPresentation onClose={() => setShowLegacy(false)} lang={lang} />}
    </section>
  );
};

export default Hero;
