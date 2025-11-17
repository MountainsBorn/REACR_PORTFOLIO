import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import MiniGame from './MiniGame';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height, left, top } = currentTarget.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: clientX, y: clientY });
    };

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  return (
    <section className="hero" id="home">
      <div className="particles"></div>
      
      {/* Floating 3D Elements */}
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-element element-${i + 1}`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              rotateX,
              rotateY,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
            y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
          }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
            whileHover={{ scale: 1.05, textShadow: "0 0 30px rgba(251, 191, 36, 0.8)" }}
          >
            {"VISHAL SINGH".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                whileHover={{ scale: 1.2, color: "#fbbf24" }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="typing-container"
          >
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Frontend Engineer',
                2000,
                'Java Backend Developer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="typing-text"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description"
          >
            Motivated engineering student passionate about coding, exploring new technologies, 
            and developing impactful real-world applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-info"
          >
            <div className="info-item">
              <FaEnvelope className="icon" />
              <a href="mailto:vishalthakur14326@gmail.com">vishalthakur14326@gmail.com</a>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <a href="tel:+917006603655">+91 7006603655</a>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Jammu, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-social"
          >
            <motion.a 
              href="https://www.linkedin.com/in/vishal-singh-253793246/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/MountainsBorn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://x.com/VishalSing13492" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/___vishal__singh_thakur/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-buttons"
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Projects</span>
              <motion.div
                className="btn-glow"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-image"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="image-wrapper">
            <motion.div 
              className="floating-card"
              animate={{
                rotateZ: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span 
                className="code-icon"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                &lt;/&gt;
              </motion.span>
              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="orbit-particle"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3
                  }}
                  style={{
                    transformOrigin: `${80 + i * 20}px 0px`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="scroll-indicator"
      >
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </motion.div>

      <MiniGame />
    </section>
  );
};

export default Hero;
