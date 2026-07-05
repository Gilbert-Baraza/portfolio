import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaFolder, FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GITHUB_USERNAME = 'Gilbert-Baraza';

// Fallback Mock Data in case of rate limits or network issues
const fallbackProfile = {
  avatar_url: '/profile.png', // Gilbert's actual profile pic
  name: 'Gilbert Baraza',
  bio: 'Computer Science Student | Backend Developer | AI & Web Development',
  public_repos: 25,
  followers: 12,
  following: 15,
  html_url: `https://github.com/${GITHUB_USERNAME}`
};

const fallbackRepos = [
  {
    name: 'Kibu-market',
    description: 'A dynamic e-commerce web platform for university students to buy and sell goods and services within the campus.',
    language: 'Python',
    stargazers_count: 8,
    forks_count: 3,
    html_url: `https://github.com/${GITHUB_USERNAME}/Kibu-market`,
    languageColor: '#3576AB'
  },
  {
    name: 'House-Of-Bore',
    description: 'A local rental management dashboard designed for landlords and property management systems.',
    language: 'Python',
    stargazers_count: 5,
    forks_count: 2,
    html_url: `https://github.com/${GITHUB_USERNAME}/House-Of-Bore`,
    languageColor: '#3576AB'
  },
  {
    name: 'Hostel-Connect',
    description: 'A hostel search, comparison, and booking platform mapping student housing facilities.',
    language: 'JavaScript',
    stargazers_count: 4,
    forks_count: 1,
    html_url: `https://github.com/${GITHUB_USERNAME}/Hostel-Connect`,
    languageColor: '#f1e05a'
  }
];

const languageColors = {
  python: '#3576AB',
  javascript: '#f1e05a',
  html: '#e34f26',
  css: '#563d7c',
  typescript: '#3178c6',
  vue: '#41b883',
  shell: '#89e051'
};

const GitHub = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Fetch profile
        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();

        // Fetch specific featured repos concurrently
        const featuredRepos = [
          "portfolio",
          "Kibu-market",
          "House-Of-Bore",
          "Hostel-Connect",
          "mental-health-risk-predictor"
        ];

        const reposData = await Promise.all(
          featuredRepos.map(async (name) => {
            const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`);
            if (!res.ok) throw new Error(`Failed to fetch repo ${name}`);
            const repo = await res.json();
            return {
              ...repo,
              languageColor: languageColors[repo.language?.toLowerCase()] || '#858585'
            };
          })
        );

        setProfile(profileData);
        setRepos(reposData);
        setError(false);
      } catch (err) {
        console.warn('GitHub API Fetch failed. Using fallback portfolio details. Error:', err.message);
        setProfile(fallbackProfile);
        setRepos(fallbackRepos);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-mono text-mutedLight dark:text-mutedDark">Syncing with GitHub API...</p>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 bg-secondary-light/5 dark:bg-bgDark/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            GitHub Activities
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            Live synchronization with my GitHub profile, pinned repositories, and statistics.
          </p>
        </div>

        {/* Profile Card Summary */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glass-card p-6 rounded-3xl border border-secondary-light/10 dark:border-white/5 shadow-lg flex flex-col justify-between text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <img
                src={profile?.avatar_url}
                alt={profile?.name || GITHUB_USERNAME}
                className="w-24 h-24 rounded-full border-4 border-primary/20 dark:border-accent/20 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold font-outfit text-secondary dark:text-textDark">
                  {profile?.name || GITHUB_USERNAME}
                </h3>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-mono text-primary dark:text-accent hover:underline flex items-center justify-center lg:justify-start space-x-1.5 mt-1"
                >
                  <FaGithub />
                  <span>@{GITHUB_USERNAME}</span>
                </a>
              </div>
              <p className="text-xs md:text-sm text-mutedLight dark:text-mutedDark leading-relaxed">
                {profile?.bio || fallbackProfile.bio}
              </p>
            </div>

            {/* Profile Statistics */}
            <div className="grid grid-cols-3 gap-2 border-t border-secondary-light/10 dark:border-white/5 pt-6 mt-6">
              <div className="flex flex-col items-center">
                <FaFolder className="text-primary dark:text-accent w-4 h-4 mb-1" />
                <span className="text-base font-bold text-secondary dark:text-textDark">{profile?.public_repos}</span>
                <span className="text-[10px] uppercase font-bold text-mutedLight dark:text-mutedDark">Repos</span>
              </div>
              <div className="flex flex-col items-center border-x border-secondary-light/10 dark:border-white/5">
                <FaUsers className="text-emerald-500 w-4 h-4 mb-1" />
                <span className="text-base font-bold text-secondary dark:text-textDark">{profile?.followers}</span>
                <span className="text-[10px] uppercase font-bold text-mutedLight dark:text-mutedDark">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <FaUsers className="text-amber-500 w-4 h-4 mb-1" />
                <span className="text-base font-bold text-secondary dark:text-textDark">{profile?.following}</span>
                <span className="text-[10px] uppercase font-bold text-mutedLight dark:text-mutedDark">Following</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Repositories list */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl border border-secondary-light/10 dark:border-white/5 shadow-sm flex flex-col justify-between h-full"
              >
                <div className="space-y-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base sm:text-lg font-bold font-outfit text-secondary dark:text-textDark hover:text-primary dark:hover:text-accent transition-colors flex items-center space-x-2"
                  >
                    <span className="truncate">{repo.name}</span>
                  </a>
                  <p className="text-xs sm:text-sm text-mutedLight dark:text-mutedDark line-clamp-3 leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                {/* Star / Languages Details */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary-light/10 dark:border-white/5 mt-4 text-xs font-semibold text-mutedLight dark:text-mutedDark">
                  {repo.language && (
                    <span className="flex items-center space-x-1.5">
                      <FaCircle style={{ color: repo.languageColor }} className="w-2.5 h-2.5" />
                      <span>{repo.language}</span>
                    </span>
                  )}
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <FaStar className="text-amber-500 w-3 h-3" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaCodeBranch className="w-3 h-3" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GitHub;
