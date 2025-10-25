import { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactSectionProps {
  onMissionComplete: () => void;
}

export default function ContactSection({ onMissionComplete }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onMissionComplete();
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/AyushRT29', color: 'neon-green' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ayushrt29/', color: 'neon-orange' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/iayushrt', color: 'neon-green' },
    { name: 'Email', icon: Mail, url: 'mailto:ayushrt29@gmail.com', color: 'neon-red' },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black"
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="gta-title text-4xl md:text-5xl lg:text-6xl text-center mb-6"
          data-testid="text-contact-title"
        >
          <span className="neon-red">CONTACT</span> <span className="text-white">ME</span>
        </h2>
        
        <p className="text-center text-gray-400 mb-12 text-lg">
          Ready to start a new mission? Hit me up!
        </p>

        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-card border-2 border-border rounded-md hover:border-primary transition-all duration-300 neon-glow-green hover:scale-110 group`}
                aria-label={social.name}
                data-testid={`link-${social.name.toLowerCase()}`}
              >
                <Icon className={`w-8 h-8 text-gray-400 group-hover:${social.color} transition-colors`} />
              </a>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300 font-bold">
              NAME
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
              className="bg-input border-2 border-border focus:border-primary text-foreground neon-glow-green"
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 font-bold">
              EMAIL
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              required
              className="bg-input border-2 border-border focus:border-primary text-foreground neon-glow-green"
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300 font-bold">
              MESSAGE
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your mission..."
              required
              rows={5}
              className="bg-input border-2 border-border focus:border-primary text-foreground neon-glow-green resize-none"
              data-testid="input-message"
            />
          </div>

          <Button 
            type="submit"
            variant="destructive"
            className="w-full text-lg font-bold py-6 neon-glow-red"
            data-testid="button-send-message"
          >
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </section>
  );
}
