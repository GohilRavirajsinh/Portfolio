import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ExternalLink, Building } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Developer Intern — MERN",
    company: "Unified Mentor Pvt Ltd",
    location: "Gurugram, Haryana",
    duration: "May – Aug (3 months)",
    type: "Remote",
    description: "Developed two end-to-end full-stack web applications using the MERN stack. Successfully engineered and deployed two major projects taking both from initial system design to live production.",
    responsibilities: [
      "Responsive frontend development",
      "Secure RESTful API creation",
      "Complex MongoDB schema design",
      "Cloud deployments (Vercel, Render, MongoDB Atlas, Cloudinary)"
    ],
    certLink: "https://drive.google.com/file/d/1NSdRj2CM_bK1TzDNuT2uXMZldwoCcKkE/view?usp=drive_link",
    color: "accent-blue"
  },
  {
    role: "Web Development Intern",
    company: "B M Coder Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    duration: "Jan – Apr (4 months)",
    type: "On-Site",
    description: "Developed a full Affiliate Marketing Website using PHP, Bootstrap, and MySQL with 7-table database.",
    responsibilities: [
      "Animated Login/Sign-Up pages",
      "Product management with Add to Cart & Buy Now (Amazon/Flipkart affiliate links)",
      "Admin Panel for managing users, products, and affiliate links",
      "Database design implementation"
    ],
    certLink: "https://drive.google.com/file/d/1UzyqMoa2pILZo8iNOchfOTb4vU7nlAL3/view?usp=drive_link",
    color: "accent-purple"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            PROFESSIONAL <span className="text-gradient-4">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1.5 bg-grad-4 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[27px] md:left-[39px] top-4 bottom-0 w-0.5 bg-gray-800"></div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative pl-20 md:pl-32 group"
              >
                {/* Timeline Dot with Pulse Effect */}
                <div className={`absolute left-4 md:left-[26px] top-8 w-7 h-7 rounded-full bg-[#0F172A] border-4 border-${exp.color} z-10 shadow-[0_0_15px_rgba(var(--${exp.color}),0.5)] group-hover:scale-125 transition-transform duration-300`}>
                  <div className={`absolute inset-0 rounded-full bg-${exp.color} animate-ping opacity-20`}></div>
                </div>

                <div className="glass-card p-8 group-hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden">
                  {/* Card Background Glow */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 bg-${exp.color} rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8 relative z-10">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 tracking-wide">{exp.role}</h3>
                      <div className={`text-xl font-bold text-${exp.color} mb-3 flex items-center gap-2`}>
                        <Building className="w-5 h-5" /> {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {exp.duration}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 shrink-0">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        exp.type === 'Remote' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}>
                        {exp.type}
                      </span>
                      {exp.certLink && exp.certLink !== "#" && (
                        <a href={exp.certLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                          Certificate <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg relative z-10">
                    {exp.description}
                  </p>
                  
                  <div className="bg-[#0F172A]/50 rounded-xl p-6 border border-white/5 relative z-10 group-hover:border-white/10 transition-colors">
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="text-gray-300 flex items-start gap-3">
                          <span className={`text-${exp.color} mt-1.5`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
