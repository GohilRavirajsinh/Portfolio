import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(from + (to - from) * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const highlights = [
    "Secure RESTful API Architecture",
    "High-Concurrency Database Handling",
    "Payment Gateway Integrations",
    "Cloud Storage Solutions"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            ABOUT <span className="text-gradient-2">ME</span>
          </h2>
          <div className="w-24 h-1.5 bg-grad-2 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Driving impact through scalable architecture.
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I am a Backend Developer with strong practical expertise in Node.js, Express.js, and MongoDB. 
              My passion lies in designing secure RESTful APIs, handling database concurrency, and seamlessly 
              integrating third-party services like Payment Gateways and Cloud Storage.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              As an independent problem-solver and quick learner, I am currently seeking an on-site fresher 
              role where I can drive impact from day one. I recently pursued my Master Of Computer Applications 
              (MCA) to solidify my foundation in computer science.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <div className="grid grid-cols-2 gap-8">
              
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <h4 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent-blue to-accent-cyan mb-2">
                  <AnimatedCounter to={3} />+
                </h4>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">Live Projects</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <h4 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent-purple to-accent-pink mb-2">
                  <AnimatedCounter to={100} />%
                </h4>
                <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">Commitment</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors col-span-2">
                <h4 className="text-4xl font-black text-white mb-4">Experience Level</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Backend Development</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2 font-medium text-gray-300">
                      <span>Database Management</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent-purple to-accent-pink"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
