
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 mb-6">
            <img 
              src="/lovable-uploads/0f17509a-edcc-4813-851c-a61b2875686e.png"
              alt="Mriganka Adhikary"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Mriganka Adhikary
          </h1>
          <div className="text-xl md:text-2xl text-blue-400 mb-2">
            WEB DEVELOPER | PROGRAMMER
          </div>
          <p className="text-gray-300 text-lg">
            Pursuing MCA form University of Mumbai || BCA Graduate from MAKAUT
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/mriganko07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/mrigankoadhikary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:mrigankaadhikary35@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Mail size={28} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
