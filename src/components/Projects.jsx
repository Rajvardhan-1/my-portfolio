import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { SiPython, SiReact } from 'react-icons/si';
import { FaBrain, FaMusic } from 'react-icons/fa';

const projects = [
  {
    title: 'Aspect-Based Music Recommendation Using CNN',
    description: 'A facial expression-based music recommendation system that uses Convolutional Neural Networks to analyze facial expressions and suggest music accordingly. Captured facial emotions and trained a CNN model to recognize patterns.',
    tech: ['Python', 'CNN', 'Deep Learning', 'OpenCV', 'TensorFlow'],
    icon: <FaBrain className="text-3xl" />,
    gradient: 'from-cyan-500 to-blue-600',
    period: 'Mar 2022 — Apr 2023',
    highlights: [
      'Utilized CNNs to analyze facial expressions',
      'Trained CNN model to recognize emotional patterns',
      'Real-time emotion-to-music mapping',
    ],
  },
  {
    title: 'Music Recommendation System',
    description: 'A system that recommends songs based on user preferences and song attributes. Built using content-based and collaborative filtering approaches with clustering and classification algorithms.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    icon: <FaMusic className="text-3xl" />,
    gradient: 'from-purple-500 to-pink-600',
    period: 'Mar 2022 — Apr 2022',
    highlights: [
      'Content-based and collaborative filtering',
      'Preprocessed large dataset of songs',
      'Clustering and classification algorithms',
    ],
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="relative py-36 px-6">
      <div className="gradient-orb w-[400px] h-[400px] bg-pink-500 bottom-[0] right-[-5%]" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[Outfit] mb-4 section-heading">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">Things I've built</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="glass-card-hover p-8 h-full relative overflow-hidden">
                {/* Glow Effect on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10 text-white/70 group-hover:text-white transition-colors duration-300`}>
                    {project.icon}
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{project.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-[Outfit] mb-3 group-hover:gradient-text transition-all duration-300 relative z-10">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {project.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredIndex === i ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                      transition={{ delay: j * 0.1 }}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {h}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-500 group-hover:text-gray-300 group-hover:border-white/10 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
