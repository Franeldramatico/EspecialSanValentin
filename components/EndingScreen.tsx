import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface EndingScreenProps {
  title: string;
  narrative: string;
  onRestart: () => void;
}

export const EndingScreen: React.FC<EndingScreenProps> = ({ title, narrative, onRestart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-2xl w-full z-10 text-center space-y-8">
        <div className="space-y-2">
          <p className="text-valentine-300 font-hand text-2xl tracking-wide uppercase">Final Desbloqueado</p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-valentine-300 to-purple-400 pb-2">
            {title}
          </h1>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
          <p className="text-lg md:text-xl leading-relaxed font-sans text-gray-200">
            {narrative}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-8 py-3 bg-valentine-600 hover:bg-valentine-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-valentine-900/50"
        >
          <RefreshCcw size={20} />
          Jugar otra vez
        </button>
      </div>
    </div>
  );
};
