import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            EDUCATION & <span className="text-gradient-2">CERTIFICATIONS</span>
          </h2>
          <div className="w-24 h-1.5 bg-grad-2 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-blue bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="glass-card p-8 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h4 className="text-2xl font-bold text-white">Master Of Computer Applications</h4>
                  <div className="shrink-0 text-right">
                    <span className="inline-block px-4 py-1.5 bg-[#0F172A] border border-white/10 rounded-full text-xs font-bold tracking-wider text-gray-300">
                      2023 – 2025
                    </span>
                  </div>
                </div>
                
                <h5 className="text-xl text-accent-blue font-semibold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
                  S P University, Dept. Of Computer Technology
                </h5>
                
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl text-sm font-bold text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Award className="w-4 h-4" /> CGPA: 6.66
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent-purple bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              
              {/* Cert 1 */}
              <motion.a 
                href="https://drive.google.com/drive/folders/1QTjsrKidp6sPwP6UGyXox-iHDNb8T9QG" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block glass-card p-8 group relative overflow-hidden border-t-2 border-t-accent-purple hover:border-accent-purple/50"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent-purple rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:animate-bounce shrink-0">
                      🏆
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent-pink transition-all">
                        CSI Workshops
                      </h4>
                      <p className="text-gray-400 text-sm font-medium">Digital Marketing & Ethical Hacking</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 sm:ml-auto shrink-0 pl-17 sm:pl-0">
                    <span className="px-3 py-1 bg-[#0F172A] rounded-lg text-xs font-bold text-gray-400 border border-white/5">2022 – 2023</span>
                    <span className="text-accent-purple text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.a>
              
              {/* Cert 2 */}
              <motion.a 
                href="https://drive.google.com/file/d/1YmAZ1Xz72URyGIMPGVdXpKUN2qzGBI0G/view?usp=drive_link" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block glass-card p-8 group relative overflow-hidden border-t-2 border-t-accent-cyan hover:border-accent-cyan/50"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-accent-cyan rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:animate-bounce shrink-0">
                      🎓
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-blue transition-all">
                        Course on Computer Certificate
                      </h4>
                      <p className="text-gray-400 text-sm font-medium">CCC Certificate</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 sm:ml-auto shrink-0 pl-17 sm:pl-0">
                    <span className="px-3 py-1 bg-[#0F172A] rounded-lg text-xs font-bold text-gray-400 border border-white/5">May 2022</span>
                    <span className="text-accent-cyan text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
