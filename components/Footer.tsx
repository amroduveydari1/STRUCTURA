
import React from 'react';
import { Language, UI_STRINGS } from '../translations';

interface FooterProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = UI_STRINGS[lang].footer;
  const common = UI_STRINGS[lang].common;

  return (
    <footer className="bg-zinc-950 text-zinc-500 py-20 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div 
              className="flex items-center space-x-2 rtl:space-x-reverse mb-6 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center transform rotate-45 group-hover:bg-amber-500 transition-colors">
                <div className="w-3 h-3 bg-zinc-950 transform -rotate-45"></div>
              </div>
              <span className="text-xl font-architectural font-bold text-white tracking-tighter group-hover:text-amber-500 transition-colors">STRUCTURA</span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              {t.vision}
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6 font-architectural">{t.directory}</h5>
            <ul className="space-y-4 text-[10px] uppercase font-bold tracking-widest">
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-amber-500 transition-colors">{t.links.projects}</button></li>
              <li><button onClick={() => onNavigate('services-overview')} className="hover:text-amber-500 transition-colors text-left rtl:text-right">{t.links.overview}</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-amber-500 transition-colors">{t.links.vision}</button></li>
              <li><button onClick={() => onNavigate('brand')} className="hover:text-amber-500 transition-colors">{t.links.brand}</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6 font-architectural">{t.company}</h5>
            <ul className="space-y-4 text-[10px] uppercase font-bold tracking-widest">
              <li><button onClick={() => onNavigate('about')} className="hover:text-amber-500 transition-colors">{t.links.team}</button></li>
              <li><button onClick={() => onNavigate('careers')} className="hover:text-amber-500 transition-colors text-left rtl:text-right">{t.links.careers}</button></li>
              <li><button onClick={() => onNavigate('press')} className="hover:text-amber-500 transition-colors text-left rtl:text-right">{t.links.press}</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-amber-500 transition-colors text-left rtl:text-right">{UI_STRINGS[lang].nav.contact}</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6 font-architectural">{t.newsletter}</h5>
            <p className="text-sm font-light mb-6">{t.newsletterDesc}</p>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <input 
                type="email" 
                placeholder={t.emailPlaceholder} 
                className="bg-zinc-900 border border-zinc-800 py-2 px-4 text-sm w-full focus:outline-none focus:border-amber-600 transition-colors text-white" 
              />
              <button className="bg-white text-zinc-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all">{t.join}</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest font-bold">
          <p className="text-zinc-600">Built by Amro Studio</p>
          <div className="flex space-x-8 rtl:space-x-reverse">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">{t.links.privacy}</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">{t.links.terms}</button>
            <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">{t.links.cookies}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
