
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-black tracking-tighter uppercase">
          Lee Ji-hye<span className="text-blue-600">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-12 text-sm font-semibold uppercase tracking-widest">
          <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
          <a href="#story" className="hover:text-blue-600 transition-colors">Story</a>
        </nav>
        <div className="md:hidden text-xs font-bold uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded">
          Menu
        </div>
      </div>
    </header>
  );
};

export default Header;
