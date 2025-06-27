
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg scroll-smooth">
      <Navigation />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="services"><Services /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default Index;
