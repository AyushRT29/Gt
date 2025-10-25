import minimapImage from '@assets/generated_images/GTA_minimap_HUD_element_b270814c.png';

export default function MinimapHUD() {
  return (
    <div 
      className="fixed bottom-6 left-6 z-40 pointer-events-none"
      data-testid="minimap-hud"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 neon-glow-green rounded-full overflow-hidden border-4 border-primary">
        <img 
          src={minimapImage} 
          alt="Minimap" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="mt-2 text-center">
        <span className="text-xs font-bold neon-green tracking-wider">
          LOS SANTOS
        </span>
      </div>
    </div>
  );
}
