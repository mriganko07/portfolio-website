
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
              Feel free to reach out through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <span className="text-gray-300">mrigankaadhikary35@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400" size={20} />
                <span className="text-gray-300">Kolkata, West Bengal, India</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Linkedin className="text-blue-400" size={20} />
                <a 
                  href="https://linkedin.com/in/mrigankoadhikary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  linkedin.com/in/mrigankoadhikary
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Github className="text-blue-400" size={20} />
                <a 
                  href="https://github.com/mrigankoadhikary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  github.com/mrigankoadhikary
                </a>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-300">Bengali</span>
                  <span className="text-blue-400 text-sm">Native</span>
                </div>
                <p className="text-gray-400 text-sm">Native or bilingual proficiency</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-300">English</span>
                  <span className="text-blue-400 text-sm">Professional</span>
                </div>
                <p className="text-gray-400 text-sm">Full professional proficiency</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-300">Hindi</span>
                  <span className="text-blue-400 text-sm">Professional</span>
                </div>
                <p className="text-gray-400 text-sm">Professional working proficiency</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400">
            © 2024 Mriganka Adhikary. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
