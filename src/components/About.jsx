import React from 'react';
import { FaCode, FaBookOpen, FaGithub, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '5+', icon: FaCode, color: 'text-primary' },
  { label: 'Technologies Learned', value: '10+', icon: FaBookOpen, color: 'text-accent' },
  { label: 'GitHub Repositories', value: '15+', icon: FaGithub, color: 'text-emerald-500' },
  { label: 'Years Coding', value: '2+', icon: FaCalendarAlt, color: 'text-amber-500' },
];

const timelineData = [
  {
    year: '2024',
    title: 'Started Programming Journey',
    description: 'Began programming with C and C++, started learning web development with HTML and CSS fundamentals'
  },
  {
    year: '2024',
    title: 'Learning JavaScript',
    description: 'Explored client-side programming, asynchronous operations, event-driven architecture, and DOM manipulation.'
  },
  {
    year: '2025',
    title: 'Learning Python',
    description: 'Adopted Python as the main programming language. Built automation tools and scripts.'
  },
  {
    year: '2026',
    title: 'Adopt Python Django Framework',
    description: 'Transitioned to web systems backend architectures. Designed databases, CRUD servers, and APIs with Django.'
  },
  {
    year: '2026',
    title: 'Exploring Artificial Intelligence and Machine Learning',
    description: 'Exploring OpenAI APIs, experimenting with machine learning tools and libraries'
  },
  {
    year: '2026 - Present',
    title: 'Computer Science Student & Attachment Seeking',
    description: 'Deepening core concepts in Software Engineering, Networks at University while seeking an industrial attachment.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-light/5 dark:bg-bgDark/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            About Me
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            My background, programming milestones, and key metrics.
          </p>
        </div>

        {/* Top: Bio and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Bio text and Profile Image */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-4 flex justify-center"
            >
              <div className="relative group w-48 h-48 rounded-2xl overflow-hidden shadow-lg border border-secondary-light/10 dark:border-white/5 bg-secondary-light/5">
                <img
                  src="/profile.png"
                  alt="Gilbert Baraza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 dark:bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>

            {/* Bio info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-8 space-y-4 text-base md:text-lg leading-relaxed text-mutedLight dark:text-mutedDark"
            >
              <h3 className="text-2xl font-bold font-outfit text-secondary dark:text-textDark">
                Passionate Developer & Problem Solver
              </h3>
              <p>
                A Computer Science student passionate about software development, web technologies, and Artificial Intelligence.
              </p>
              <p>
                My tech stack focuses on backend development with Python, Django and FastAPI, client structures with React, and databases like PostgreSQL, MySQL and MongoDB.
              </p>
              <p className="font-semibold text-primary dark:text-accent">
                Currently seeking an industrial attachment where I can apply my technical skills while learning from experienced professionals.              </p>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="glass-card p-6 rounded-2xl flex flex-col justify-between items-center text-center shadow-md transition-all duration-200 border border-secondary-light/10 dark:border-white/5"
                >
                  <div className={`p-4 rounded-full bg-secondary-light/10 dark:bg-white/5 ${stat.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold font-outfit text-secondary dark:text-textDark mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-mutedLight dark:text-mutedDark">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom: Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-outfit text-center text-secondary dark:text-textDark mb-12">
            My Journey Timeline
          </h3>

          <div className="relative border-l-2 border-secondary-light/20 dark:border-white/10 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline node circle */}
                <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center bg-bgLight dark:bg-bgDark border-2 border-primary dark:border-accent rounded-full w-5 h-5 sm:w-6 sm:h-6">
                  <span className="bg-primary dark:bg-accent rounded-full w-2 h-2 sm:w-2.5 sm:h-2.5"></span>
                </span>

                {/* Content Box */}
                <div className="glass-card p-6 rounded-2xl border border-secondary-light/10 dark:border-white/5 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <span className="text-xs font-bold font-mono text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-md w-fit">
                      {item.year}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-outfit text-secondary dark:text-textDark mt-1.5 sm:mt-0">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm md:text-base text-mutedLight dark:text-mutedDark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
