import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 6306387821',
    href: 'tel:+916306387821',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'rajvardhan630@gmail.com',
    href: 'mailto:rajvardhan630@gmail.com',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
    value: 'Raj Vardhan',
    href: 'https://www.linkedin.com/in/raj-vardhan-4b4121219/',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Noida, India',
    href: null,
    color: 'from-purple-400 to-pink-500',
  },
];

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto with form data
    const mailtoLink = `mailto:rajvardhan630@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.open(mailtoLink);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500 bottom-[-10%] left-[-5%]" />
      <div className="gradient-orb w-[300px] h-[300px] bg-purple-600 top-[10%] right-[-5%]" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-[Outfit] mb-4 section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg mt-6">Let's work together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-[Outfit] text-white mb-2">
              Let's talk about your project
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting projects.
              Feel free to reach out through any of the following channels.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass-card hover:bg-white/[0.04] transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass-card">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm text-gray-300 font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-3">Follow me</p>
              <div className="flex gap-3">
                {[
                  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/raj-vardhan-4b4121219/' },
                  { icon: <FaGithub />, href: 'https://github.com/rajvardhan' },
                  { icon: <FaEnvelope />, href: 'mailto:rajvardhan630@gmail.com' },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  id="contact-name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  className="contact-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  id="contact-email"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  className="contact-input min-h-[140px] resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  id="contact-message"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full glow-btn glow-btn-primary flex items-center justify-center gap-2 !rounded-xl ${
                  isSubmitted ? '!bg-green-500' : ''
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>✓ Message Prepared</>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
