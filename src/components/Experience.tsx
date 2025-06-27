
const Experience = () => {
  const experiences = [
    {
      title: 'Freelance WordPress Developer',
      company: 'SM Timbers & Company',
      period: 'Jan 2025 – Present',
      description: 'Built comprehensive stock management, payment processing, and attendance tracking systems for timber business operations.'
    },
    {
      title: 'Junior Developer',
      company: 'CDIX Innovation Pvt Ltd',
      period: 'Jun 2024 – Jun 2025',
      description: 'Developed full-stack applications using React.js, MongoDB, and Next.js. Contributed to multiple client projects and internal tools.'
    },
    {
      title: 'Volunteer',
      company: 'Devcon 7 SEA (Ethereum.org)',
      period: 'Sep 2024 – Nov 2024',
      description: 'Managed international crowds and speaker sessions for 12,500+ attendees. Coordinated logistics for Southeast Asia\'s largest Ethereum conference.'
    },
    {
      title: 'Community Outreach Manager',
      company: 'Chennai Freelancers Club',
      period: 'Aug 2024 – Jan 2025',
      description: 'Led the Global Freelancers Festival 2025 with 3,000+ attendees. Built WordPress site, managed social channels, and organized community events.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-portfolio-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-portfolio-accent/30"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-12 last:pb-0">
              <div className="absolute left-2 w-4 h-4 bg-portfolio-accent rounded-full -translate-x-1/2"></div>
              
              <div className="bg-portfolio-card p-6 rounded-lg ml-4 hover:bg-portfolio-card/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-portfolio-text">
                    {exp.title}
                  </h3>
                  <span className="text-portfolio-accent font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-lg text-portfolio-accent mb-3">
                  {exp.company}
                </h4>
                
                <p className="text-portfolio-text/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
