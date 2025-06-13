
import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16"
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default Layout;
