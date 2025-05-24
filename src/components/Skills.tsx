
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "JavaScript", level: 75 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Laravel", level: 75 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 70 },
        { name: "Wireshark", level: 65 },
        { name: "Qt4", level: 60 },
      ]
    },
    {
      title: "Specialized Areas",
      skills: [
        { name: "Data Analysis", level: 75 },
        { name: "Network Programming", level: 70 },
        { name: "Database Design", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
