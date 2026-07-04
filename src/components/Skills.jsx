import React, { useState } from 'react';
import { skillCategories, skillsData } from '../data/skills';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeTab] || [];
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            My Skills
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            Technologies, frameworks, databases, and professional competencies I work with.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab('all')}
            type="button"
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
              activeTab === 'all'
                ? 'bg-primary dark:bg-accent text-white dark:text-secondary-dark shadow-md'
                : 'bg-secondary-light/10 dark:bg-white/5 border border-secondary-light/20 dark:border-white/10 text-textLight/70 dark:text-textDark/70 hover:bg-secondary-light/20 dark:hover:bg-white/10'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-primary dark:bg-accent text-white dark:text-secondary-dark shadow-md'
                  : 'bg-secondary-light/10 dark:bg-white/5 border border-secondary-light/20 dark:border-white/10 text-textLight/70 dark:text-textDark/70 hover:bg-secondary-light/20 dark:hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredSkills().map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between shadow-sm border border-secondary-light/10 dark:border-white/5"
                >
                  {/* Skill header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-secondary-light/5 dark:bg-white/5 ${skill.color} text-2xl`}>
                      <Icon />
                    </div>
                    <span className="text-base font-bold font-outfit text-secondary dark:text-textDark">
                      {skill.name}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-mutedLight dark:text-mutedDark">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary-light/10 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
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

export default Skills;
