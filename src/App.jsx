import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      setShowContent(true);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {showContent && (
        <div className="app">
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
