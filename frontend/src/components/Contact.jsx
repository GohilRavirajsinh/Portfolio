import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connect to backend API
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">

      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            GET IN <span className="text-gradient-1">TOUCH</span>
          </h2>
          <div className="w-24 h-1.5 bg-grad-1 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Form Inner Glow */}
            <div className="absolute top-0 right-0 w-full h-1 bg-grad-1"></div>

            <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F172A]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0F172A]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0F172A]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all duration-300"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#0F172A]/80 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                type="submit"
                className="w-full bg-grad-1 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : status === 'success' ? (
                  <>Message Sent <CheckCircle2 className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </motion.button>

              {/* Toast Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-emerald-500/90 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-red-500/90 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg backdrop-blur-sm"
                  >
                    <X className="w-4 h-4" /> {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 relative overflow-hidden h-full flex flex-col justify-between group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent-purple rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                <div className="space-y-8 relative z-10">
                  <a href="mailto:ravi.empowergrowth@gmail.com" className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group/item">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                      <p className="text-white font-medium break-all">ravi.empowergrowth@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+917096933693" className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group/item">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-accent-pink" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Phone</h4>
                      <p className="text-white font-medium">+91 70969 33693</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">Location</h4>
                      <p className="text-white font-medium">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-sm text-gray-300 font-medium">I typically respond within 24 hours</p>
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/GohilRavirajsinh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/ravirajsinh-gohil-empower" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-blue hover:border-accent-blue/50 hover:-translate-y-1 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#0F172A] border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:-translate-y-1 transition-all">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
