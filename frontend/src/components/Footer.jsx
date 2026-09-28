import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] border-t border-white/10 pt-20 pb-10 overflow-hidden mt-10">
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-50"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-blue rounded-[100%] filter blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#home" className="inline-block text-3xl font-extrabold tracking-tighter mb-6 relative group">
              <span className="text-gradient-1 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">RG.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Backend Developer passionate about building secure, scalable RESTful APIs and modern web experiences with a premium feel.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/GohilRavirajsinh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all transform hover:-translate-y-1">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ravirajsinh-gohil-empower" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all transform hover:-translate-y-1">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:ravi.empowergrowth@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all transform hover:-translate-y-1">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all transform hover:-translate-y-1">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-4 lg:col-span-4 flex md:justify-center">
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-accent-blue transition-colors text-sm font-medium">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-accent-purple transition-colors text-sm font-medium">About Me</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-accent-pink transition-colors text-sm font-medium">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-accent-cyan transition-colors text-sm font-medium">Projects</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Experience</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Say Hello</h4>
            <div className="p-1 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-purple p-[1px] inline-block mb-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow">
              <a href="#contact" className="block px-6 py-3 bg-[#0F172A] rounded-[15px] text-white font-semibold text-sm hover:bg-transparent transition-colors">
                Contact Me
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              Ahmedabad, Gujarat, India<br/>
              +91 70969 33693
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Ravirajsinh Gohil. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Built with React, Node.js, TailwindCSS & <Heart className="w-4 h-4 text-accent-pink fill-accent-pink animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
