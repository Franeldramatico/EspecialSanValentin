import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const baseUrl = import.meta.env.BASE_URL || '/';
  const gmUrl = `${baseUrl}musica-audio/George Michael - Careless Whisper.mp3`;
  const [src, setSrc] = useState<string>(gmUrl);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed):", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set initial volume low
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in-up">
      <audio 
        ref={audioRef} 
        loop 
        src={src}
        onError={() => {
          setSrc('https://cdn.pixabay.com/audio/2022/02/10/audio_51838535c3.mp3');
        }}
      />
      
      <button
        onClick={togglePlay}
        className={`group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-500 overflow-hidden ${
          isPlaying ? 'bg-valentine-400 rotate-180' : 'bg-white/80 hover:bg-valentine-100'
        }`}
        title={isPlaying ? "Pausar música" : "Reproducir George Michael"}
      >
        {/* Animated rings when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-30"></div>
        )}
        
        <div className={`relative z-10 transition-colors duration-300 ${isPlaying ? 'text-white' : 'text-valentine-500'}`}>
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Music size={24} />}
        </div>
      </button>

      {/* Floating Note Particles (Decorative) */}
      {isPlaying && (
        <>
           <div className="absolute -top-4 -right-2 text-valentine-500 animate-float opacity-0 text-sm">♪</div>
           <div className="absolute -top-8 left-0 text-valentine-400 animate-float opacity-0 animation-delay-500 text-lg">♫</div>
        </>
      )}
    </div>
  );
};
