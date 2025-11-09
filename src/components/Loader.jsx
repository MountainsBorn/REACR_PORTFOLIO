import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        {/* Animated Logo */}
        <motion.div
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="loader-bracket"
            animate={{ 
              color: ['#667eea', '#764ba2', '#f093fb', '#667eea'],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            &lt;
          </motion.span>
          <motion.span
            className="loader-text"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Vishal Singh
          </motion.span>
          <motion.span
            className="loader-bracket"
            animate={{ 
              color: ['#667eea', '#764ba2', '#f093fb', '#667eea'],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            /&gt;
          </motion.span>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="loader-text-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.p
            className="loader-loading-text"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Experience...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="loader-progress-container"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '300px' }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="loader-progress-bar">
            <motion.div
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.span
            className="loader-percentage"
            key={progress}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
          </motion.span>
        </motion.div>

        {/* Floating Particles */}
        <div className="loader-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="loader-particle"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0 
              }}
              animate={{
                x: [0, Math.random() * 400 - 200],
                y: [0, Math.random() * 400 - 200],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              style={{
                left: '50%',
                top: '50%'
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
