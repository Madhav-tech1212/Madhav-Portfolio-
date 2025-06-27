
const About = () => {
  const stats = [
    { number: '10+', label: 'Completed Projects' },
    { number: '95%', label: 'Client satisfaction' },
    { number: '2+', label: 'Years of experience' }
  ];

  const services = [
    {
      title: 'Web3 Development',
      description: 'Smart contracts and dApp development using Solidity and modern frameworks'
    },
    {
      title: 'Full-Stack Development', 
      description: 'MERN stack applications with modern UI/UX and scalable architecture'
    },
    {
      title: 'WordPress Development',
      description: 'Custom WordPress solutions for businesses and communities'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            About me
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <p className="text-lg text-portfolio-text/80 leading-relaxed mb-6 text-justify:inter-word;">
              I started my software journey from photography. Through that, I learned to 
              love the process of creating new spaces, from the lens space of the 
              camera and into functional systems. I evolved into making custom 
              software development and I'll help my love for learning and building things.
            </p>
            <p className="text-lg text-portfolio-text/80 leading-relaxed">
              With a B.E. in Mechatronics Engineering from Kumaraguru College of Technology 
              and hands-on experience in Web3 development, I've contributed to hackathons, 
              managed communities, and volunteered at international events like Devcon 7 SEA.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-portfolio-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-portfolio-text/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-portfolio-card p-6 rounded-lg hover:bg-portfolio-card/80 transition-colors group">
              <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-portfolio-accent/30 transition-colors">
                <div className="w-6 h-6 bg-portfolio-accent rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-portfolio-text mb-3">
                {service.title}
              </h3>
              <p className="text-portfolio-text/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
