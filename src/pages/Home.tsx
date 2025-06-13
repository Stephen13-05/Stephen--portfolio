import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Mail, Sparkles, Linkedin } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { Button } from '../components/ui/button';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      
      {/* Floating sparkles */}
      <motion.div
        variants={sparkleVariants}
        animate="animate"
        className="absolute top-32 right-20 text-primary"
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      <motion.div
        variants={sparkleVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-32 left-20 text-primary"
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>
      <motion.div
        variants={sparkleVariants}
        animate="animate"
        style={{ animationDelay: '0.5s' }}
        className="absolute top-1/2 right-32 text-primary"
      >
        <Sparkles className="h-5 w-5" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                Praveen Stephen D
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
             Full Stack Developer & Data Enthusiast
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Web developer and AI enthusiast focused on building SEO-friendly, full-stack solutions with Django, 
            React.js, and WordPress. Passionate about data-driven applications, user experience, and business analytics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/projects">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="group px-8 py-3 text-lg font-medium gradient-bg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    View My Work
                  </motion.span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="https://drive.google.com/file/d/1wH_FPKC3nJtouCDoJlZvrmx4VOxbRlJ0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 text-lg font-medium hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Stephen13-05', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/praveen-stephen-d/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:praveenstephend@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 10,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)" 
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
