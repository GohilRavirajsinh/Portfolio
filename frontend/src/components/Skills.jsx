import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Sparkles, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "BACKEND",
    theme: "blue",
    icon: Server,
    gradient: "from-accent-blue to-accent-cyan",
    borderGlow: "group-hover:border-accent-blue/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "JWT", "bcrypt", "Multer", "Cloudinary"]
  },
  {
    title: "FRONTEND",
    theme: "purple",
    icon: Layout,
    gradient: "from-accent-purple to-indigo-500",
    borderGlow: "group-hover:border-accent-purple/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    skills: ["React.js", "Context API", "React Router", "Axios", "JavaScript", "HTML", "TailwindCSS"]
  },
  {
    title: "GENERATIVE AI",
    theme: "pink",
    icon: Sparkles,
    gradient: "from-accent-pink to-rose-500",
    borderGlow: "group-hover:border-accent-pink/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    skills: ["AI Automation", "Prompt Engineering", "Claude", "ChatGPT", "Lovable", "Gemini"]
  },
  {
    title: "TOOLS & IDEs",
    theme: "cyan",
    icon: Wrench,
    gradient: "from-accent-cyan to-teal-400",
    borderGlow: "group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    skills: ["Github", "Render", "Vercel", "Antigravity", "Cursor", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            TECHNICAL <span className="text-gradient-3">SKILLS</span>
          </h2>
          <div className="w-24 h-1.5 bg-grad-3 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className={`glass-card p-8 group relative overflow-hidden ${category.borderGlow}`}
              >
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header Section */}
                <div className="flex flex-col items-center mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`w-8 h-8 text-transparent bg-clip-text bg-gradient-to-br ${category.gradient}`} style={{ color: "currentColor" }} />
                  </div>
                  <h3 className={`text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3 relative z-10">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      <span className="font-medium text-sm md:text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
