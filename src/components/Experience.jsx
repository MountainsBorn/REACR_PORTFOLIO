import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    title: 'Front-End Intern',
    company: 'RareMinds (Remote)',
    period: 'Jul–Oct 2023',
    points: [
      'Built responsive, interactive UIs enhancing client project engagement',
      'Collaborated in Agile sprints ensuring performance and cross-browser compatibility'
    ]
  },
  {
    title: 'Open Source Contributor',
    company: 'Various Projects',
    period: 'Jun 2024 – Present',
    points: [
      'Developed reusable React components improving code efficiency',
      'Actively contributed to open-source projects with focus on frontend development'
    ]
  }
];

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="experience-card"
    >
      <div className="card-icon">
        {index === 0 ? <FaBriefcase /> : <FaCode />}
      </div>
      <div className="card-content">
        <h3>{exp.title}</h3>
        <h4>{exp.company}</h4>
        <p className="period">{exp.period}</p>
        <ul>
          {exp.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.3 }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="card-glow"></div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Work Experience</h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
