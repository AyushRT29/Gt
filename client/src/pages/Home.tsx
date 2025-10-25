import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import MusicToggle from '@/components/MusicToggle';
import MinimapHUD from '@/components/MinimapHUD';
import MissionCompletePopup from '@/components/MissionCompletePopup';

export default function Home() {
  const [showMissionComplete, setShowMissionComplete] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <MusicToggle />
      <MinimapHUD />
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection onMissionComplete={() => setShowMissionComplete(true)} />
      
      <MissionCompletePopup 
        isOpen={showMissionComplete} 
        onClose={() => setShowMissionComplete(false)} 
      />
      
      <footer className="bg-black border-t-2 border-primary/30 py-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Ayush Raj Tamrakar. All missions reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Inspired by GTA: San Andreas | Built with React & TypeScript
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <a href="https://github.com/AyushRT29" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:neon-green text-xs">GitHub</a>
          <a href="https://www.linkedin.com/in/ayushrt29/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:neon-orange text-xs">LinkedIn</a>
          <a href="https://x.com/iayushrt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:neon-green text-xs">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
