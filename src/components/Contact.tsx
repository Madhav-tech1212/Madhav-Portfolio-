
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Twitter, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Linktree',
      url: 'https://linktr.ee/madhavkarthickk',
      icon: <ExternalLink size={20} />
    },
    {
      name: 'Telegram',
      url: 'https://t.me/maddymadhav',
      icon: <MessageCircle size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/madhavkarthickki/',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/Maddyxtwt',
      icon: <Twitter size={20} />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Madhav-tech1212',
      icon: <Github size={20} />
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-portfolio-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text mb-4">
            Have a project?
          </h2>
          <h3 className="text-2xl lg:text-3xl text-portfolio-text mb-6">
            Let's talk!
          </h3>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
              Get in Touch
            </h3>
            <p className="text-lg text-portfolio-text/70 mb-8 leading-relaxed">
              Ready to bring your Web3 vision to life? Whether you need a complete dApp, 
              smart contract development, or full-stack web solutions, I'm here to help. 
              Let's discuss your project and create something amazing together.
            </p>

            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors group"
                >
                  <div className="text-portfolio-accent group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-lg">{link.name}</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-portfolio-card p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text placeholder:text-portfolio-text/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text placeholder:text-portfolio-text/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text placeholder:text-portfolio-text/50 resize-none"
                />
              </div>

              <Button className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-white text-lg py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
