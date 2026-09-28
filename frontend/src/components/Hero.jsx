import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      
      {/* Animated Background Elements (Parallax) */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent-blue rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-accent-purple rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-accent-pink rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2 variants={itemVariants} className="text-sm md:text-base text-accent-cyan mb-4 font-bold tracking-[0.2em] uppercase">
              HELLO, I'M
            </motion.h2>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
              <span className="text-gradient-1 drop-shadow-lg">
                RAVIRAJSINH
              </span>
              <br />
              <span className="text-gradient-2 drop-shadow-lg">
                GOHIL
              </span>
            </motion.h1>
            
            <motion.h3 variants={itemVariants} className="text-xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide">
              BACKEND DEVELOPER
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-gray-400 mb-10 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I build secure, scalable RESTful APIs and handle complex database operations. 
              Passionate about crafting robust backend solutions and seamless integrations.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5 mb-12">
              <a href="#contact" className="px-8 py-4 rounded-full bg-grad-1 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                Hire Me
              </a>
              <a href="#" className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto hover:border-accent-purple/50">
                <Download className="w-5 h-5" /> Download CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/GohilRavirajsinh" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-white/10 hover:border-accent-blue/50 text-gray-400 hover:text-accent-blue transition-all transform hover:-translate-y-1">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ravirajsinh-gohil-empower" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-white/10 hover:border-accent-blue/50 text-gray-400 hover:text-accent-blue transition-all transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ravi.empowergrowth@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-white/10 hover:border-accent-pink/50 text-gray-400 hover:text-accent-pink transition-all transform hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Rotating Gradient Border */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink animate-spin-slow opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
              
              {/* Pulsing Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-accent-purple/30 blur-2xl animate-pulse"></div>

              {/* The image container */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full p-2 bg-[#0F172A] rounded-full overflow-hidden z-10 transform transition-transform duration-500"
              >
                <img 
                  src="/Profile.png" 
                  alt="Ravirajsinh Gohil" 
                  className="w-full h-full object-cover rounded-full filter hover:brightness-110 transition-all duration-500"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
