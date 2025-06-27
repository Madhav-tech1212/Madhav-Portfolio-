
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-bg border-t border-portfolio-card py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-portfolio-text mb-2">
              Madhav Karthickk
            </h3>
            <p className="text-portfolio-text/60">
              Designed with love and built with modern tech by Madhav Karthickk.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Madhav-tech1212" 
              className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/madhavkarthickki/" 
              className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/Maddyxtwt" 
              className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-portfolio-card mt-8 pt-8 text-center">
          <p className="text-portfolio-text/60">
            © 2025 Madhav Karthickk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
