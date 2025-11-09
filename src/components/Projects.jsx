import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'OBYS Agency Clone',
    description: 'Award-winning smooth-scroll website with GSAP animations and Locomotive Scroll for immersive user experience',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Locomotive Scroll'],
    liveLink: 'https://mountainsborn.github.io/obys.agency.com/',
    githubLink: 'https://github.com/MountainsBorn',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'Meesho E-Commerce Clone',
    description: 'Full-featured e-commerce platform with cart, user authentication, and responsive design inspired by Meesho',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://ecommerce-last-drab.vercel.app/',
    githubLink: 'https://github.com/MountainsBorn',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'E-Commerce Backend API',
    description: 'Robust RESTful API with authentication, product management, and order processing using Java Spring Boot',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JDBC', 'REST API'],
    liveLink: null,
    githubLink: 'https://github.com/MountainsBorn',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card"
      whileHover={{ y: -10 }}
    >
      <div className="project-gradient" style={{ background: project.gradient }}></div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="tech-stack">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
              className="tech-tag"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="project-links">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub /> <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
