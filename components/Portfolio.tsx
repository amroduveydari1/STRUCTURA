
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import Project3DViewer from './Project3DViewer';
import { Language, UI_STRINGS } from '../translations';

interface PortfolioProps {
  lang: Language;
  onProjectSelect: (id: string) => void;
  isFullView?: boolean;
  onViewAll?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ lang, onProjectSelect, isFullView = true, onViewAll }) => {
  const t = UI_STRINGS[lang].portfolio;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected3D, setSelected3D] = useState<'tower' | 'villa' | null>(null);

  const categories = [
    { id: 'All', label: t.filters.all },
    { id: 'Residential', label: t.filters.res },
    { id: 'Commercial', label: t.filters.com },
    { id: 'Infrastructure', label: t.filters.infra },
    { id: 'Renovation', label: t.filters.ren }
  ];

  const filteredProjects = useMemo(() => {
    let list = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category.en === activeFilter);
    return !isFullView ? list.slice(0, 4) : list;
  }, [activeFilter, isFullView]);

  const renderTitle = () => {
    const words = t.title.split(' ');
    return (
      <>
        {words[0]} <br />
        <span className="text-zinc-600">{words.slice(1).join(' ')}</span>
      </>
    );
  };

  return (
    <section id="projects" className="pt-24 md:pt-32 pb-32 md:pb-48 bg-zinc-950 relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-grid-wallpaper opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-[1600px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 space-y-12 md:space-y-0">
          <div className="animate-fade-in-up text-left rtl:text-right w-full md:w-auto">
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block font-architectural">{t.subtitle}</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-architectural font-bold text-white tracking-tighter uppercase leading-[0.9] md:leading-tight">
              {renderTitle()}
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-10 border-b border-white/10 pb-4 w-full md:w-auto justify-start md:justify-end overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-[9px] font-architectural font-bold uppercase tracking-[0.25em] transition-all relative pb-4 whitespace-nowrap ${
                  activeFilter === cat.id 
                    ? 'text-amber-500' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat.label}
                {activeFilter === cat.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 animate-fade-in-up"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 transition-all duration-500">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onProjectSelect(project.id)}
              className="group bg-zinc-900/40 border border-zinc-800/50 hover:border-amber-500/40 transition-all duration-700 overflow-hidden cursor-pointer animate-fade-in-up flex flex-col shadow-2xl"
            >
              <div className="relative h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] overflow-hidden bg-zinc-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                
                {project.has3D && (
                  <div className="absolute top-8 right-8 rtl:right-auto rtl:left-8 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected3D(project.id === '1' ? 'tower' : 'villa');
                      }}
                      className="bg-amber-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-sm text-[9px] font-architectural font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-all flex items-center space-x-3 rtl:space-x-reverse shadow-2xl"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
                      <span>{t.simulate}</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <div className="p-8 md:p-10 lg:p-12 border-b border-white/5 flex justify-between items-center group/title transition-all">
                  <div className="space-y-2 md:space-y-3 text-left rtl:text-right">
                    <span className="text-[10px] text-amber-500 font-bold tracking-[0.35em] uppercase block font-architectural">
                      {project.category[lang]}
                    </span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-architectural font-bold text-white tracking-tighter uppercase leading-none group-hover:text-amber-500 transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-zinc-800/50 border border-zinc-700/50 text-white group-hover:bg-amber-600 group-hover:border-amber-500 transition-all duration-500 shrink-0 ml-4 md:ml-6 rtl:ml-0 rtl:mr-4 md:rtl:mr-6">
                    <svg className="w-4 h-4 md:w-5 md:h-5 rtl:rotate-180 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>

                <div className="px-8 md:px-10 lg:px-12 py-6 md:py-8 bg-white/[0.01] flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 justify-between items-center">
                  <div className="flex items-center space-x-8 md:space-x-12 rtl:space-x-reverse">
                    <div className="flex flex-col space-y-1 md:space-y-2 text-left rtl:text-right">
                      <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.2em] font-architectural">{t.ref}</span>
                      <span className="text-[11px] md:text-[12px] text-zinc-400 font-mono tracking-widest font-bold">ST-{project.year}-00{project.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 border border-emerald-500/20 bg-emerald-500/5 px-3 md:px-4 py-2 rounded-sm backdrop-blur-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-[9px] text-emerald-500 uppercase tracking-widest font-bold font-architectural">{t.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!isFullView && (
          <div className="mt-24 md:mt-32 text-center animate-fade-in-up">
            <button 
              onClick={onViewAll}
              className="group relative inline-flex items-center bg-white text-zinc-950 px-12 md:px-16 py-6 md:py-7 text-[10px] font-architectural font-bold uppercase tracking-[0.4em] hover:bg-amber-600 hover:text-white transition-all overflow-hidden shadow-2xl"
            >
              <span className="relative z-10">{t.archives}</span>
              <span className="relative z-10 ml-6 rtl:mr-6 rtl:ml-0 transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform duration-300 font-serif text-lg">→</span>
            </button>
          </div>
        )}
      </div>

      {selected3D && (
        <Project3DViewer 
          type={selected3D} 
          onClose={() => setSelected3D(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;
