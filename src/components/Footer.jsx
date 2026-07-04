import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary dark:bg-secondary-dark border-t border-secondary-light/10 dark:border-white/5 py-12 md:py-16 text-textDark/70">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Logo and Tagline */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-2">
          <a href="#home" className="text-2xl font-bold font-outfit text-primary dark:text-accent tracking-wide">
            Gilbert<span className="text-white">.dev</span>
          </a>
          <p className="text-sm text-textDark/50 max-w-xs">
            Building scalable software and solving real-world problems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary dark:hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-primary dark:hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary dark:hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary dark:hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Gilbert-Baraza" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/gilbert-baraza" 
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:gilbertbaraza@example.com" 
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition-all duration-200"
              aria-label="Email Address"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-textDark/40">
            &copy; {currentYear} Gilbert Baraza. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            type="button"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light text-white dark:text-secondary-dark shadow-xl hover:shadow-glow-primary dark:hover:shadow-glow-accent transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
