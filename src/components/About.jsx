import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiJavascript, SiPython, SiHtml5, SiGit,
  SiFlask, SiCplusplus
} from 'react-icons/si';
import { FaJava, FaDatabase, FaCode, FaCss3Alt } from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C/C++', icon: <SiCplusplus /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Data Structures', icon: <FaDatabase /> },
  { name: 'OOP', icon: <FaCode /> },
];

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative min-h-screen py-24 px-10 flex items-center justify-center">
      {/* Background */}
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-600 top-[0] right-[-5%]" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[Outfit] mb-4 section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">Get to know me better</p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold font-[Outfit] text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I am a Computer Science graduate with a strong foundation in programming
                and extensive experience in developing innovative solutions through
                machine learning and web development.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My technical expertise is complemented by collaboration in team-based projects,
                where I have taken leadership roles and contributed significantly to project outcomes.
                I am passionate about creating applications that enhance user experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Having worked as a <span className="text-cyan-400 font-medium">Full Stack Web Developer</span> and
                a <span className="text-purple-400 font-medium">Web Development Intern</span>, I bring hands-on
                experience in building responsive, modern web applications.
              </p>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Location', value: 'Noida, India' },
                  { label: 'Degree', value: 'B.Tech CS' },
                  { label: 'Email', value: 'rajvardhan630@gmail.com' },
                  { label: 'Experience', value: '2+ Years' },
                ].map((item, i) => (
                  <div key={i} className="py-3">
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-sm text-gray-300 font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold font-[Outfit] text-white mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default group"
                  >
                    <span className="text-xl text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-6">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">Also experienced with</p>
                <div className="flex flex-wrap gap-2">
                  {['Canva', 'Streamlit', 'GitHub', 'Core Java'].map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;