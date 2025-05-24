
const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Specialization",
      issuer: "Google",
      issueDate: "Jan 2023",
      credentialId: "Y3LBGHVWXBSF",
      skills: ["Data Analysis and R (Programming Language)"],
      logo: "G"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Licenses & Certifications</h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">{cert.logo}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-2">Issued {cert.issueDate}</p>
                  <p className="text-gray-400 text-sm mb-4">Credential ID: {cert.credentialId}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                    Show credential →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
