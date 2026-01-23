
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (view: any) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleLangSelect = (l: Language) => {
    onLangChange(l);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'services', label: t.services },
    { id: 'portfolio', label: t.portfolio },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact }
  ];

  const languages: Language[] = ['en', 'ar', 'tr', 'de'];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ease-in-out ${
        isScrolled || isMenuOpen 
          ? 'bg-zinc-950/95 backdrop-blur-xl py-4 md:py-5 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-8 md:py-10 lg:py-12'
      }`}>
        <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1800px]">
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center">
            
            {/* Logo Section */}
            <div 
              className="lg:col-span-3 flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse cursor-pointer group z-[90] justify-self-start"
              onClick={() => handleMobileNav('home')}
            >
              <div className="w-8 h-8 md:w-10 bg-white rounded-sm flex items-center justify-center transform rotate-45 group-hover:bg-amber-500 group-hover:rotate-[135deg] transition-all duration-700">
                <div className="w-4 h-4 md:w-5 bg-zinc-950 transform -rotate-45 group-hover:-rotate-[135deg] transition-all duration-700"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl xl:text-2xl font-architectural font-bold tracking-tighter text-white group-hover:text-amber-500 transition-colors duration-300">
                  STRUCTURA
                </span>
              </div>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex lg:col-span-4 justify-center lg:space-x-6 xl:space-x-8 rtl:space-x-reverse text-[9px] font-architectural font-bold uppercase tracking-[0.4em] text-zinc-500">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => onNavigate(link.id)} 
                  className="hover:text-white transition-all relative group/link py-3"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-amber-500 transition-all duration-500 group-hover/link:w-6 md:group-hover/link:w-8"></span>
                </button>
              ))}
            </div>

            {/* Action Area */}
            <div className="lg:col-span-5 flex items-center space-x-3 md:space-x-4 lg:space-x-6 rtl:space-x-reverse z-[90] justify-self-end">
              
              {/* Language Switcher Desktop */}
              <div className="hidden xl:flex items-center space-x-2 rtl:space-x-reverse border-r border-white/10 pr-6 rtl:pr-0 rtl:pl-6">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => onLangChange(l)}
                    className={`text-[8px] font-architectural font-bold uppercase tracking-widest px-2 py-1 transition-all ${
                      lang === l ? 'text-amber-500 bg-white/5' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => onNavigate('platform')}
                className="hidden sm:flex border border-white/20 hover:border-amber-500 text-white hover:text-amber-500 px-4 md:px-6 py-2.5 md:py-3 rounded-sm text-[8px] md:text-[9px] font-architectural font-bold uppercase tracking-[0.3em] transition-all hover:bg-white/5 whitespace-nowrap"
              >
                {t.launch}
              </button>

              <button 
                onClick={onEnquire}
                className="hidden md:flex bg-white hover:bg-amber-600 text-zinc-950 hover:text-white px-5 md:px-7 py-2.5 md:py-3.5 rounded-sm text-[8px] md:text-[9px] font-architectural font-bold uppercase tracking-[0.3em] transition-all shadow-xl active:scale-95 whitespace-nowrap"
              >
                {t.enquire}
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2 md:p-3 hover:bg-white/5 rounded-full transition-all"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 relative flex flex-col justify-center items-end">
                  <span className={`h-0.5 bg-white transition-all duration-300 block absolute ${isMenuOpen ? 'w-full rotate-45' : 'w-full -translate-y-1.5'}`}></span>
                  <span className={`h-0.5 bg-white transition-all duration-300 block absolute ${isMenuOpen ? 'opacity-0' : 'w-2/3'}`}></span>
                  <span className={`h-0.5 bg-white transition-all duration-300 block absolute ${isMenuOpen ? 'w-full -rotate-45' : 'w-1/3 translate-y-1.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-[75] transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-10 relative overflow-hidden">
           <div className="absolute inset-0 bg-grid-wallpaper opacity-[0.05] pointer-events-none"></div>
           
           <div className="flex flex-col items-center space-y-6 md:space-y-10 relative z-10">
            {navLinks.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleMobileNav(item.id)}
                className="text-4xl md:text-5xl font-architectural font-bold text-white uppercase tracking-tighter hover:text-amber-500 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-xs md:max-w-md flex flex-col space-y-4 mt-8 relative z-10">
            {/* Language Switcher Mobile */}
            <div className="flex justify-center space-x-6 rtl:space-x-reverse mb-6">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangSelect(l)}
                  className={`text-[10px] font-architectural font-bold uppercase tracking-[0.2em] transition-all ${
                    lang === l ? 'text-amber-500 scale-125' : 'text-zinc-600'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <button onClick={() => handleMobileNav('platform')} className="w-full border border-white/10 text-zinc-400 py-5 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">{t.launch}</button>
            <button onClick={() => handleMobileNav('enquire')} className="w-full bg-amber-600 text-white py-5 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">{t.enquire}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
