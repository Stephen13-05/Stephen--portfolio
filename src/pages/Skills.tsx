import React from 'react';
import { motion } from 'framer-motion';
import { Code, Settings, Star, ExternalLink, Cpu, Database, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import ParticleBackground from '../components/ParticleBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'C++', level: 80 },
      ],
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Frameworks',
      icon: Settings,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'WordPress', level: 75 },
      ],
    },
    {
      title: 'ML/AI Tools',
      icon: Cpu,
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'scikit-learn', level: 80 },
        { name: 'OpenCV', level: 70 },
        { name: 'Gemini API', level: 60 },
      ],
    },
    {
      title: 'Data Tools',
      icon: Database,
      skills: [
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 85 },
        { name: 'Matplotlib', level: 80 },
        { name: 'Seaborn', level: 75 },
        { name: 'Excel', level: 80 },
      ],
    },
    {
      title: 'Platforms & Tools',
      icon: Star,
      skills: [
        { name: 'Firebase', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'Google Colab', level: 80 },
        { name: 'Postman', level: 75 },
        { name: 'Figma', level: 80 },
      ],
    },
    {
      title: 'Other',
      icon: ExternalLink,
      skills: [
        { name: 'REST APIs', level: 80 },
        { name: 'SEO Basics', level: 70 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Data Visualization', level: 80 },
        { name: 'PDF Generation', level: 70 },
      ],
    },
  ];

  const certifications = [
    {
      name: 'Internet of Things',
      issuer: 'NPTEL',
      date: '',
      url: 'https://drive.google.com/file/d/1N42vQwpYwSK3ZHBhoY_adTiAV8W6udn7/view?usp=sharing',
      badge: '📜',
    },
    {
      name: 'Organizational Behaviour Individual Dynamics',
      issuer: 'NPTEL',
      date: '',
      url: 'https://drive.google.com/file/d/1jiuByECDd-qQ4DYHsNsgZeJNnzJ_BBIC/view?usp=sharing',
      badge: '📜',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingTechIcons = [
    { icon: Cpu, delay: 0, position: { top: '10%', left: '8%' } },
    { icon: Database, delay: 2, position: { top: '20%', right: '5%' } },
    { icon: Globe, delay: 4, position: { bottom: '15%', left: '12%' } },
  ];

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Complex animated background */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"
      />
      
      {/* Floating tech icons */}
      {floatingTechIcons.map(({ icon: Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20 z-10"
          style={position}
          animate={{
            y: [-40, 40, -40],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 10,
            delay: delay,
            repeat: Infinity,
          }}
        >
          <Icon className="h-12 w-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 text-gradient"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills & Certifications
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A comprehensive overview of my technical skills, proficiency levels, 
            and professional certifications accumulated throughout my career.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20
                }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 border border-border/50"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-2 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </motion.div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.5
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="text-sm font-medium"
                          whileHover={{ x: 5, color: "var(--primary)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className="text-xs text-muted-foreground"
                          animate={{
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.2,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-primary to-purple-500 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.3 + skillIndex * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{
                            background: "linear-gradient(90deg, var(--primary), #8B5CF6, #06B6D4)",
                          }}
                        >
                          <motion.div
                            className="absolute top-0 left-0 w-full h-full bg-white/30 rounded-full"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: categoryIndex * 0.5 + skillIndex * 0.2,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Certifications
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 border border-border/50 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-2xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {cert.badge}
                    </motion.span>
                    <div>
                      <motion.h3 
                        className="font-semibold text-lg group-hover:text-primary transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {cert.name}
                      </motion.h3>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <motion.span 
                    className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {cert.date}
                  </motion.span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Certificate
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <motion.h2 
            className="text-3xl font-bold mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Programming Languages
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'Bash'].map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  rotate: [0, -5, 5, 0],
                }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-300 cursor-default"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
