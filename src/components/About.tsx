
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hello, I'm Mriganka Adhikary, a Bachelor of Computer Applications (BCA) graduate from Techno India Hooghly and 
            currently pursuing my Master of Computer Applications (MCA). My academic journey has provided me with a strong 
            foundation in computer science, enriched by hands-on experience and a growing interest in advanced topics.
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Skills & Technical Proficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h4 className="font-medium text-white mb-2">Programming Languages:</h4>
                <p>Python, PHP, JavaScript</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Web Development:</h4>
                <p>HTML, CSS, JavaScript, PHP</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Database Management:</h4>
                <p>MySQL</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Frameworks & Tools:</h4>
                <p>Laravel, ns-3, Wireshark, Qt4</p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I've thrived in both individual and collaborative projects, strengthening my teamwork and problem-solving abilities. 
            Beyond academics, I've taken part in social initiatives like organizing a blood donation camp, reflecting my commitment to 
            community well-being.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm always eager to explore opportunities where I can apply my skills, grow as a professional, and contribute meaningfully 
            to the tech community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
