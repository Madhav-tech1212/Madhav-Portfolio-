
import { Code, Smartphone, Globe, Blocks, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Blocks size={32} />,
      title: 'Full-stack Web & dApp Development',
      description: 'Complete end-to-end development of web applications and decentralized applications using modern frameworks and blockchain technologies.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Design from Prototype to Deployment',
      description: 'From initial concept and design to full deployment, I handle the entire web development lifecycle with modern UI/UX principles.'
    },
    {
      icon: <Code size={32} />,
      title: 'Blockchain & Smart Contract Development',
      description: 'Expert development of smart contracts, DeFi protocols, and blockchain integration using Solidity and Web3 technologies.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions for businesses and communities, including plugins, themes, and complex business logic integration.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Technical Strategy Consulting',
      description: 'Strategic technical consulting for Web3 projects, architecture planning, and technology stack recommendations.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-lg text-portfolio-text/70 max-w-3xl mx-auto">
            Comprehensive Web3 and full-stack development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-portfolio-card p-6 rounded-lg hover:bg-portfolio-card/80 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-portfolio-accent mb-4 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-portfolio-text mb-3 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-portfolio-text/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
