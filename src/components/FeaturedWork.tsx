import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const coreCapabilities = [
  {
    title: "AI Voice Interviews",
    desc: "Real-time conversational AI interviews powered by Vapi, allowing candidates to participate in interactive mock sessions."
  },
  {
    title: "Live Code Editor",
    desc: "Integrated Monaco Editor with multi-language support for coding assessments and technical interview exercises."
  },
  {
    title: "AI Proctoring",
    desc: "Face detection and attention tracking using MediaPipe and face-api.js to assist with automated monitoring."
  },
  {
    title: "Resume Parsing",
    desc: "Automated PDF resume parsing to extract candidate information and build candidate profiles."
  },
  {
    title: "Secure Auth",
    desc: "JWT-based authentication with Google OAuth and Two-Factor Authentication (2FA) using TOTP and QR-code enrollment."
  }
];

const techStack = {
  frontend: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lenis", "React Router v7"],
  backend: ["Node.js", "Express.js", "Mongoose", "MongoDB", "Vapi AI", "Gemini API", "OpenRouter"]
};

const otherProjects = [
  { 
    id: 1, 
    title: "Lightweight CNN for Pneumonia Detection", 
    type: "AI", 
    year: "2025-2026",
    desc: "Developed a lightweight CNN architecture optimized for efficiency, enabling early and accurate pneumonia detection from chest X-ray images, suitable for low-resource healthcare settings.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNetV2"]
  },
  { 
    id: 2, 
    title: "Social Media Forum Website", 
    type: "Full-Stack", 
    year: "2024-2025",
    desc: "A comprehensive social media forum platform built with modern web technologies, featuring user authentication, post management, and community interaction.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"]
  },
  { 
    id: 3, 
    title: "Restaurant Reservation System", 
    type: "Full-Stack", 
    year: "2023-2024",
    desc: "An online restaurant reservation system that allows customers to book tables, view menus, and manage their reservations with efficient database management.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"]
  }
];

export function FeaturedWork() {
  const [activeTab, setActiveTab] = useState(0);
  const [filter, setFilter] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = filter === 'All' 
    ? otherProjects 
    : otherProjects.filter(p => p.type === filter);

  return (
    <section id="work" className="w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center border-b border-border">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">03 — Featured Work</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase">CodeArena</h2>
          <p className="text-xl text-foreground/70 max-w-2xl font-light">
            An AI-Powered Interview & Assessment Platform designed to provide candidates with realistic technical interview experiences.
          </p>
        </div>

        {/* CodeArena Spotlight */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Capabilities Tabs */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-2xl font-display font-semibold uppercase tracking-tight mb-4">Core Capabilities</h3>
            <div className="flex flex-col border-l border-border">
              {coreCapabilities.map((cap, idx) => (
                <div 
                  key={idx}
                  className={`pl-6 py-4 cursor-pointer transition-all duration-300 border-l-2 relative -ml-[1px] ${
                    activeTab === idx ? 'border-accent' : 'border-transparent hover:border-foreground/30'
                  }`}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                >
                  <h4 className={`text-xl font-display font-medium transition-colors ${activeTab === idx ? 'text-foreground' : 'text-foreground/50'}`}>
                    {cap.title}
                  </h4>
                  <AnimatePresence>
                    {activeTab === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-foreground/70 mt-2 font-light text-sm">
                          {cap.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Links */}
          <div className="flex-1 flex flex-col gap-12">
            
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-display font-semibold uppercase tracking-tight">Tech Stack</h3>
              
              <div className="flex flex-col gap-4">
                <span className="text-sm uppercase tracking-widest text-accent">Frontend</span>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 border border-border rounded-full text-xs font-medium tracking-wide bg-white/[0.02]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <span className="text-sm uppercase tracking-widest text-accent">Backend & AI</span>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 border border-border rounded-full text-xs font-medium tracking-wide bg-white/[0.02]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/mriganko07/CodeArena" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium hover:bg-accent transition-colors rounded-full"
              >
                <Github className="w-5 h-5" />
                View Repository
              </a>
              <button className="flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium hover:border-accent hover:text-accent transition-colors rounded-full">
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </button>
            </div>

          </div>
        </div>

        {/* Project Explorer Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* Project Explorer */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Other Projects</h3>
            
            <div className="flex gap-2 p-1 border border-border rounded-full bg-white/[0.01] overflow-x-auto max-w-full">
              {['All', 'Full-Stack', 'Frontend', 'AI'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    filter === f ? 'bg-accent text-background' : 'text-foreground hover:bg-white/[0.05]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id}
                  layout={!shouldReduceMotion}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 border border-border hover:border-accent/50 bg-white/[0.01] transition-colors group cursor-pointer flex flex-col justify-between min-h-[200px]"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-2xl font-display font-medium group-hover:text-accent transition-colors">{project.title}</h4>
                    <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>
                  
                  {project.desc && (
                    <p className="text-foreground/70 font-light text-sm mt-4">
                      {project.desc}
                    </p>
                  )}

                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest text-accent border border-accent/20 px-2 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-between items-end mt-8">
                    <span className="text-xs tracking-widest uppercase text-foreground/50 border border-border px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <span className="text-foreground/30 font-display">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
