import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Play, Code2, Server, Database } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EventSync: High-Concurrency Event Ticketing",
    status: "IN PROGRESS",
    github: "https://github.com/GohilRavirajsinh/EventSync-Platform",
    demo: "#",
    techStack: ["Node.js", "Express.js", "MongoDB", "Razorpay", "React.js", "Cloudinary", "JWT"],
    description: "Secure event booking platform with high-concurrency handling and race condition prevention.",
    features: [
      "Role-Based Access Control (Organizer, User)",
      "MongoDB Atomic Operators for preventing double-booking",
      "Razorpay payment gateway integration with webhook support",
      "JWT-based stateless authentication with Mongoose pre-save hooks",
      "Cloudinary integration for event poster uploads"
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-blue-400 to-cyan-400",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
  },
  {
    id: 2,
    title: "India Temple Heritage & Pilgrimage Portal",
    status: "LIVE",
    github: "https://github.com/GohilRavirajsinh/India-Temple-Heritage-Pilgrimage",
    demo: "https://india-temple-heritage-pilgrimage-alpha.vercel.app/",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Cloudinary"],
    description: "Centralized platform for historical and architectural details of ancient Indian temples.",
    features: [
      "Responsive, mobile-first web application using React with Vite",
      "Secure JWT-based authentication with bcrypt",
      "Admin Dashboard with full CRUD operations on temple listings",
      "Cloudinary CDN for image storage and fast delivery",
      "Deployed on Vercel (frontend) and Render (backend)"
    ],
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-purple-400 to-pink-400",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
  },
  {
    id: 3,
    title: "Property Rental & Amenity Management",
    status: "LIVE",
    github: "https://github.com/GohilRavirajsinh/Property-Rental-Maintenance-Amenity-Management-Plateform",
    demo: "https://property-rental-maintenance-amenity.vercel.app/",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Cloudinary"],
    description: "Comprehensive full-stack application for property listings, amenity bookings, and maintenance requests.",
    features: [
      "Role-Based Dashboards (Tenant, Owner, Admin)",
      "JWT-authenticated role system with tailored CRUD access",
      "Conflict-free scheduling algorithm for booking amenities",
      "Cloudinary integration with Multer for secure image handling",
      "Mobile HEIC format conversion support",
      "Deployed on Vercel (frontend) with SPA routing and Render (backend)"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "from-emerald-400 to-teal-400",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            FEATURED <span className="text-gradient-1">PROJECTS</span>
          </h2>
          <div className="w-24 h-1.5 bg-grad-1 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`glass-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 ${project.glow}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent z-10 opacity-80"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 backdrop-blur-md ${
                    project.status === 'LIVE' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'LIVE' ? 'bg-emerald-400' : 'bg-amber-400'}`}></div>
                    {project.status}
                  </span>
                </div>

                {/* Hover Play Icon */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-xl font-bold mb-3 line-clamp-2 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-[#0F172A] border border-white/5 rounded-md text-gray-300 font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2.5 py-1 bg-[#0F172A] border border-white/5 rounded-md text-gray-400 font-medium">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/10">
                  <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#0F172A] hover:bg-white/5 border border-white/5 hover:border-white/20 transition-all text-sm font-semibold text-white group/btn">
                    <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-white transition-colors" /> Code
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity text-sm font-bold text-white shadow-lg`}>
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#1E293B] rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full text-white transition-all transform hover:rotate-90 duration-300 border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="h-64 sm:h-80 relative shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E293B] z-10`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} mix-blend-overlay opacity-40 z-10`}></div>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 sm:p-12 overflow-y-auto z-20 -mt-20 relative bg-gradient-to-b from-transparent to-[#1E293B]">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 backdrop-blur-md bg-black/30 border border-white/10 ${
                      selectedProject.status === 'LIVE' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${selectedProject.status === 'LIVE' ? 'bg-emerald-400' : 'bg-amber-400'}`}></div>
                      {selectedProject.status}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">{selectedProject.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg sm:text-xl max-w-3xl font-light">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                        <Server className="w-5 h-5 text-white" />
                      </div>
                      Key Features
                    </h4>
                    <ul className="space-y-4">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 text-sm sm:text-base flex items-start gap-3">
                          <span className="text-emerald-400 mt-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          </span> 
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="bg-white/5 rounded-3xl p-8 border border-white/5 mb-8">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                          <Code2 className="w-5 h-5 text-white" />
                        </div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedProject.techStack.map((tech, i) => (
                          <span key={i} className="px-4 py-2 bg-[#0F172A] border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {selectedProject.demo !== "#" && (
                        <a href={selectedProject.demo} target="_blank" rel="noreferrer" className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r ${selectedProject.gradient} hover:opacity-90 transition-opacity text-base font-bold text-white shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                          <ExternalLink className="w-5 h-5" /> Visit Live Site
                        </a>
                      )}
                      <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-base font-bold text-white">
                        <Github className="w-5 h-5" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
