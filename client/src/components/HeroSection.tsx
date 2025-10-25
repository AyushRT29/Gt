import streetImage from '@assets/generated_images/GTA_Los_Santos_street_background_ff38e509.png';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${streetImage})`,
          filter: 'blur(6px)',
          transform: 'scale(1.03)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 
            className="gta-title text-6xl md:text-8xl lg:text-9xl leading-none mb-2"
            data-testid="text-hero-title"
          >
            <span className="text-white" style={{ 
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill'
            }}>GRAND THEFT</span>
            <br />
            <span className="text-white" style={{ 
              WebkitTextStroke: '3px black',
              paintOrder: 'stroke fill'
            }}>AUTO</span>
          </h1>
           <h2 
            className="gta-subtitle text-4xl md:text-6xl lg:text-7xl mt-4"
            style={{
              fontFamily: "'Pricedown', sans-serif",
              WebkitTextStroke: '2px black',
              paintOrder: 'stroke fill'
            }}
          >
            <span className="neon-orange">Ayush Raj Tamrakar</span>
          </h2>
        </div>
        
        <p 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-8 bg-black/50 inline-block px-6 py-3 rounded-md"
          data-testid="text-hero-tagline"
        >
          <span className="neon-orange">Full-Stack Developer</span> | Mission: <span className="neon-green">Build Great Things</span>
        </p>

        <button
          onClick={scrollToAbout}
          className="animate-bounce mt-12"
          aria-label="Scroll to about section"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-12 h-12 neon-green drop-shadow-lg" />
        </button>
      </div>
    </section>
  );
}
