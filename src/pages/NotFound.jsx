import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTerminal, FaHome, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bgDark text-textDark flex items-center justify-center p-6 select-none font-mono">
      <div className="max-w-xl w-full glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-secondary-dark px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center space-x-2">
            <FaTerminal className="text-accent w-4 h-4" />
            <span className="text-xs text-textDark/60 font-semibold uppercase tracking-wider">gilbert@dev-server: ~</span>
          </div>
          <div className="flex space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 block"></span>
          </div>
        </div>

        {/* Terminal Console Content */}
        <div className="p-6 md:p-8 space-y-6 text-sm md:text-base leading-relaxed">
          <div>
            <span className="text-accent font-bold">gilbert@dev-server</span>
            <span className="text-textDark/60">:</span>
            <span className="text-primary font-bold">~</span>
            <span className="text-textDark/80">$ curl -I https://gilbert.dev/requested-route</span>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-red-400 space-y-2 border-l-2 border-red-500/50 pl-4"
          >
            <p className="font-bold">HTTP/1.1 404 NOT FOUND</p>
            <p className="text-xs opacity-80">Server: GilbertDevServer/1.0.0 (Linux/Ubuntu)</p>
            <p className="text-xs opacity-80">Date: {new Date().toUTCString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-textDark/70"
          >
            <p className="text-yellow-400 font-bold mb-2">⚠️ Error: Target route does not exist.</p>
            <p>The page you are trying to reach has either been refactored, deleted, or never existed in the first place.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate('/')}
              className="flex-1 flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-glow-primary font-sans"
            >
              <FaHome className="w-4 h-4" />
              <span>cd ~ (Go Home)</span>
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 flex items-center justify-center space-x-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 font-sans"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span>Back to Safety</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
