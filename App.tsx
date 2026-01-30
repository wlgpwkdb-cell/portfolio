
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import StorySection from './components/StorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="selection:bg-blue-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
