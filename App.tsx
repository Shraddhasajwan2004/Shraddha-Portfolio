
import React, { Suspense, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Skills from './src/components/Skills';
import Experience from './src/components/Experience';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import Scene from './src/components/Scene';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative selection:bg-violet-500/20">
      {/* Background 3D Scene */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Suspense fallback={null}>
          <Scene isDarkMode={true} />
        </Suspense>
      </div>

      <div className="relative z-10 bg-grid-white/[0.03]">
        <Navbar isDarkMode={true} toggleTheme={() => {}} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
