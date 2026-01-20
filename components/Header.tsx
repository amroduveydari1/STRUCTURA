
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
      <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-700 ease-in-out ${
        isScrolled || isMenuOpen 
          ? 'bg-zinc-950/98 backdrop-blur-xl py-3 md:py-4 lg:py-5 border-b border-white/10 shadow-2xl' 
          : 'bg-transparent py-8 md:py-10 lg:py-12'
      }`}>
        <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-[1800px]">
          {/* Use Grid for perfect 3-column layout on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-12 items-center">
            
            {/* Logo Section - Column 1-3 */}
            <div 
              className="lg:col-span-3 flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse cursor-pointer group z-[90] justify-self-start"
              onClick={() => handleMobileNav('home')}
            >
              <div className="w-8 h-8 md:w-10 lg:w-11 bg-white rounded-sm flex items-center justify-center transform rotate-45 group-hover:bg-amber-500 group-hover:rotate-[135deg] transition-all duration-700 shadow-lg">
                <div className="w-4 h-4 md:w-5 lg:w-6 bg-zinc-950 transform -rotate-45 group-hover:-rotate-[135deg] transition-all duration-700"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl xl:text-2xl font-architectural font-bold tracking-tighter text-white group-hover:text-amber-500 transition-colors duration-300">
                  STRUCTURA
                </span>
                <span className="hidden xl:block text-[6px] font-architectural text-zinc-600 uppercase tracking-[0.6em] -mt-1 group-hover:text-zinc-400 transition-colors">
                  Engineering Legacy
                </span>
              </div>
            </div>
            
            {/* Desktop Nav Links - Column 4-8 */}
            <div className="hidden lg:flex lg:col-span-5 justify-center lg:space-x-6 xl:space-x-10 rtl:space-x-reverse text-[9px] font-architectural font-bold uppercase tracking-[0.4em] text-zinc-500">
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

            {/* Action Area - Column 9-12 */}
            <div className="lg:col-span-4 flex items-center space-x-4 md:space-x-4 lg:space-x-4 xl:space-x-6 rtl:space-x-reverse z-[90] justify-self-end">
              {/* Language Switcher - Responsive Visibility */}
              <div className="hidden xl:flex items-center space-x-4 rtl:space-x-reverse">
                 {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
                   <button 
                     key={l} 
                     onClick={() => onLangChange(l)} 
                     className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-all hover:scale-110 ${lang === l ? 'text-amber-500' : 'text-zinc-600 hover:text-zinc-300'}`}
                   >
                     {l}
                   </button>
                 ))}
              </div>

              {/* Launch Platform Button - NEW: Visible on Tablet and Desktop */}
              <button 
                onClick={() => onNavigate('platform')}
                className="hidden md:flex border border-white/20 hover:border-white/40 text-white px-5 xl:px-7 py-3 md:py-3.5 rounded-sm text-[9px] font-architectural font-bold uppercase tracking-[0.3em] transition-all hover:bg-white/5 whitespace-nowrap"
              >
                {t.launch}
              </button>

              {/* Enquire CTA Button */}
              <button 
                onClick={onEnquire}
                className="hidden md:flex bg-white hover:bg-amber-600 text-zinc-950 hover:text-white px-6 xl:px-8 py-3 md:py-3.5 rounded-sm text-[9px] font-architectural font-bold uppercase tracking-[0.3em] transition-all shadow-xl active:scale-95 whitespace-nowrap"
              >
                {t.enquire}
              </button>
              
              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2.5 md:p-3 focus:outline-none hover:bg-white/5 rounded-full transition-all group"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="w-6 h-6 relative flex flex-col justify-center items-end">
                  <span className={`h-0.5 bg-white transition-all duration-500 block absolute ${
                    isMenuOpen 
                      ? 'w-full rotate-45 translate-y-0' 
                      : 'w-full -translate-y-2'
                  }`}></span>
                  
                  <span className={`h-0.5 bg-white transition-all duration-500 block absolute ${
                    isMenuOpen 
                      ? 'w-0 opacity-0' 
                      : 'w-2/3 opacity-100 translate-y-0'
                  }`}></span>
                  
                  <span className={`h-0.5 bg-white transition-all duration-500 block absolute ${
                    isMenuOpen 
                      ? 'w-full -rotate-45 translate-y-0' 
                      : 'w-1/3 translate-y-2'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-[75] transition-all duration-700 ease-in-out lg:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
      }`}>
        <div className="absolute inset-0 bg-grid-wallpaper opacity-[0.05] pointer-events-none"></div>
        <div className="flex flex-col items-center justify-center h-full space-y-10 md:space-y-12 p-10 relative z-10">
          <div className="flex space-x-6 md:space-x-10 rtl:space-x-reverse mb-8 border-b border-white/5 pb-8 w-full max-w-sm justify-center">
            {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
               <button 
                key={l} 
                onClick={() => handleLangSwitch(l)} 
                className={`text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest transition-all ${lang === l ? 'text-amber-500 scale-125' : 'text-zinc-700'}`}
               >
                 {l.toUpperCase()}
               </button>
            ))}
          </div>
          
          <div className="flex flex-col items-center space-y-6 md:space-y-10">
            {navLinks.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleMobileNav(item.id)}
                className="text-3xl md:text-6xl lg:text-7xl font-architectural font-bold text-white uppercase tracking-tighter hover:text-amber-500 transition-all duration-300 text-center"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-sm md:max-w-md flex flex-col space-y-4 md:space-y-5 mt-10 md:mt-16">
            <button 
              onClick={() => handleMobileNav('platform')} 
              className="w-full border border-white/10 text-zinc-400 py-5 md:py-6 font-architectural font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] hover:bg-white/5 hover:text-white transition-all"
            >
              {t.launch}
            </button>
            <button 
              onClick={() => handleMobileNav('enquire')} 
              className="w-full bg-amber-600 text-white py-5 md:py-6 font-architectural font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] shadow-2xl hover:bg-amber-700 transition-all active:scale-95"
            >
              {t.enquire}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
