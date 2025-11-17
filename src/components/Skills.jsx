import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Java', icon: <FaJava />, level: 85 },
      { name: 'JavaScript', icon: <FaJs />, level: 80 },
      { name: 'HTML', icon: <FaHtml5 />, level: 90 },
      { name: 'CSS', icon: <FaCss3Alt />, level: 85 },
      { name: 'SQL', icon: <FaDatabase />, level: 75 }
    ]
  },
  {
    title: 'Backend & Database',
    icon: <FaDatabase />,
    skills: [
      { name: 'Java Backend', icon: <FaJava />, level: 80 },
      { name: 'Spring Boot', icon: <FaCode />, level: 75 },
      { name: 'JDBC', icon: <FaDatabase />, level: 80 },
      { name: 'MySQL', icon: <FaDatabase />, level: 75 },
      { name: 'REST API', icon: <FaCode />, level: 85 }
    ]
  },
  {
    title: 'Frontend & Libraries',
    icon: <FaReact />,
    skills: [
      { name: 'React', icon: <FaReact />, level: 80 },
      { name: 'GSAP', icon: <FaCode />, level: 70 },
      { name: 'Locomotive Scroll', icon: <FaCode />, level: 70 }
    ]
  },
  {
    title: 'Tools & Others',
    icon: <FaGitAlt />,
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 85 },
      { name: 'GitHub Actions', icon: <FaCode />, level: 70 },
      { name: 'VS Code', icon: <FaCode />, level: 90 },
      { name: 'OOP', icon: <FaCode />, level: 85 }
    ]
  }
];

const SkillBar = ({ skill, index, categoryIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50, rotateX: -90 }}
      animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="skill-item"
      whileHover={{ 
        scale: 1.02, 
        x: 10,
        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="skill-info">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar-container">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, 
              hsl(${240 + categoryIndex * 30}, 70%, 60%), 
              hsl(${260 + categoryIndex * 30}, 70%, 70%))`
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, categoryIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
      className="skill-category"
    >
      <div className="category-header">
        <span className="category-icon">{category.icon}</span>
        <h3>{category.title}</h3>
      </div>
      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <SkillBar 
            key={index} 
            skill={skill} 
            index={index} 
            categoryIndex={categoryIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Technologies I work with and continuously learning
        </p>
      </motion.div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={index} 
            category={category} 
            categoryIndex={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="soft-skills"
      >
        <h3>Soft Skills</h3>
        <div className="soft-skills-list">
          {['Teamwork', 'Problem-Solving', 'Adaptability', 'Communication'].map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="soft-skill-tag"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
