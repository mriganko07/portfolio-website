
const Projects = () => {
  const projects = [
    {
      title: "Social Media Forum Website",
      duration: "Oct 2024 - Apr 2025",
      description: "A comprehensive social media forum platform built with modern web technologies, featuring user authentication, post management, and community interaction features.",
      technologies: ["Laravel (PHP)", "Blade", "MySQL", "HTML", "CSS", "Bootstrap"],
      skills: ["Full-Stack Development", "Laravel", "PHP", "MySQL", "Javascript"],
      images: 6,
      contributors: true
    },
    {
      title: "Restaurant Reservation System",
      duration: "Dec 2023 - May 2024",
      description: "An online restaurant reservation system that allows customers to book tables, view menus, and manage their reservations. Built with a focus on user experience and efficient database management.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      skills: ["Web Development", "Database Design", "UI/UX"],
      images: 3,
      contributors: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
    </section>
  );
};

export default Projects;
