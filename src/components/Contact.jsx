import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-info"
        >
          <h3>Contact Information</h3>
          <p className="contact-description">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="info-items">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="info-item-contact"
            >
              <div className="info-icon-wrapper">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:vishalthakur14326@gmail.com">vishalthakur14326@gmail.com</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="info-item-contact"
            >
              <div className="info-icon-wrapper">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+917006603655">+91 7006603655</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="info-item-contact"
            >
              <div className="info-icon-wrapper">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Jammu, India</p>
              </div>
            </motion.div>
          </div>

          <div className="social-links-contact">
            <a href="https://www.linkedin.com/in/vishal-singh-253793246/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/MountainsBorn" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/VishalSing13492" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/___vishal__singh_thakur/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="contact-form-wrapper"
        >
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your@email.com"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-btn"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="footer"
      >
        <p>&copy; 2025 Vishal Singh. All Rights Reserved.</p>
        <p className="footer-credit">Designed & Developed with ❤️ by <span className="highlight">Vishal Singh</span></p>
        <p className="footer-tech">Built with React, Framer Motion & Modern CSS</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
