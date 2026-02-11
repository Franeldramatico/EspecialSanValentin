import React from 'react';
import { Heart } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative large glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-valentine-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse-slow"></div>

      <div className="z-10 text-center max-w-2xl mx-4 glass-panel p-12 rounded-[3rem] shadow-2xl border border-white/70 animate-fade-in-up">
        
        <div className="mb-6 flex justify-center">
            <span className="bg-valentine-100 text-valentine-600 px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase border border-valentine-200 shadow-sm">
                Edición San Valentín
            </span>
        </div>

        <h1 className="font-hand text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-valentine-500 to-purple-500 mb-8 drop-shadow-sm leading-tight">
          ¿Listo para el destino?
        </h1>
        
        <p className="font-sans text-xl text-gray-700 mb-10 leading-relaxed font-medium">
          Este 14 de febrero, el universo tiene una sorpresa preparada.<br/>
          <span className="text-valentine-600 italic">Una historia interactiva</span> donde tus decisiones pueden llevarte al amor... o al caos absoluto.
        </p>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-gradient-to-r from-valentine-400 to-valentine-600 rounded-full hover:shadow-[0_10px_30px_rgba(255,77,109,0.4)] hover:-translate-y-1 focus:outline-none overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
          
          <span className="relative z-10 mr-3 text-2xl font-hand">Comenzar Partida</span>
          <Heart className="relative z-10 group-hover:scale-125 transition-transform duration-300" size={24} fill="currentColor" />
        </button>
      </div>
      
      <div className="absolute bottom-8 flex items-center gap-2 text-valentine-600 font-sans font-medium bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm animate-bounce">
        <Heart size={16} className="text-valentine-500" fill="currentColor" />
        Hecho con ❤️ para mi chica favorita
        <Heart size={16} className="text-valentine-500" fill="currentColor" />
        <Heart size={14} className="text-valentine-400" fill="currentColor" />
        <Heart size={12} className="text-valentine-300" fill="currentColor" />
      </div>
    </div>
  );
};
