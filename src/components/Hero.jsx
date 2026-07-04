import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const titles = [
  'Computer Science Student',
  'Backend Developer',
  'AI & Web Developer'
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentTitle) {
      // Hold complete word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden py-12"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full filter blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 dark:bg-accent/5 rounded-full filter blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text Intro */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/10 px-4 py-1.5 rounded-full text-primary dark:text-accent border border-primary/20 dark:border-accent/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary dark:bg-accent"></span>
            </span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider font-mono">Available for attachment</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold font-outfit tracking-tight text-secondary dark:text-textDark leading-none"
            >
              Hi, I am <span className="bg-gradient-to-r from-primary via-[#4F46E5] to-accent bg-clip-text text-transparent drop-shadow-sm">Gilbert Baraza</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-3xl font-semibold text-textLight/80 dark:text-textDark/80 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="typing-cursor border-r-2 border-primary dark:border-accent pr-1 font-mono">{displayText}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-mutedLight dark:text-mutedDark max-w-xl leading-relaxed"
            >
              Building software that solves real-world problems. Computer Science student passionate about software engineering, backend systems, database scalability, networking, and Linux administration.
            </motion.p>
          </div>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 w-full"
          >
            <a
              href="/Resume.pdf"
              download="Gilbert_Baraza_CV.pdf"
              className="flex-1 sm:flex-initial text-center bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-glow-primary transition-all duration-200"
            >
              Download CV
            </a>
            <button
              onClick={() => handleScrollTo('#projects')}
              type="button"
              className="flex-1 sm:flex-initial bg-white/5 border border-secondary-light/20 dark:border-white/10 hover:bg-secondary-light/10 dark:hover:bg-white/10 text-secondary dark:text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              type="button"
              className="flex-1 sm:flex-initial bg-accent/10 border border-accent/20 hover:bg-accent/20 text-primary dark:text-accent font-bold py-3.5 px-8 rounded-xl transition-all duration-200"
            >
              Hire Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-5 pt-4"
          >
            <a
              href="https://github.com/Gilbert-Baraza"
              target="_blank"
              rel="noreferrer"
              className="text-textLight/60 dark:text-textDark/60 hover:text-primary dark:hover:text-accent transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/gilbert-baraza-b0388134a/"
              target="_blank"
              rel="noreferrer"
              className="text-textLight/60 dark:text-textDark/60 hover:text-primary dark:hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:barazagilbert4@gmail.com"
              className="text-textLight/60 dark:text-textDark/60 hover:text-primary dark:hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated SVG Illustration */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full max-w-[340px] md:max-w-[420px]"
          >
            <svg
              viewBox="0 0 500 500"
              className="w-full h-auto drop-shadow-xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Background */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.05)" strokeWidth="1" />
                </pattern>
                <linearGradient id="svgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" rx="24" />

              {/* Glowing background blob */}
              <circle cx="250" cy="250" r="160" fill="url(#svgGrad)" className="opacity-15 dark:opacity-20 animate-pulse" />

              {/* Laptop frame */}
              <rect x="90" y="140" width="320" height="200" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="6" />
              {/* Laptop screen inside */}
              <rect x="98" y="148" width="304" height="184" rx="4" fill="#020617" />
              {/* Laptop stand */}
              <path d="M 210 340 L 290 340 L 310 360 L 190 360 Z" fill="#1E293B" stroke="#334155" strokeWidth="2" />
              <rect x="150" y="360" width="200" height="8" rx="4" fill="#0F172A" />

              {/* Code lines representation on screen */}
              <rect x="120" y="170" width="80" height="8" rx="4" fill="#38BDF8" className="opacity-80" />
              <rect x="120" y="190" width="160" height="8" rx="4" fill="#2563EB" className="opacity-90" />
              <rect x="140" y="210" width="120" height="8" rx="4" fill="#10B981" />
              <rect x="140" y="230" width="200" height="8" rx="4" fill="#F59E0B" />
              <rect x="160" y="250" width="100" height="8" rx="4" fill="#EC4899" />
              <rect x="120" y="270" width="130" height="8" rx="4" fill="#38BDF8" />
              <rect x="120" y="295" width="60" height="8" rx="4" fill="#10B981" />

              {/* Server stack representation next to laptop */}
              <g transform="translate(320, 240)" className="opacity-95">
                <rect x="0" y="0" width="100" height="30" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="15" cy="15" r="4" fill="#10B981" className="animate-ping" />
                <circle cx="15" cy="15" r="4" fill="#10B981" />
                <rect x="30" y="12" width="50" height="6" rx="3" fill="#64748B" />

                <rect x="0" y="38" width="100" height="30" rx="4" fill="#1E293B" stroke="#2563EB" strokeWidth="2" />
                <circle cx="15" cy="53" r="4" fill="#38BDF8" />
                <rect x="30" y="50" width="50" height="6" rx="3" fill="#64748B" />
              </g>

              {/* Floating gear and terminal icons */}
              <g className="animate-bounce" style={{ animationDuration: '4s' }}>
                <circle cx="100" cy="100" r="16" fill="#2563EB" opacity="0.8" />
                <path d="M 94 100 L 106 100 M 100 94 L 100 106" stroke="#FFFFFF" strokeWidth="3" />
              </g>

              <g className="animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}>
                <rect x="380" y="90" width="40" height="30" rx="6" fill="#38BDF8" opacity="0.8" />
                <text x="390" y="110" fill="#020617" fontSize="14" fontWeight="bold">&lt;/&gt;</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => handleScrollTo('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center space-y-1 text-textLight/40 dark:text-textDark/40 hover:text-primary dark:hover:text-accent transition-colors"
      >
        <span className="text-xs uppercase tracking-widest font-semibold font-mono">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
