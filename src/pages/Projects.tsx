import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Zap, Layers, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import ParticleBackground from '../components/ParticleBackground';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AgroVision - AI-Powered Farming Assistant',
      description: [
        'Built an offline AI pest & disease predictor using MobileNetV2 with 99% accuracy.',
        'Integrated weather and NASA soil data for tailored crop treatment and smart farming.',
        'Developed a multilingual web app with farmer portal, chatbot, and schemes dashboard.'
      ],
      technologies: ['Python', 'Jupyter Notebook', 'CNN', 'Tensorflow', 'MobilenetV2', 'Django Framework'],
      liveUrl: 'https://drive.google.com/file/d/1BamkLEGN6YQJE4YhQpAkb8OGcJYWwCBS/view',
      githubUrl: 'https://github.com/Stephen13-05/AgroVision',
      featured: true,
      color: 'from-green-400 via-lime-400 to-green-600',
      icon: '🌱',
    },
    {
      id: 2,
      title: 'Ecosense - A Carbon Foot Print Detection and Recommendations',
      description: [
        'Developed Ecosense360 with an intuitive UI and a real-time carbon footprint calculator using Django Framework.',
        'Implemented data storage, visualization (graphs/pie charts), and personalized recommendations via Gemini API.',
        'Enabled PDF report downloads and built secure user flows with multi-step authentication.'
      ],
      technologies: ['Python', 'Matplotlib', 'Gemini API', 'Django Framework', 'Database Management'],
      liveUrl: 'https://github.com/Stephen13-05/Ecosense360',
      githubUrl: 'https://github.com/Stephen13-05/Ecosense360',
      featured: true,
      color: 'from-blue-400 via-cyan-400 to-blue-600',
      icon: '🌍',
    },
    {
      id: 3,
      title: 'Portfolio',
      description: [
        'Personal portfolio website showcasing projects, skills, and experience with interactive 3D and modern UI.',
        'Built with React.js, Three.js, and TypeScript for a modern, responsive design.'
      ],
      technologies: ['React.js', 'Three.js', 'TypeScript'],
      liveUrl: 'https://github.com/Stephen13-05/Stephen-Portfolio',
      githubUrl: 'https://github.com/Stephen13-05/Stephen-Portfolio',
      featured: false,
      color: 'from-purple-400 via-pink-400 to-indigo-600',
      icon: '💻',
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

  const floatingElements = [
    { icon: Zap, delay: 0, position: { top: '15%', left: '5%' } },
    { icon: Layers, delay: 1.5, position: { top: '25%', right: '8%' } },
    { icon: Sparkles, delay: 3, position: { bottom: '30%', left: '10%' } },
  ];

  const form = useRef();

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          rotate: [360, 180, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-primary/5 rounded-full blur-3xl"
      />

      {/* Floating tech icons */}
      {floatingElements.map(({ icon: Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/30 z-10"
          style={position}
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
          }}
        >
          <Icon className="h-10 w-10" />
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
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and learning experience in my development journey.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 20
              }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border border-border/50 backdrop-blur-sm"
            >
              {/* Featured Badge */}
              {project.featured && (
                <motion.div 
                  className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Star className="h-3 w-3" />
                  Featured
                </motion.div>
              )}

              {/* Project Image */}
              <div className={`relative flex flex-col items-center justify-center h-48 group-hover:h-52 transition-all duration-500 bg-gradient-to-br ${project.color} text-white shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/40 group-hover:brightness-125 group-hover:saturate-150 group-hover:scale-105 group-hover:animate-magic-glow`} style={{ filter: 'brightness(0.7)' }}> 
                <span className="text-5xl mb-2 drop-shadow-lg group-hover:animate-spin-slow">{project.icon}</span>
                <span className="font-bold text-lg text-center px-2 drop-shadow-lg">{project.title}</span>
                <style>{`
                  @keyframes magic-glow {
                    0% { box-shadow: 0 0 20px 0px #fff3, 0 0 40px 0px #fff2; }
                    50% { box-shadow: 0 0 40px 10px #fff6, 0 0 80px 20px #fff4; }
                    100% { box-shadow: 0 0 20px 0px #fff3, 0 0 40px 0px #fff2; }
                  }
                  .group-hover\:animate-magic-glow:hover {
                    animation: magic-glow 1.2s ease-in-out infinite;
                  }
                  .group-hover\:animate-spin-slow:hover {
                    animation: spin 2s linear infinite;
                  }
                  @keyframes spin {
                    100% { transform: rotate(360deg); }
                  }
                `}</style>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-sm mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ul className="list-disc list-inside space-y-1">
                    {Array.isArray(project.description)
                      ? project.description.map((point, i) => <li key={i}>{point}</li>)
                      : <li>{project.description}</li>}
                  </ul>
                </motion.p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1 + techIndex * 0.05,
                        duration: 0.3
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "var(--primary)",
                        color: "var(--primary-foreground)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-muted-foreground mb-6"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Want to see more projects or discuss a collaboration?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">
            <Button size="lg" className="gradient-bg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Get In Touch
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
