import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MusicToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://youtu.be/6VewzN781wQ?si=TEhTa0DPIUpv35mH');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(error => {
          console.log('Playback failed:', error);
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className="fixed top-4 right-4 z-50"
      data-testid="music-toggle"
    >
      <Button
        size="icon"
        variant="secondary"
        onClick={toggleMusic}
        className="neon-glow-orange hover:neon-glow-green transition-all duration-300"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        data-testid="button-music-toggle"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5 neon-orange" />
        )}
      </Button>
    </div>
  );
}
