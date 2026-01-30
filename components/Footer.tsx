
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-blue-600 font-black tracking-widest text-xs mb-8 uppercase">Let's Connect</span>
          <h2 className="text-5xl md:text-[90px] font-black tracking-tighter leading-none mb-16 text-zinc-900">
            MAKE THE<br />DIFFERENCE.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:contact@example.com" 
              className="px-12 py-6 bg-zinc-900 text-white rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-2xl active:scale-95"
            >
              Contact Jihye
            </a>
            <a 
              href="#" 
              className="px-12 py-6 border-2 border-zinc-200 text-zinc-900 rounded-2xl font-bold text-xl hover:bg-zinc-50 transition-all active:scale-95"
            >
              Resume
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-zinc-100">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-black tracking-tighter uppercase text-zinc-900">LEE JI-HYE.</span>
            <p className="text-zinc-400 text-xs font-medium tracking-wider">
              © 2024 Lee Ji-hye. Designed for high impact.
            </p>
          </div>
          
          <div className="flex gap-12 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-600 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
