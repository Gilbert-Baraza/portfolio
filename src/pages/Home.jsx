import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';
import GitHub from '../components/GitHub';
import Contact from '../components/Contact';
import MainLayout from '../layouts/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress for bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulating loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      

      {/* Main Portfolio Sections */}
      {!loading && (
        <MainLayout>
          {/* Scroll progress indicator bar */}
          <div className="fixed top-0 left-0 w-full h-[3.5px] z-[60] bg-secondary-light/10 dark:bg-white/5">
            <div 
              style={{ width: `${scrollProgress}%` }} 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-75"
            />
          </div>

          {/* Child Sections */}
          <div className="max-w-7xl mx-auto px-6 space-y-4">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certificates />
            <Experience />
            <GitHub />
            <Contact />
          </div>
        </MainLayout>
      )}
    </>
  );
};

export default Home;
