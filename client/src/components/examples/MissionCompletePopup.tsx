import { useState } from 'react';
import MissionCompletePopup from '../MissionCompletePopup';
import { Button } from '@/components/ui/button';

export default function MissionCompletePopupExample() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show Popup</Button>
      <MissionCompletePopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
