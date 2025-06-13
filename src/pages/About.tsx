import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Code, Palette, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science and Business Systems",
      institution: "R.M.K Engineering College",
      period: "2023 - 2027(Expected)",
      CGPA: "8.14 (3rd Semester)",
      location: "Chennai, Tamil Nadu",
      description: "Focused on software engineering, data structures, and algorithms, Marketing concepts, Data Science,Machine Learning  with Honour in Business Analytics",
      achievements: ["Actively Participated Club and grabed prizes", "Actively Participated in Hackathons and grabed prizes"]
    },
    {
      degree: "Higher Secondary",
      institution: "Velammal Matriculation Higher Secondary School",
      period: "2021 - 2022",
      location: "Chennai, Tamil Nadu",
      percentage: "92%",
      description: "Completed with distinction in Mathematics and Biology.",
      achievements: ["Participated in various competitions","Hosted many events"]
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Velammal Matriculation Higher Secondary School",
      period: "2020 - 2021",
      location: "Chennai, Tamil Nadu",
      percentage: "93%",
      description: "",
      achievements: []
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const educationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingIcons = [
    { icon: Code, delay: 0, position: { top: '20%', left: '10%' } },
    { icon: Palette, delay: 1, position: { top: '30%', right: '10%' } },
    { icon: Rocket, delay: 2, position: { bottom: '20%', left: '15%' } },
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      
      {/* Floating background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-primary/10 rounded-full blur-3xl"
      />

      {/* Floating icons */}
      {floatingIcons.map(({ icon: Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={position}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
          }}
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold mb-6 text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Passionate developer with a love for creating innovative solutions and beautiful user experiences.
            </motion.p>
          </motion.div>

          {/* Personal Summary */}
          <motion.div variants={educationVariants} className="space-y-6">
            <motion.h2 
              className="text-3xl font-semibold mb-6"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Journey
            </motion.h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.p 
                className="text-muted-foreground leading-relaxed text-justify"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                From exploring web design with WordPress to building full-stack applications using Django and React.js, 
                My journey has been driven by curiosity and creativity. Along the way, I developed a passion for AI and data, 
                which led me to pursue business analytics and machine learning. As a CSBS student, I continue to learn, build, 
                and innovate with the goal of solving real-world problems through technology.
              </motion.p>
              
              
            </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl font-semibold mb-8"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Education
            </motion.h2>
            {(Array.isArray(education) ? education : []).map((edu, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Timeline line */}
                {index !== education.length - 1 && (
                  <motion.div 
                    className="absolute left-6 top-20 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                  />
                )}
                
                <Card className="ml-16 hover:shadow-lg transition-all duration-300 hover:shadow-primary/10 border-primary/20">
                  <CardHeader>
                    <motion.div 
                      className="absolute -left-10 top-6 w-12 h-12 rounded-full gradient-bg flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="space-y-2">
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      </motion.div>
                      <CardDescription className="space-y-1">
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Award className="h-4 w-4" />
                          <span className="text-primary font-medium">{edu.institution}</span>
                        </motion.div>
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.period}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </motion.div>
                          {edu.CGPA && (
                            <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                              <span className="font-semibold">CGPA:</span>
                              <span className="text-sm">{edu.CGPA}</span>
                            </motion.div>
                          )}
                          {edu.percentage && (
                            <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                              <span className="font-semibold">Percentage:</span>
                              <span className="text-sm">{edu.percentage}</span>
                            </motion.div>
                          )}
                        </div>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {edu.description && (
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {edu.description}
                      </motion.p>
                    )}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + achIndex * 0.1 + 0.5 }}
                              whileHover={{ scale: 1.05, rotate: 5 }}
                            >
                              <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                                {achievement}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
