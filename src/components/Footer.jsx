import { FaLinkedinIn, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { HiPrinter } from 'react-icons/hi';

function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold font-[Outfit]">
              <span className="gradient-text">R</span><span className="text-white">aj</span><span className="text-gray-500 text-sm">.dev</span>
            </a>
            <p className="text-xs text-gray-600 mt-1">Building the future, one line at a time.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300">{link}</a>
            ))}
          </div>
          <div className="flex gap-3">
            {[
              { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/raj-vardhan-4b4121219/' },
              { icon: <FaGithub />, href: 'https://github.com/rajvardhan' },
              { icon: <FaEnvelope />, href: 'mailto:rajvardhan630@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 text-sm">{s.icon}</a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© 2026 Rajvardhan. Made with <FaHeart className="inline text-red-500 mx-0.5" /> using React & Tailwind CSS</p>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:shadow-lg transition-all duration-300 print:hidden cursor-pointer group"
            title="Print Resume"
          >
            <HiPrinter className="text-lg text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span className="font-medium text-sm">Print Resume</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
