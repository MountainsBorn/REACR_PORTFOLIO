import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, z: 50 }}
    >
      <motion.div 
        className="project-gradient" 
        style={{ 
          background: project.gradient,
          transform: "translateZ(30px)"
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%'
        }}
        transition={{ duration: 2 }}
      />
      <motion.div 
        className="project-content"
        style={{ transform: "translateZ(50px)" }}
      >
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

        <motion.div 
          className="project-links"
          style={{ transform: "translateZ(60px)" }}
        >
          {project.liveLink && (
            <motion.a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> <span>Live Demo</span>
            </motion.a>
          )}
          <motion.a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> <span>Source Code</span>
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Glow effect on hover */}
      <motion.div
        className="card-glow-effect"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
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
