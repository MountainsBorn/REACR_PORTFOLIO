import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaTrophy, FaCertificate, FaMedal } from 'react-icons/fa';
import './Education.css';

const education = [
  {
    degree: 'B.E. in Computer Science',
    institution: 'PES College of Engineering, Mandya',
    period: '2021 – 2025',
    grade: 'CGPA: 7.21/10',
    icon: <FaGraduationCap />
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'Ranbir Hr. Sec. School, Jammu & Kashmir',
    period: '2019 – 2021',
    grade: '96%',
    icon: <FaGraduationCap />
  }
];

const achievements = [
  {
    title: 'Runner-up, 24-hour National Hackathon (PESCE)',
    icon: <FaTrophy />,
    color: '#fbbf24'
  },
  {
    title: 'Full scholarship for 96% in 12th grade',
    icon: <FaMedal />,
    color: '#60a5fa'
  },
  {
    title: 'Published front-end solution in Webkirti competition',
    icon: <FaCertificate />,
    color: '#a78bfa'
  }
];

const certifications = [
  { name: 'Java & OOP', provider: 'Udemy' },
  { name: 'Web Development Bootcamp 2024', provider: 'Full Stack Academy' }
];

const EducationCard = ({ edu, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="education-card"
    >
      <div className="edu-icon">{edu.icon}</div>
      <div className="edu-content">
        <h3>{edu.degree}</h3>
        <h4>{edu.institution}</h4>
        <p className="period">{edu.period}</p>
        <span className="grade">{edu.grade}</span>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="achievement-card"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="achievement-icon" style={{ color: achievement.color }}>
        {achievement.icon}
      </div>
      <p>{achievement.title}</p>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="section-header"
          style={{ marginTop: '5rem' }}
        >
          <h2 className="section-title">Achievements</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="certifications-container"
        >
          <h3>Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="cert-item"
              >
                <FaCertificate className="cert-icon" />
                <div>
                  <h4>{cert.name}</h4>
                  <p>{cert.provider}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
