import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    title: 'Full Stack Web Developer',
    company: 'Main Flow Services and Technologies Pvt. Ltd.',
    period: 'Oct 2024 — Dec 2024',
    location: 'Noida',
    color: 'from-cyan-500 to-blue-500',
    dotColor: 'bg-cyan-400',
    points: [
      'Designed and implemented responsive web applications using modern JavaScript frameworks',
      'Participated in code reviews, enhancing code quality and ensuring adherence to best practices',
      'Integrated cloud-based services for enhanced functionality and deployment efficiency',
    ],
  },
  {
    title: 'Web Development Intern',
    company: "Let's Grow More",
    period: 'Aug 2022 — Oct 2022',
    location: 'Remote',
    color: 'from-purple-500 to-pink-500',
    dotColor: 'bg-purple-400',
    points: [
      'Developed web applications using CSS, HTML, and JavaScript to enhance functionality and user experience',
      'Worked with senior developers to write code from scratch and edited existing projects',
      'Participated in weekly tech team meetings to discuss current and future projects',
      'Led a small team to develop a Virtual Cleanliness project',
    ],
  },
];

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative min-h-screen py-24 px-10 flex items-center justify-center">
      <div className="gradient-orb w-[350px] h-[350px] bg-cyan-500 top-[10%] left-[-5%]" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[Outfit] mb-4 section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center w-full mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 mt-[2px] md:mt-0 w-4 h-4 rounded-full border-2 border-[#0a0a0f] bg-[#0a0a0f] z-10 flex-shrink-0">
                <div className={`w-full h-full rounded-full ${exp.dotColor} animate-pulse-glow`} />
              </div>

              {/* Spacer for left/right alignment */}
              <div className="hidden md:block md:w-1/2 flex-shrink-0" />

              {/* Card */}
              <div className={`w-full pl-12 pr-4 md:pl-0 md:pr-0 md:w-1/2 flex-shrink-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card-hover p-6 md:p-8 block w-full relative">
                  {/* Icon Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 mb-4`}>
                    <HiBriefcase className="text-sm text-white/80" />
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                      {i === 0 ? 'Full-time' : 'Internship'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-[Outfit] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 font-medium text-sm mb-3">{exp.company}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <HiCalendar />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiLocationMarker />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.color}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
