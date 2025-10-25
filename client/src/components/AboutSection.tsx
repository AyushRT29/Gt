import profileImage from '@assets/generated_images/GTA_character_developer_portrait_fc85db1c.png';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-black"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="gta-title text-4xl md:text-5xl lg:text-6xl text-center mb-16"
          data-testid="text-about-title"
        >
          <span className="neon-green">ABOUT</span> <span className="text-white">ME</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div 
              className="relative neon-glow-green rounded-md overflow-hidden"
              data-testid="img-profile"
            >
              <img 
                src={profileImage} 
                alt="Developer character"
                className="w-full max-w-md rounded-md"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 
              className="text-2xl md:text-3xl font-bold neon-orange"
              data-testid="text-about-subtitle"
            >
              Mission Briefing
            </h3>
            <p 
              className="text-lg text-gray-300 leading-relaxed"
              data-testid="text-about-description"
            >
              I'm a B.Tech 4th year Computer Science student from Chhattisgarh, India, passionate about building smart and user-friendly software. Just like CJ conquered the streets of San Andreas, I navigate the digital landscape with code as my weapon of choice.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My tech arsenal includes PHP Laravel, HTML, CSS, JavaScript, Java (Core + DSA), and I'm currently exploring Android Development. From full-stack web applications to learning mobile development, I'm always ready for the next challenge.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's building restaurant management systems or crafting minimalist e-commerce experiences, I focus on creating solutions that make a difference. Let's turn your ideas into reality and complete some missions together!
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-bold rounded-md neon-glow-green">
                STATUS: READY FOR ACTION
              </span>
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-bold rounded-md neon-glow-orange">
                LEVEL: 4TH YEAR CS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
