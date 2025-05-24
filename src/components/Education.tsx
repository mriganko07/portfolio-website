
const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications - MCA",
      institution: "University of Mumbai",
      duration: "Aug 2024 - Jul 2026",
      description: "Currently pursuing my Master of Computer Applications (MCA), where I'm building expertise in key areas like Complex Networks, Cyber Laws, Natural Language Processing (NLP), Artificial Intelligence, and Research Methodology.",
      skills: ["Data Analysis", "R", "Linux"],
      current: true
    },
    {
      degree: "Bachelor of Computer Application - BCA",
      institution: "Maulana Abul Kalam Azad University of Technology, West Bengal formerly WBUT",
      duration: "Aug 2021 - Jul 2024",
      description: "During my time at Techno India Hooghly, I pursued a bachelor's degree in computer applications, specializing in programming languages, database management systems, computer networking, and Unix.",
      skills: ["Web Development", "Programming", "PHP", "JavaScript", "Python", "HTML", "CSS", "MySQL", "java",],
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 relative">
              {edu.current && (
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">
                    {edu.institution.charAt(0)}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-4">{edu.duration}</p>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
