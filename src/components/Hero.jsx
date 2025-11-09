import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaInstagram } from 'react-icons/fa';
import MiniGame from './MiniGame';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="particles"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            VISHAL SINGH
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
            <a href="https://www.linkedin.com/in/vishal-singh-253793246/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MountainsBorn" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://x.com/VishalSing13492" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/___vishal__singh_thakur/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-buttons"
          >
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <div className="floating-card">
              <span className="code-icon">&lt;/&gt;</span>
            </div>
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
