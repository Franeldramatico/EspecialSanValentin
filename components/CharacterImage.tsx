import React from 'react';
import { SoobinEmotion } from '../types';
import { Heart } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL || '/';

const IMAGE_MAP: Record<SoobinEmotion, string> = {
  [SoobinEmotion.PROUD]: `${baseUrl}images/soobin%20orgulloso.png`,
  [SoobinEmotion.SHY]: `${baseUrl}images/soobin%20timidez.png`,
  [SoobinEmotion.HANDSOME]: `${baseUrl}images/soobin%20galan.png`,
  [SoobinEmotion.DISAPPOINTED]: `${baseUrl}images/soobin%20decepcionado.png`,
  [SoobinEmotion.SARCASTIC]: `${baseUrl}images/soobin%20sarcasmo.png`,
  [SoobinEmotion.CONFUSED]: `${baseUrl}images/soobin%20confundido.png`,
  [SoobinEmotion.ANGRY]: `${baseUrl}images/soobin%20enojado.png`,
  [SoobinEmotion.HAPPY]: `${baseUrl}images/soobin%20feliz.png`,
  [SoobinEmotion.FAKE_INDIFFERENCE]: `${baseUrl}images/soobin%20Fingida%20indiferencia.png`,
  [SoobinEmotion.SURPRISED]: `${baseUrl}images/soobin%20sorprendido.png`,
  [SoobinEmotion.BLUSHED]: `${baseUrl}images/soobin%20sonrojado.png`,
  [SoobinEmotion.SUPER_FURIOUS]: `${baseUrl}images/soobin%20super%20enojado.png`,
  [SoobinEmotion.NEUTRAL]: `${baseUrl}images/soobin%20galan.png`,
  [SoobinEmotion.SAD_BUT_GRATEFUL]: `${baseUrl}images/soobin%20feliz.png`,
};

interface CharacterImageProps {
  emotion: SoobinEmotion;
}

export const CharacterImage: React.FC<CharacterImageProps> = ({ emotion }) => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-end justify-center">

      {/* Background Glow Effect behind Soobin */}
      <div className="absolute inset-0 bg-gradient-to-t from-valentine-100/50 via-transparent to-transparent z-0 pointer-events-none"></div>

      {/* Animated Blobs for vibe */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-valentine-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 w-full max-w-md h-full flex flex-col justify-end items-center transition-all duration-700">

        {/* Floating Hearts */}
        <div className="absolute top-20 right-10 text-valentine-500 animate-pulse-slow">
          <Heart size={24} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/3 left-10 text-valentine-400 animate-float">
          <Heart size={16} fill="currentColor" />
        </div>
        <div className="absolute top-10 left-16 text-valentine-300 animate-float" style={{ animationDelay: '1s' }}>
          <Heart size={12} fill="currentColor" />
        </div>

        {/* The Image Itself */}
        <img
          key={emotion} // Forces re-render animation
          src={IMAGE_MAP[emotion]}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
          alt={`Soobin feeling ${emotion}`}
          className="w-auto h-auto max-h-[85vh] object-contain drop-shadow-2xl animate-fade-in-up mask-image-gradient"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        />

        {/* Stylish Nameplate */}
        <div className="absolute bottom-8 bg-white/30 backdrop-blur-md border border-white/50 px-8 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform cursor-default">
          <span className="font-hand text-3xl text-valentine-600 drop-shadow-sm tracking-wide">Soobin</span>
        </div>
      </div>
    </div>
  );
};
