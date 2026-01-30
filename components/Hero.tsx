
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Image - Optimized for the 'work-first' feel */}
      <div className="absolute inset-0 z-0 opacity-[0.12]">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
          alt="Office Brainstorming" 
          className="w-full h-full object-cover filter contrast-125"
        />
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 w-full py-20">
        <div className="max-w-5xl">
          {/* Top Labels */}
          <div className="flex flex-col gap-1 mb-8">
            <span className="text-blue-600 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs">
              CONTENT SOLUTIONS SPECIALIST
            </span>
            <span className="text-zinc-900 font-extrabold tracking-tighter text-lg md:text-xl uppercase">
              LEE JI-HYE
            </span>
          </div>

          {/* Headline with requested line breaks and tighter spacing */}
          <h1 className="text-[11vw] md:text-[85px] font-black leading-[1.05] mb-12 kerning-tight tracking-[-0.06em] text-zinc-900 break-keep">
            마음을 움직이는<br />
            기획으로<br />
            <span className="text-zinc-400">결과의 차이를 만듭니다.</span>
          </h1>

          {/* Sub-tagline with refined weights */}
          <p className="text-lg md:text-2xl text-zinc-600 leading-relaxed font-normal mb-14 tracking-tight break-keep">
            10년 차 콘텐츠 해결사 <span className="text-zinc-900 font-bold border-b-[3px] border-blue-600 pb-0.5 inline-block">이지혜</span>입니다.
          </p>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 opacity-20 mr-8">
        <div className="w-px h-32 bg-zinc-900"></div>
        <span className="text-[10px] uppercase tracking-[0.5em] font-black [writing-mode:vertical-lr] text-zinc-900">STRATEGY & PRODUCTION</span>
      </div>
    </section>
  );
};

export default Hero;
