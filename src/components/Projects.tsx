
const Projects = () => {
  const projects = [
    {
      title: "AI-Based Lightweight CNN for Early Detection of Pneumonia in Chest X-Rays",
      duration: "Jun 2025 - Dec 2026",
      institution: "University of Mumbai",
      description: "A cutting-edge deep learning project developing a lightweight Convolutional Neural Network model for early pneumonia detection from chest X-ray images. This project is particularly focused on deploying AI solutions in resource-constrained healthcare environments, making advanced diagnostic tools accessible globally.",
      longDescription: "In this project, I developed a lightweight CNN architecture optimized for efficiency, enabling early and accurate pneumonia detection from chest X-ray images. The model is designed specifically for low-resource healthcare settings where computational resources may be limited, ensuring that life-saving diagnostic capabilities can be deployed anywhere.",
      goal: "The goal of this project is to explore how AI can assist healthcare professionals in making faster and more accessible diagnoses, especially in areas with limited medical infrastructure.",
      highlights: [
        "Designed a lightweight CNN architecture optimized for efficiency",
        "Early detection of pneumonia from chest X-ray images",
        "Suitable for deployment in resource-constrained environments",
        "Focused on improving accessibility of AI-based diagnostic tools"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "CNN-based Deep Learning", "MobileNetV2", "ImageNet", "Medical Imaging Dataset (Chest X-rays)"],
      skills: ["Deep Learning", "Convolutional Neural Networks (CNN)", "Medical AI", "Model Optimization", "TensorFlow/Keras", "Medical Image Analysis"],
      category: "AI & Healthcare",
      type: "Research Project",
      images: 1,
      featured: true,
      contributors: false
    },
    {
      title: "Social Media Forum Website",
      duration: "Oct 2024 - Apr 2025",
      description: "A comprehensive social media forum platform built with modern web technologies, featuring user authentication, post management, and community interaction features.",
      technologies: ["Laravel (PHP)", "Blade", "MySQL", "HTML", "CSS", "Bootstrap"],
      skills: ["Full-Stack Development", "Laravel", "PHP", "MySQL", "Javascript"],
      images: 6,
      contributors: true,
      featured: false
    },
    {
      title: "Restaurant Reservation System",
      duration: "Dec 2023 - May 2024",
      description: "An online restaurant reservation system that allows customers to book tables, view menus, and manage their reservations. Built with a focus on user experience and efficient database management.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      skills: ["Web Development", "Database Design", "UI/UX"],
      images: 3,
      contributors: false,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        
        {/* Featured Projects */}
        {featuredProjects.map((project, index) => (
          <div key={index} className="mb-12">
            <div className="bg-gradient-to-br from-blue-900/40 to-teal-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              {/* Featured Project Header Image */}
              <div className="h-64 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                <div className="text-center relative z-10">
                  <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                    <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  </div>
                  <div className="text-white text-2xl font-bold mb-2">
                    {project.title}
                  </div>
                  <div className="text-blue-100 text-sm">
                    Research-driven AI Innovation
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Project Info */}
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Duration</p>
                        <p className="text-white font-semibold">{project.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Institution</p>
                        <p className="text-white font-semibold flex items-center gap-2">
                          <span className="text-blue-400">🎓</span> {project.institution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-700">
                      <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                        <span>🎯</span> Project Goal
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.goal}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                        <span>✨</span> Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights?.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-300 text-sm flex gap-3">
                            <span className="text-teal-400 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Side Stats */}
                  <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700 h-fit">
                    <div className="mb-6">
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Type</p>
                      <p className="text-white font-semibold">{project.type}</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">Skills Demonstrated</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 5).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 mb-6"></div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">🛠️ Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 px-3 py-2 rounded-lg text-sm border border-gray-600/50 hover:border-blue-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 mt-12">Other Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white text-lg font-semibold mb-2">
                        {project.title}
                      </div>
                      <div className="text-blue-200 text-sm">
                        {project.images} screenshots available
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="text-gray-400 text-sm">{project.duration}</span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.contributors && (
                      <div className="text-gray-400 text-sm">
                        <span className="font-medium">Collaboration:</span> Multiple contributors
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
