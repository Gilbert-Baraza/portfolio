import React from 'react';
import { certificatesData } from '../data/certificates';
import { FaAward, FaExternalLinkAlt, FaMicrosoft } from 'react-icons/fa';
import { SiGoogle, SiCisco } from 'react-icons/si';
import { motion } from 'framer-motion';

// Helper to render issuer badge icon/styling
const getIssuerStyles = (issuer) => {
  const normalized = issuer.toLowerCase();
  if (normalized.includes('cisco')) {
    return { icon: SiCisco, color: 'text-[#12A9E5] bg-[#12A9E5]/10 border-[#12A9E5]/20' };
  }
  if (normalized.includes('google')) {
    return { icon: SiGoogle, color: 'text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/20' };
  }
  if (normalized.includes('microsoft')) {
    return { icon: FaMicrosoft, color: 'text-[#F25022] bg-[#F25022]/10 border-[#F25022]/20' };
  }
  return { icon: FaAward, color: 'text-primary bg-primary/10 border-primary/20 dark:text-accent dark:bg-accent/10 dark:border-accent/20' };
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-secondary-light/5 dark:bg-bgDark/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-outfit text-secondary dark:text-textDark">
            Certifications
          </h2>
          <div className="w-16 h-1.5 bg-primary dark:bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-mutedLight dark:text-mutedDark">
            Professional badges and credentials verify my networking, cloud, and programming capabilities.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesData.map((cert, idx) => {
            const { icon: IssuerIcon, color: badgeStyles } = getIssuerStyles(cert.issuer);
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between shadow-sm border border-secondary-light/10 dark:border-white/5 h-full"
              >
                <div className="space-y-4">
                  {/* Issuer and Date */}
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-bold ${badgeStyles}`}>
                      <IssuerIcon className="w-3.5 h-3.5" />
                      <span>{cert.issuer.split(' ')[0]}</span>
                    </div>
                    <span className="text-xs font-mono text-mutedLight dark:text-mutedDark">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold font-outfit text-secondary dark:text-textDark leading-snug">
                    {cert.title}
                  </h3>

                  {/* Verified Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-bold font-mono text-mutedLight dark:text-mutedDark bg-secondary-light/5 dark:bg-white/5 border border-secondary-light/10 dark:border-white/5 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom URL Link */}
                <div className="pt-6 border-t border-secondary-light/10 dark:border-white/5 mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-mutedLight dark:text-mutedDark">
                    Credential Link
                  </span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-bold text-primary dark:text-accent hover:underline"
                  >
                    <span>Verify</span>
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
