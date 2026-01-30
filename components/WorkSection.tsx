
// Added React import to resolve namespace errors for React.FC
import React, { useState, useEffect } from 'react';
import { WORK_CATEGORIES } from '../constants';
import { ProjectItem } from '../types';

const ContributionBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
  <div className="flex flex-col gap-1.5 mb-6">
    <div className="flex justify-between items-end mb-1">
      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{label}</span>
      <span className="text-[11px] font-bold text-zinc-900">{value}%</span>
    </div>
    <div className="h-[2px] bg-zinc-100 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="work" className="py-32 bg-zinc-50 relative">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="mb-24 flex flex-col items-start">
          <span className="text-blue-600 font-black tracking-widest text-xs mb-4 uppercase">Selected Portfolios</span>
          <h3 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-zinc-900 uppercase leading-none">WORK</h3>
          <div className="h-2 w-32 bg-blue-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {WORK_CATEGORIES.map((category) => (
            <div key={category.id} className="group flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-10 bg-zinc-200 shadow-sm">
                <img 
                  src={category.imageUrl} 
                  alt={category.title}
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="px-2">
                <div className="mb-8 border-l-4 border-blue-600 pl-6">
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">{category.title}</span>
                  <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 leading-tight uppercase break-keep">
                    {category.subtitle}
                  </h4>
                </div>

                <div className="space-y-8">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="group/item">
                      <button 
                        onClick={() => setSelectedProject(item)}
                        className="text-left text-xl font-bold mb-2 group-hover/item:text-blue-600 transition-all tracking-tight flex items-center gap-2 group"
                      >
                        <span className="border-b-2 border-transparent group-hover:border-blue-600">{item.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                      <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-normal max-w-md break-keep">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[32px] overflow-y-auto shadow-2xl transform animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-20 px-8 md:px-14 py-8 flex justify-between items-start border-b border-zinc-50">
              <div className="pt-2">
                <span className="text-blue-600 font-black tracking-widest text-[11px] uppercase block mb-3">Portfolio Detail</span>
                <h4 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-none">
                  {selectedProject.title}
                </h4>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-zinc-300 hover:text-zinc-900 transition-colors p-2 hover:bg-zinc-50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-8 md:px-14 pb-14 space-y-12 mt-8">
              {/* Content Grid */}
              <div className={`grid grid-cols-1 ${selectedProject.contribution || (selectedProject.links && selectedProject.links.length > 0) ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-16`}>
                
                {/* Left: Main Story */}
                <div className={`${selectedProject.contribution || (selectedProject.links && selectedProject.links.length > 0) ? 'lg:col-span-7' : 'max-w-4xl mx-auto'} space-y-16`}>
                  {/* Image Area */}
                  <div className="rounded-3xl overflow-hidden aspect-video bg-zinc-100 shadow-inner group relative">
                    <img 
                      src={selectedProject.modalImageUrl || "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200"} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-center grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="space-y-14 pr-4">
                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-5 bg-blue-600"></div>
                        <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900">기획 의도</h5>
                      </div>
                      <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-normal break-keep">
                        {selectedProject.planningIntent}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-5 bg-zinc-900"></div>
                        <h5 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900">프로그램 설명</h5>
                      </div>
                      <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-normal break-keep">
                        {selectedProject.fullDescription}
                      </p>
                    </section>
                  </div>
                </div>

                {/* Right: Expertise & Links (Sidebar) */}
                {(selectedProject.contribution || (selectedProject.links && selectedProject.links.length > 0)) && (
                  <div className="lg:col-span-5 pt-4">
                    <div className="space-y-16">
                      {/* Contribution Section */}
                      {selectedProject.contribution && (
                        <section>
                          <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-10">Role Contribution</h5>
                          <div className="space-y-4">
                            <ContributionBar label="기획 / Strategy" value={selectedProject.contribution.planning} color="bg-blue-600" />
                            {selectedProject.contribution.production > 0 && (
                              <ContributionBar label="제작 / Production" value={selectedProject.contribution.production} color="bg-zinc-900" />
                            )}
                            {selectedProject.contribution.filming > 0 && (
                              <ContributionBar label="촬영 / Filming" value={selectedProject.contribution.filming} color="bg-zinc-400" />
                            )}
                            {selectedProject.contribution.editing > 0 && (
                              <ContributionBar label="편집 / Editing" value={selectedProject.contribution.editing} color="bg-zinc-600" />
                            )}
                          </div>
                        </section>
                      )}

                      {/* Links Section */}
                      {selectedProject.links && selectedProject.links.length > 0 && (
                        <section className={`${selectedProject.contribution ? 'pt-10 border-t border-zinc-100' : ''}`}>
                          <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-8">Project Links</h5>
                          <div className="space-y-4">
                            {selectedProject.links.map((link, i) => (
                              <a 
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between w-full p-5 bg-zinc-50 border border-transparent rounded-2xl hover:border-blue-600 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                              >
                                <span className="text-sm font-bold text-zinc-700 group-hover:text-blue-600">{link.label}</span>
                                <div className="p-2 rounded-full bg-white group-hover:bg-blue-50 transition-colors">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-300 group-hover:text-blue-600 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </a>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Close Button Area */}
              <div className="pt-16 mt-12 border-t border-zinc-100 flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-14 py-5 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl active:scale-95"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
