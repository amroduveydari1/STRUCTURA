
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ARSection from './components/ARSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import ProjectDetail from './components/ProjectDetail';
import StaticPage from './components/StaticPage';
import PlatformDashboard from './components/PlatformDashboard';
import { PROJECTS } from './constants';
import { Language, UI_STRINGS } from './translations';

type View = 'home' | 'project' | 'services' | 'portfolio' | 'about' | 'contact' | 'services-overview' | 'careers' | 'press' | 'privacy' | 'terms' | 'cookies' | 'enquire' | 'brand' | 'platform';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProjectId]);

  const handleNavigate = (view: View, projectId?: string) => {
    setCurrentView(view);
    setSelectedProjectId(projectId || null);
    
    if (view === 'home' && !projectId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isRTL = lang === 'ar';
  const t = UI_STRINGS[lang];

  const renderContent = () => {
    if (currentView === 'platform') {
      return (
        <div className="fixed inset-0 z-[100] animate-fade-in-up">
          <PlatformDashboard onBack={() => handleNavigate('home')} lang={lang} />
        </div>
      );
    }

    if (currentView === 'project' && selectedProjectId) {
      const project = PROJECTS.find(p => p.id === selectedProjectId);
      return project ? (
        <ProjectDetail 
          lang={lang}
          project={project} 
          onBack={() => handleNavigate('portfolio')} 
          onNavigateToProject={(id) => handleNavigate('project', id)}
        />
      ) : (
        <div className="pt-48 text-center text-zinc-500 uppercase tracking-widest font-architectural text-xs">{t.pageHeaders.notFound}</div>
      );
    }

    switch (currentView) {
      case 'services':
        return (
          <div className="pt-24 md:pt-32 lg:pt-40 transition-all duration-500">
            <div className="bg-zinc-950 py-24 text-center border-b border-white/5">
              <h1 className="text-4xl md:text-6xl font-architectural font-bold text-white tracking-tighter uppercase">{t.nav.services}</h1>
              <p className="text-zinc-500 mt-4 uppercase tracking-[0.4em] text-[10px] font-architectural">{t.pageHeaders.services}</p>
            </div>
            <Services lang={lang} />
          </div>
        );
      case 'portfolio':
        return (
          <div className="pt-24 md:pt-32 lg:pt-40 transition-all duration-500">
            <div className="bg-zinc-950 py-24 text-center border-b border-white/5">
              <h1 className="text-4xl md:text-6xl font-architectural font-bold text-white tracking-tighter uppercase">{t.nav.portfolio}</h1>
              <p className="text-zinc-500 mt-4 uppercase tracking-[0.4em] text-[10px] font-architectural">{t.pageHeaders.portfolio}</p>
            </div>
            <Portfolio lang={lang} isFullView={true} onProjectSelect={(id) => handleNavigate('project', id)} />
          </div>
        );
      case 'about':
        return (
          <div className="pt-24 md:pt-32 lg:pt-40 transition-all duration-500">
            <div className="bg-zinc-950 py-24 text-center border-b border-white/5">
              <h1 className="text-4xl md:text-6xl font-architectural font-bold text-white tracking-tighter uppercase">{t.nav.about}</h1>
              <p className="text-zinc-500 mt-4 uppercase tracking-[0.4em] text-[10px] font-architectural">{t.pageHeaders.about}</p>
            </div>
            <About lang={lang} />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-24 md:pt-32 lg:pt-40 transition-all duration-500">
            <div className="bg-zinc-950 py-24 text-center border-b border-white/5">
              <h1 className="text-4xl md:text-6xl font-architectural font-bold text-white tracking-tighter uppercase">{t.nav.contact}</h1>
              <p className="text-zinc-500 mt-4 uppercase tracking-[0.4em] text-[10px] font-architectural">{t.pageHeaders.contact}</p>
            </div>
            <Contact lang={lang} onNavigate={handleNavigate} />
          </div>
        );
    }

    if (currentView !== 'home' && currentView !== 'project') {
      return <StaticPage lang={lang} type={currentView as any} onBack={() => handleNavigate('home')} />;
    }

    return (
      <div className="animate-fade-in-up">
        <Hero lang={lang} />

        <section className="py-20 md:py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { val: '450+', label: t.stats.landmarks },
                { val: '12M', label: t.stats.built },
                { val: '24', label: t.stats.offices },
                { val: '0', label: t.stats.safety }
              ].map((stat, i) => (
                <div key={i} className="animate-fade-in-up">
                  <span className="block text-3xl md:text-5xl lg:text-6xl font-architectural font-bold text-amber-500 mb-2 tracking-tighter">{stat.val}</span>
                  <span className="text-zinc-500 uppercase tracking-[0.3em] text-[8px] md:text-[9px] font-bold font-architectural">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services lang={lang} />

        <Portfolio 
          lang={lang}
          isFullView={false} 
          onProjectSelect={(id) => handleNavigate('project', id)} 
          onViewAll={() => handleNavigate('portfolio')}
        />

        <ARSection lang={lang} />
        <About lang={lang} />

        <section className="py-24 md:py-32 bg-zinc-950 text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block font-architectural">{t.cta.commissioning}</span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-architectural font-bold tracking-tighter uppercase mb-16 max-w-5xl mx-auto leading-tight">
              {t.cta.readyTitle} <span className="text-zinc-700">{t.cta.legacy}</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 rtl:space-x-reverse">
               <button onClick={() => handleNavigate('enquire')} className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-12 md:px-16 py-5 md:py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] transition-all">{t.cta.brief}</button>
               <button onClick={() => handleNavigate('contact')} className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-12 md:px-16 py-5 md:py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] transition-all">{t.cta.hq}</button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return (
    <main className={`min-h-screen selection:bg-amber-500 selection:text-white bg-zinc-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {currentView !== 'platform' && (
        <Header 
          lang={lang}
          onLangChange={setLang}
          onNavigate={(view) => handleNavigate(view)} 
          onEnquire={() => handleNavigate('enquire')}
        />
      )}
      
      {renderContent()}

      {currentView !== 'platform' && (
        <>
          <Footer lang={lang} onNavigate={handleNavigate} />
          <AIConsultant />
        </>
      )}
    </main>
  );
};

export default App;
