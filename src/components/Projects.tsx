
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Based Lightweight CNN for Early Detection of Pneumonia in Chest X-rays",
      duration: "Jun 2025 - Dec 2026",
      institution: "University of Mumbai",
      description: "A lightweight Convolutional Neural Network model designed to detect pneumonia from chest X-ray images, optimized for low-resource healthcare settings. This project demonstrates the practical application of AI in improving diagnostic accuracy while maintaining computational efficiency.",
      technologies: ["Python", "TensorFlow/Keras", "CNN", "MobileNetV2", "Medical Imaging Dataset"],
      skills: ["Deep Learning", "Computer Vision", "CNN Architecture", "Medical AI", "Model Optimization"],
      highlights: [
        "Lightweight CNN architecture optimized for efficiency",
        "Early detection of pneumonia from chest X-ray images",
        "Suitable for deployment in resource-constrained environments",
        "Focus on improving accessibility of AI-based diagnostic tools"
      ],
      featured: true,
      type: "Academic Research"
    },
    {
      title: "Social Media Forum Website",
      duration: "Oct 2024 - Apr 2025",
      description: "A comprehensive social media forum platform built with modern web technologies, featuring user authentication, post management, and community interaction features.",
      technologies: ["Laravel (PHP)", "Blade", "MySQL", "HTML", "CSS", "Bootstrap"],
      skills: ["Full-Stack Development", "Laravel", "PHP", "MySQL", "Javascript"],
      images: 6,
      contributors: true,
      type: "Web Development"
    },
    {
      title: "Restaurant Reservation System",
      duration: "Dec 2023 - May 2024",
      description: "An online restaurant reservation system that allows customers to book tables, view menus, and manage their reservations. Built with a focus on user experience and efficient database management.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      skills: ["Web Development", "Database Design", "UI/UX"],
      images: 3,
      contributors: false,
      type: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border backdrop-blur-sm transition-all duration-300 ${
                project.featured 
                  ? "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-blue-500/50 hover:border-blue-400 lg:col-span-2" 
                  : "bg-gray-800/50 border-gray-700 hover:border-blue-500"
              }`}
            >
              {/* Project Header with Type Badge */}
              <div className={`${project.featured ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6' : 'bg-gray-700/20 p-5'}`}>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {project.type && (
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          project.featured 
                            ? "bg-blue-500/30 text-blue-300 border border-blue-400/50"
                            : "bg-gray-600/50 text-gray-300"
                        }`}>
                          {project.type}
                        </span>
                      )}
                    </div>
                    <h3 className={`${project.featured ? 'text-2xl' : 'text-xl'} font-semibold text-white`}>
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">{project.duration}</span>
                </div>
                
                {project.institution && (
                  <div className="text-sm text-blue-300 mb-2">
                    📚 {project.institution}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className={`${project.featured ? 'text-base' : 'text-sm'} text-gray-300 leading-relaxed`}>
                  {project.description}
                </p>

                {/* Highlights for featured project */}
                {project.highlights && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-blue-300">Project Highlights:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Technologies */}
                <div>
                  <h4 className={`${project.featured ? 'text-sm' : 'text-xs'} font-semibold text-blue-400 mb-2`}>
                    Technologies & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded text-xs font-medium ${
                          project.featured
                            ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                            : "bg-gray-700 text-gray-300 border border-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Skills */}
                <div>
                  <h4 className={`${project.featured ? 'text-sm' : 'text-xs'} font-semibold text-cyan-400 mb-2`}>
                    Key Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.featured
                            ? "bg-cyan-600/20 text-cyan-300 border border-cyan-600/30"
                            : "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {project.contributors && (
                  <div className="text-gray-400 text-xs pt-2 border-t border-gray-700/50">
                    <span className="font-medium">Collaboration:</span> Multiple contributors
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
