
import React, { useState } from 'react';
import { Language, UI_STRINGS } from '../translations';

interface StaticPageProps {
  lang: Language;
  type: 'services-overview' | 'careers' | 'press' | 'privacy' | 'terms' | 'cookies' | 'enquire' | 'brand';
  onBack: () => void;
}

const StaticPage: React.FC<StaticPageProps> = ({ lang, type, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = UI_STRINGS[lang].staticContent;
  const common = UI_STRINGS[lang].common;

  const getPageContent = () => {
    switch (type) {
      case 'brand': return t.brand;
      case 'services-overview': return t.servicesOverview;
      case 'careers': return t.careers;
      case 'press': return t.press;
      case 'enquire': return { ...t.enquire, isForm: true };
      case 'privacy': return t.privacy;
      case 'terms': return t.terms;
      case 'cookies': return t.cookies;
      default: return { title: 'Info', subtitle: 'Structura', content: '...' };
    }
  };

  const page = getPageContent() as any;

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("TRANSMITTING ENQUIRY TO: hello@amrostudio.co");
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-50 animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center space-x-3 text-zinc-400 hover:text-amber-600 transition-colors uppercase tracking-[0.25em] text-[10px] font-bold font-architectural mb-16 group"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span>{common.return}</span>
        </button>

        <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-5 block font-architectural">{page.subtitle}</span>
        <h1 className="text-4xl md:text-7xl font-architectural font-bold text-zinc-900 tracking-tighter uppercase mb-14 leading-none">
          {page.title}
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-zinc-600 leading-relaxed mb-20 border-l-4 border-amber-500 pl-10 rtl:pl-0 rtl:pr-10">
          {page.content}
        </p>

        {type === 'brand' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-zinc-200 mb-20">
            <div className="space-y-6">
              <h3 className="text-zinc-900 font-architectural font-bold uppercase tracking-[0.2em] text-[10px]">Vector Icon (Black & White)</h3>
              <div className="bg-zinc-900 p-20 flex items-center justify-center rounded-sm">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="60" height="60" fill="white" transform="rotate(45 50 50)"/>
                  <rect x="35" y="35" width="30" height="30" fill="black" transform="rotate(45 50 50)"/>
                </svg>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-zinc-900 font-architectural font-bold uppercase tracking-[0.2em] text-[10px]">Full Brand Mark</h3>
              <div className="bg-white border border-zinc-200 p-12 flex flex-col items-center justify-center rounded-sm space-y-8">
                 <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="20" width="60" height="60" fill="black" transform="rotate(45 50 50)"/>
                      <rect x="35" y="35" width="30" height="30" fill="white" transform="rotate(45 50 50)"/>
                    </svg>
                    <span className="text-2xl font-architectural font-bold tracking-tighter text-black">STRUCTURA</span>
                 </div>
                 <p className="text-[10px] font-architectural text-zinc-400 uppercase tracking-widest text-center">Modern Construction Tech</p>
              </div>
            </div>
          </div>
        )}

        {page.sections && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-zinc-200">
            {page.sections.map((s: any, i: number) => (
              <div key={i} className="space-y-4">
                <h3 className="text-zinc-900 font-architectural font-bold uppercase tracking-[0.2em] text-[10px]">{s.h}</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        )}

        {page.isForm && (
          <div className="bg-white p-10 md:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-zinc-100 mt-12 transition-all">
            {isSubmitted ? (
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-10">
                  <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-architectural font-bold text-zinc-900 uppercase tracking-tighter mb-5">{page.brief}</h3>
                <p className="text-zinc-500 font-light max-w-sm mx-auto leading-relaxed">{page.successMsg}</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-12 text-amber-600 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] hover:text-amber-700 transition-colors"
                >
                  {page.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[9px] font-architectural font-bold uppercase tracking-[0.2em] text-zinc-400">{UI_STRINGS[lang].contact.identity}</label>
                    <input required type="text" className="w-full border-b border-zinc-200 py-4 focus:outline-none focus:border-amber-600 transition-colors bg-transparent placeholder-zinc-300" placeholder={UI_STRINGS[lang].contact.form.name} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] font-architectural font-bold uppercase tracking-[0.2em] text-zinc-400">{UI_STRINGS[lang].contact.communication}</label>
                    <input required type="email" className="w-full border-b border-zinc-200 py-4 focus:outline-none focus:border-amber-600 transition-colors bg-transparent placeholder-zinc-300" placeholder={UI_STRINGS[lang].contact.form.email} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-architectural font-bold uppercase tracking-[0.2em] text-zinc-400">{UI_STRINGS[lang].contact.description}</label>
                  <textarea required rows={5} className="w-full border-b border-zinc-200 py-4 focus:outline-none focus:border-amber-600 transition-colors bg-transparent resize-none placeholder-zinc-300" placeholder={UI_STRINGS[lang].contact.form.vision}></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-zinc-950 text-white py-6 font-architectural font-bold uppercase tracking-[0.35em] text-[11px] hover:bg-amber-600 transition-all disabled:bg-zinc-800 flex items-center justify-center group shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{common.sending}</span>
                  ) : (
                    <>
                      <span>{common.submit}</span>
                      <svg className="w-4 h-4 ml-5 rtl:mr-5 rtl:ml-0 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticPage;
