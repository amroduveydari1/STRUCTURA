
import React, { useState, useEffect } from 'react';
import { Language, UI_STRINGS } from '../translations';

interface HeaderProps {
  onNavigate: (view: any) => void;
  onEnquire: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onEnquire, lang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = UI_STRINGS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (view: any) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleLangSwitch = (newLang: Language) => {
    onLangChange(newLang);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'services', label: t.services },
    { id: 'portfolio', label: t.portfolio },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out ${
        isScrolled || isMenuOpen 
          ? 'bg-zinc-950/98 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-10 md:py-12'
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-[1800px] relative">
          
          {/* Logo Section - Left Anchor */}
          <div 
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer group z-[70] min-w-[180px]"
            onClick={() => handleMobileNav('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-sm flex items-center justify-center transform rotate-45 group-hover:bg-amber-500 group-hover:rotate-[135deg] transition-all duration-700 shadow-xl">
              <div className="w-4 h-4 md:w-5 md:h-5 bg-zinc-950 transform -rotate-45 group-hover:-rotate-[135deg] transition-all duration-700"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-architectural font-bold tracking-tighter text-white group-hover:text-amber-500 transition-colors duration-300">
                STRUCTURA
              </span>
              <span className="hidden md:block text-[6px] font-architectural text-zinc-600 uppercase tracking-[0.6em] -mt-1 group-hover:text-zinc-400 transition-colors">
                Engineering Legacy
              </span>
            </div>
          </div>
          
          {/* Desktop Nav Links - Absolute Centering for Symmetry */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-16 rtl:space-x-reverse text-[9px] font-architectural font-bold uppercase tracking-[0.5em] text-zinc-500">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => onNavigate(link.id)} 
                className="hover:text-white transition-all relative group/link py-3 whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-amber-500 transition-all duration-500 group-hover/link:w-8"></span>
              </button>
            ))}
          </div>

          {/* Action Area - Right Anchor */}
          <div className="flex items-center space-x-6 md:space-x-8 rtl:space-x-reverse z-[70] min-w-[180px] justify-end">
            {/* Desktop Language Switcher */}
            <div className="hidden xl:flex items-center space-x-5 rtl:space-x-reverse border-r border-white/5 pr-8 rtl:pr-0 rtl:pl-8 rtl:border-r-0 rtl:border-l">
               {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
                 <button 
                   key={l} 
                   onClick={() => onLangChange(l)} 
                   className={`text-[9px] font-bold uppercase tracking-widest transition-all hover:scale-110 ${lang === l ? 'text-amber-500' : 'text-zinc-600 hover:text-zinc-300'}`}
                 >
                   {l}
                 </button>
               ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-5 rtl:space-x-reverse">
              <button 
                onClick={() => onNavigate('platform')}
                className="hidden xl:flex items-center space-x-3 rtl:space-x-reverse text-zinc-400 hover:text-white transition-all group/platform"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-[9px] font-architectural font-bold uppercase tracking-widest">{t.launch}</span>
              </button>
              
              <button 
                onClick={onEnquire}
                className="bg-white hover:bg-amber-600 text-zinc-950 hover:text-white px-8 py-3.5 rounded-sm text-[9px] font-architectural font-bold uppercase tracking-[0.3em] transition-all shadow-2xl active:scale-95"
              >
                {t.enquire}
              </button>
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-3 focus:outline-none hover:bg-white/5 rounded-full transition-all"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'w-full rotate-45 translate-y-[9px]' : 'w-full'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'w-full opacity-0 translate-x-4' : 'w-2/3'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'w-full -rotate-45 -translate-y-[9px]' : 'w-1/3'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-[65] transition-all duration-700 ease-in-out lg:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
      }`}>
        <div className="absolute inset-0 bg-grid-wallpaper opacity-[0.05] pointer-events-none"></div>
        <div className="flex flex-col items-center justify-center h-full space-y-12 p-10 relative z-10">
          <div className="flex space-x-8 rtl:space-x-reverse mb-12 border-b border-white/5 pb-8 w-full max-w-xs justify-center">
            {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
               <button 
                key={l} 
                onClick={() => handleLangSwitch(l)} 
                className={`text-sm font-bold uppercase tracking-widest transition-all ${lang === l ? 'text-amber-500 scale-125' : 'text-zinc-700'}`}
               >
                 {l.toUpperCase()}
               </button>
            ))}
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleMobileNav(item.id)}
                className="text-4xl md:text-6xl font-architectural font-bold text-white uppercase tracking-tighter hover:text-amber-500 transition-all duration-300 text-center"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-sm flex flex-col space-y-4 mt-12">
            <button onClick={() => handleMobileNav('platform')} className="w-full border border-white/10 text-zinc-400 py-6 font-architectural font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white/5 hover:text-white transition-all">{t.launch}</button>
            <button onClick={() => handleMobileNav('enquire')} className="w-full bg-amber-600 text-white py-6 font-architectural font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-amber-700 transition-all active:scale-95">{t.enquire}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
