import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Machine Learning Enthusiast',
  'Problem Solver',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/raj-vardhan-4b4121219/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/rajvardhan', label: 'GitHub' },
    { icon: <FaEnvelope />, href: 'mailto:rajvardhan630@gmail.com', label: 'Email' },
    { icon: <FaPhone />, href: 'tel:+916306387821', label: 'Phone' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="gradient-orb w-[500px] h-[500px] bg-cyan-500 top-[-10%] right-[-10%]" />
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-600 bottom-[-10%] left-[-10%]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-pink-500 top-[40%] left-[50%]" style={{ opacity: 0.08 }} />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-20 h-20 border border-cyan-500/20 rounded-2xl rotate-12"
        animate={{ y: [-10, 10, -10], rotate: [12, -5, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[25%] right-[15%] w-16 h-16 border border-purple-500/20 rounded-full"
        animate={{ y: [10, -15, 10], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-12 h-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg rotate-45"
        animate={{ y: [-15, 5, -15], rotate: [45, 90, 45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] w-24 h-24 border border-pink-500/10 rounded-3xl"
        animate={{ y: [5, -10, 5], rotate: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 font-medium tracking-wide">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[Outfit] mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Rajvardhan</span>
        </motion.h1>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400 mb-8 h-10"
        >
          <span className="typing-cursor">{text}</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Computer Science graduate with a passion for building innovative web applications
          and exploring machine learning. Turning ideas into elegant, functional code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#contact" className="glow-btn glow-btn-primary flex items-center gap-2">
            <FaEnvelope className="text-sm" />
            Contact Me
          </a>
          <a href="#projects" className="glow-btn glow-btn-outline flex items-center gap-2">
            <HiDownload className="text-lg" />
            View Projects
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
