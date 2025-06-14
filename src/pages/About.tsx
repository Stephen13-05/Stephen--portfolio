import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science and Business Systems",
      institution: "R.M.K Engineering College",
      period: "2023 - 2027(Expected)",
      score: "8.34 CGPA (4th Semester)",
      location: "Chennai, Tamil Nadu",
      description: "Focused on software engineering, data structures, and algorithms, Marketing concepts, Data Science, Machine Learning with Honour in Business Analytics",
      achievements: ["Actively Participated in Club activities and won prizes", "Actively Participated in Hackathons and won prizes"]
    },
    {
      degree: "Higher Secondary",
      institution: "Velammal Matriculation Higher Secondary School",
      period: "2021 - 2022",
      score: "92%",
      location: "Chennai, Tamil Nadu",
      description: "Completed with distinction in Mathematics and Biology",
      achievements: ["Participated in various competitions", "Hosted many events"]
    },
    {
      degree: "Secondary School Leaving Certificate",
      institution: "Velammal Matriculation Higher Secondary School",
      period: "2020 - 2021",
      score: "93%",
      location: "Chennai, Tamil Nadu",
      description: "Completed with distinction",
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

  return (
    <div className="relative min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A passionate developer focused on creating innovative solutions and beautiful user experiences.
            </motion.p>
          </motion.div>

          {/* Personal Summary */}
          <motion.div variants={itemVariants} className="space-y-6 px-4 sm:px-0">
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6"
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
                I'm a Computer Science and Business Systems student with a passion for web development and AI. 
                My journey in technology started with web design and has evolved into full-stack development. 
                I'm particularly interested in AI, data science, and business analytics, which I'm currently 
                exploring through my academic studies and personal projects.
              </motion.p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 px-4 sm:px-0"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Education
            </motion.h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="ml-8 sm:ml-16 hover:shadow-lg transition-all duration-300 hover:shadow-primary/10 border-primary/20">
                  <CardHeader>
                    <motion.div 
                      className="absolute -left-6 sm:-left-10 top-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-bg flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </motion.div>
                    <div className="space-y-2">
                      <CardTitle className="text-lg sm:text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span className="text-primary font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span className="text-sm font-medium">{edu.score}</span>
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    {edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium">Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground">{achievement}</li>
                          ))}
                        </ul>
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
