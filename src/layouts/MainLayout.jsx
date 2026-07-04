import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark font-sans selection:bg-primary/30 selection:text-primary dark:selection:bg-accent/30 dark:selection:text-accent overflow-x-hidden">
      {/* Header / Navigation */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
