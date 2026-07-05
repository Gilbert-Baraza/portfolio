import React, { useState, useEffect } from 'react';
import { projectTags, projectsConfig } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB_USERNAME = 'Gilbert-Baraza';

// Inject PAT if present — raises rate limit from 60 to 5,000 req/hour
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const getGitHubHeaders = () => ({
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` })
});

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const CACHE_KEY = 'portfolio_projects_cache_v2';

    const fetchLiveProjectData = async () => {
      // Return cached data for this browser session to avoid rate limits
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        setProjects(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const syncedProjects = await Promise.all(
          projectsConfig.map(async (config) => {
            try {
              const repoResponse = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${config.repoName}`,
                { headers: getGitHubHeaders() }
              );

              if (!repoResponse.ok) {
                throw new Error(`GitHub API ${repoResponse.status} for ${config.repoName}`);
              }

              const repo = await repoResponse.json();

              // Fetch languages
              const languagesResponse = await fetch(repo.languages_url);
              const languages = await languagesResponse.json();

              return {
                id: config.id,
                title: repo.name
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, c => c.toUpperCase()),
                description: repo.description,
                tech:
                  repo.topics?.length > 0
                    ? repo.topics.map(topic =>
                        topic
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, c => c.toUpperCase())
                      )
                    : Object.keys(languages),
                tags: config.tags,
                image: config.image,
                github: repo.html_url,
                live: config.live
              };
            } catch (repoErr) {
              // Per-project fallback: use static config data instead of crashing
              console.warn(`Using fallback for ${config.repoName}:`, repoErr.message);
              return {
                id: config.id,
                title: config.fallback.title,
                description: config.fallback.description,
                tech: config.fallback.tech,
                tags: config.tags,
                image: config.image,
                github: config.fallback.github,
                live: config.live
              };
            }
          })
        );

        sessionStorage.setItem(CACHE_KEY, JSON.stringify(syncedProjects));
        setProjects(syncedProjects);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveProjectData();
  }, []);

  const filteredProjects = () => {
    if (activeFilter === 'All') return projects;
    return projects.filter(proj => proj.tags.includes(activeFilter));
  };
  if (loading) {
    return (
      <section id="projects" className="py-20">
        <div className="text-center">
          Loading projects...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20">
        <div className="text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }
  return (
    <section id="projects" className="py-20 bg-secondary-light/5 dark:bg-bgDark/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            My Projects
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            A showcase of my recent full-stack applications, academic projects, and AI integrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {projectTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              type="button"
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${activeFilter === tag
                ? 'bg-primary dark:bg-accent text-white dark:text-secondary-dark shadow-md'
                : 'bg-secondary-light/10 dark:bg-white/5 border border-secondary-light/20 dark:border-white/10 text-textLight/70 dark:text-textDark/70 hover:bg-secondary-light/20 dark:hover:bg-white/10'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects().map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl overflow-hidden shadow-lg border border-secondary-light/10 dark:border-white/5 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-secondary-dark border-b border-secondary-light/10 dark:border-white/5 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-secondary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white text-secondary-dark rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                      title="View Source on GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white text-secondary-dark rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 flex flex-col flex-grow space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold font-outfit text-secondary dark:text-textDark">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-mutedLight dark:text-mutedDark leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold font-mono text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Actions Link */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-secondary-light/10 dark:border-white/5 lg:hidden">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-secondary-light/10 dark:bg-white/5 border border-secondary-light/20 dark:border-white/10 py-2.5 px-4 rounded-xl text-sm font-bold text-textLight dark:text-textDark hover:bg-secondary-light/20 dark:hover:bg-white/10 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light py-2.5 px-4 rounded-xl text-sm font-bold text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
