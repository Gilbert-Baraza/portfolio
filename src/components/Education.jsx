import React from 'react';
import { educationData } from '../data/education';
import { FaGraduationCap, FaBookReader } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            Education
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            My academic qualifications, current major, and specialized coursework.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card p-6 md:p-10 rounded-3xl border border-secondary-light/10 dark:border-white/5 shadow-lg flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Icon / Brand badge */}
              <div className="p-4 rounded-2xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent border border-primary/20 dark:border-accent/20 flex-shrink-0">
                <FaGraduationCap className="w-10 h-10" />
              </div>

              {/* Information Content */}
              <div className="flex-grow space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold font-outfit text-secondary dark:text-textDark">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-bold font-mono text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3 py-1.5 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-textLight/80 dark:text-textDark/80 flex items-center space-x-2">
                    <span>{edu.institution}</span>
                    <span className="text-textLight/40 dark:text-textDark/40">|</span>
                    <span className="text-emerald-500 font-bold">{edu.gpa}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-mutedLight dark:text-mutedDark leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework Section */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-textLight dark:text-textDark font-mono">
                    <FaBookReader className="text-primary dark:text-accent" />
                    <span>Key Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs md:text-sm font-medium text-textLight/70 dark:text-textDark/70 bg-secondary-light/5 dark:bg-white/5 border border-secondary-light/10 dark:border-white/5 px-3.5 py-1.5 rounded-xl hover:border-primary/50 dark:hover:border-accent/50 hover:bg-primary/5 dark:hover:bg-accent/5 transition-all duration-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
