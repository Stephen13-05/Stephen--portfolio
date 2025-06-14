import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../components/ui/use-toast';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'praveenstephend@gmail.com',
      href: 'mailto:praveenstephend@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9940107952',
      href: 'tel:+919940107952'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Paruthipattu, Avadi, Chennai',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Stephen13-05',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/praveen-stephen-d/',
      color: 'hover:text-blue-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

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

  const cardVariants = {
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
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      {/* Floating sparkles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute top-32 right-20 text-primary"
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute bottom-32 left-20 text-primary"
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="absolute top-1/2 right-32 text-primary"
      >
        <Sparkles className="h-5 w-5" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={cardVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 hover:scale-[1.02] group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-200 ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="w-full gradient-bg hover:scale-[1.02] transition-all duration-200"
                  asChild
                >
                  <motion.a
                    href="https://drive.google.com/file/d/1wH_FPKC3nJtouCDoJlZvrmx4VOxbRlJ0/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </motion.a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
