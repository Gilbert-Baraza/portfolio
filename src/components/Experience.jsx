import React, { useState } from 'react';
import { experienceData } from '../data/experience';
import { FaBriefcase, FaCodeBranch, FaGraduationCap, FaUserAlt, FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const filterCategories = ['All', 'Freelance', 'Open Source', 'Academic', 'Personal Projects'];

const getExperienceIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'freelance':
      return { icon: FaBriefcase, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
    case 'open source':
      return { icon: FaCodeBranch, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' };
    case 'academic':
      return { icon: FaGraduationCap, color: 'text-primary bg-primary/10 border-primary/20 dark:text-accent dark:bg-accent/10 dark:border-accent/20' };
    default:
      return { icon: FaUserAlt, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' };
  }
};

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredExperience = () => {
    if (activeFilter === 'All') return experienceData;
    return experienceData.filter(exp => exp.type.toLowerCase() === activeFilter.toLowerCase());
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            Experience & Contributions
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            My practical coding background, including freelance engagements, open-source work, and academic projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary dark:bg-accent text-white dark:text-secondary-dark shadow-md'
                  : 'bg-secondary-light/10 dark:bg-white/5 border border-secondary-light/20 dark:border-white/10 text-textLight/70 dark:text-textDark/70 hover:bg-secondary-light/20 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperience().map((exp, idx) => {
              const { icon: ExpIcon, color: badgeStyles } = getExperienceIcon(exp.type);
              return (
                <motion.div
                  key={exp.role}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-6 md:p-8 rounded-3xl border border-secondary-light/10 dark:border-white/5 shadow-md flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Badge Icon */}
                  <div className={`p-4 rounded-2xl border text-xl flex-shrink-0 ${badgeStyles}`}>
                    <ExpIcon className="w-6 h-6" />
                  </div>

                  {/* Body Content */}
                  <div className="flex-grow space-y-4">
                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl md:text-2xl font-bold font-outfit text-secondary dark:text-textDark">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono text-mutedLight dark:text-mutedDark">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm font-semibold text-primary dark:text-accent">
                        <span>{exp.company}</span>
                        <span className="text-textLight/20 dark:text-textDark/20">•</span>
                        <span className="text-xs uppercase font-mono tracking-wider bg-secondary-light/10 dark:bg-white/5 px-2 py-0.5 rounded border border-secondary-light/10 dark:border-white/10">{exp.type}</span>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-mutedLight dark:text-mutedDark">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 pt-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-3 text-xs md:text-sm text-textLight/80 dark:text-textDark/80">
                          <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mt-0.5">
                            <FaCheck className="w-2.5 h-2.5" />
                          </span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
