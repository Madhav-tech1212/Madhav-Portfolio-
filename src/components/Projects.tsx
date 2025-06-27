
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'One Digital Bank',
      description: 'A decentralized financial platform merging traditional bank accounts and crypto wallets. Built with modern Web3 technologies.',
      technologies: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      liveUrl: 'https://madhav-tech1212.github.io/singproject/',
      githubUrl: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'E-Tibet Digital Nation',
      description: 'Built a concept for a sovereign digital nation featuring decentralized governance, crypto integration, and digital ID layers. Won 2nd place in hackathon.',
      technologies: ['Blockchain', 'Smart Contracts', 'DeFi', 'Governance'],
      liveUrl: '#',
      githubUrl: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'WordPress Business Solutions',
      description: 'Custom WordPress development for SM Timbers & Company including stock management, payment systems, and attendance tracking.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Chennai Freelancers Platform',
      description: 'Community website for Chennai Freelancers Club supporting 3,000+ attendees for Global Freelancers Festival 2025.',
      technologies: ['WordPress', 'Community Management', 'Event Planning'],
      liveUrl: '#',
      githubUrl: '#',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-portfolio-card rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent/5 flex items-center justify-center">
                <div className="text-portfolio-accent text-4xl font-bold">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                  {project.title}
                </h3>
                <p className="text-portfolio-text/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-portfolio-accent/20 text-portfolio-text px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="bg-portfolio-accent hover:bg-portfolio-accent/80"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
