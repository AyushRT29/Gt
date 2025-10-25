import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MissionCompletePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionCompletePopup({ isOpen, onClose }: MissionCompletePopupProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      data-testid="popup-mission-complete"
    >
      <div className="bg-card border-4 border-primary rounded-md p-8 md:p-12 max-w-md mx-4 text-center neon-glow-green animate-in fade-in zoom-in duration-500">
        <div className="flex justify-end mb-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={onClose}
            data-testid="button-close-popup"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="mb-6">
          <CheckCircle2 className="w-24 h-24 mx-auto neon-green animate-pulse" />
        </div>
        
        <h2 
          className="gta-title text-4xl md:text-5xl mb-4"
          data-testid="text-mission-complete-title"
        >
          <span className="neon-green">MISSION</span>
          <br />
          <span className="text-white">COMPLETE!</span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-2">
          Message received successfully!
        </p>
        
        <p className="text-sm text-gray-400 mb-8">
          I'll get back to you as soon as possible.
        </p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center px-4 py-2 bg-muted rounded-md">
            <span className="text-gray-400">REWARD:</span>
            <span className="font-bold neon-green">+500 RESPECT</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 bg-muted rounded-md">
            <span className="text-gray-400">STATUS:</span>
            <span className="font-bold neon-orange">PENDING RESPONSE</span>
          </div>
        </div>
        
        <Button
          onClick={onClose}
          className="w-full mt-8 font-bold neon-glow-green"
          data-testid="button-continue"
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
}
