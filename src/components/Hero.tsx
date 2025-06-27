
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center lg:justify-center animate-fade-in ">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-portfolio-accent to-blue-600 p-2 animate-glow">
              <div className="w-full h-full rounded-full bg-portfolio-bg flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/59Qpbkyr/green1.png" 
                  alt="Madhav Karthickk"
                  className="w-80 h-80 lg:w-92 lg:h-92 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left animate-fade-in">
          {/* <h1 className="text-1xl lg:text-3xl font-bold text-portfolio-text mb-4">
            Hello<span className="text-portfolio-accent">.</span>
          </h1> */}
          <h2 className="text-3xl lg:text-5xl font-bold text-portfolio-text mb-2">
            <span className="text-portfolio-accent">I'm</span> Madhav Karthickk
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-portfolio-text mb-6">
            Web3 <span className="text-portfolio-accent">Developer</span> 
          </h3>
          <p className="text-lg text-portfolio-text/80 mb-8 leading-relaxed">
            Passionate freelance Web3 developer who builds decentralized applications using MERN, 
            Solidity, and modern blockchain tech. I've contributed to projects redefining national 
            infrastructure through crypto and collaborated globally through Devcon and hackathons.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-white px-8 py-3 text-lg">
              Get a project
            </Button>
            <Button variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-3 text-lg">
              My resume
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com/Madhav-tech1212" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/madhavkarthickki/" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/Maddyxtwt" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://t.me/maddymadhav" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
