import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './FloatingUI.css';

const FloatingUI = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = ['home', 'experience', 'projects', 'skills', 'education', 'contact'];
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX }}
      />

      {/* Navigation Dots */}
      <div className="nav-dots">
        {sections.map((section) => (
          <motion.button
            key={section}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: sections.indexOf(section) * 0.1 }}
          >
            <span className="nav-dot-tooltip">{section}</span>
          </motion.button>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ambient Background Shapes */}
      <div className="ambient-shapes">
        <motion.div
          className="ambient-shape shape-1"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="ambient-shape shape-2"
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="ambient-shape shape-3"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
};

export default FloatingUI;
