import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Graphic Era University',
    period: '2019 — 2023',
    location: 'Dehradun',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🎓',
    description: 'Completed Bachelor of Technology in Computer Science with a strong foundation in programming, data structures, algorithms, and machine learning.',
  },
  {
    degree: '12th — U.P. State Board',
    institution: 'S.G.M. Inter College',
    period: '2018',
    location: 'Kanpur',
    gradient: 'from-purple-500 to-pink-500',
    icon: '📚',
    description: 'Completed senior secondary education with focus on Science and Mathematics.',
  },
  {
    degree: '10th — U.P. State Board',
    institution: 'S.G.M. Inter College',
    period: '2016',
    location: 'Kanpur',
    gradient: 'from-pink-500 to-orange-500',
    icon: '📖',
    description: 'Completed secondary education with distinction.',
  },
];

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative min-h-screen py-24 px-10 flex items-center justify-center">
      <div className="gradient-orb w-[350px] h-[350px] bg-blue-500 top-[20%] right-[-5%]" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[Outfit] mb-4 section-heading">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">Academic background</p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <div className="glass-card-hover p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white font-[Outfit] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex md:flex-col gap-4 md:gap-2 text-right flex-shrink-0">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <HiCalendar className="text-cyan-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <HiLocationMarker className="text-purple-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-[Outfit] text-center mb-8">
            <span className="gradient-text-cyan">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Java Certificate', issuer: 'SOLOLEARN', color: 'border-cyan-500/30' },
              { name: 'JavaScript & React Certificate', issuer: 'MICROSOFT LEARN & DEVTOWN', color: 'border-purple-500/30' },
              { name: 'C++ Certificate', issuer: 'SOLOLEARN', color: 'border-pink-500/30' },
            ].map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`glass-card p-5 text-center border ${cert.color} hover:bg-white/[0.04] transition-all duration-300`}
              >
                <HiAcademicCap className="text-2xl text-cyan-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-white mb-1">{cert.name}</p>
                <p className="text-xs text-gray-500">Issued by {cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
