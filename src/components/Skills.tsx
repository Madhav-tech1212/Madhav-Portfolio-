
const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'Solidity', 'Golang', 'Rust', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs']
    },
    {
      category: 'Tools & Platforms',
      skills: ['VS Code', 'Android Studio', 'PyCharm', 'Git', 'WordPress']
    },
    {
      category: 'Blockchain',
      skills: ['Smart Contracts', 'Web3.js', 'Ethereum', 'DeFi', 'dApps']
    },
    {
      category: 'Soft Skills',
      skills: ['Leadership', 'Problem-Solving', 'Community Management', 'Event Planning']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-portfolio-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-portfolio-card p-6 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold text-portfolio-text mb-4 pb-2 border-b border-portfolio-accent/30">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-portfolio-accent/20 text-portfolio-text px-3 py-1 rounded-full text-sm hover:bg-portfolio-accent/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
