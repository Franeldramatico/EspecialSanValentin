import React, { useState } from 'react';
import { HeartCrack, Sparkles } from 'lucide-react';

interface NameInputProps {
  onNameConfirmed: () => void;
}

export const NameInput: React.FC<NameInputProps> = ({ onNameConfirmed }) => {
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().toLowerCase();
    
    if (cleanName === 'aranza') {
      onNameConfirmed();
    } else {
      const msgs = [
        "¡Ay, bobita! Ese no es tu nombre.",
        "Mmm... creo que te confundiste de identidad.",
        "¿Me estás engañando? Tú eres Aranza.",
        "Inténtalo de nuevo, princesa.",
        "Nop. Solo Aranza puede jugar esto."
      ];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      setErrorMsg(randomMsg);
      
      // Clear error after 3 seconds
      setTimeout(() => setErrorMsg(null), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-valentine-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border-2 border-valentine-100">
        <div className="flex justify-center mb-6">
          <div className="bg-valentine-100 p-4 rounded-full">
            <Sparkles className="text-valentine-500 w-8 h-8" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 font-sans mb-2">
          Identifícate, viajera
        </h2>
        <p className="text-center text-gray-500 mb-8 font-sans">
          Para acceder a esta historia, necesito saber quién eres.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 rounded-xl border-gray-300 bg-gray-50 focus:bg-white focus:border-valentine-400 focus:ring-valentine-400 transition-colors outline-none text-center text-lg shadow-inner"
              placeholder="Aranza"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-valentine-500 text-white py-3 rounded-xl font-bold hover:bg-valentine-600 transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-100"
          >
            Confirmar
          </button>

          {/* Toast Notification for Error */}
          {errorMsg && (
            <div className="absolute -top-20 left-0 right-0 mx-auto flex justify-center animate-bounce">
              <div className="bg-rose-100 border border-rose-200 text-rose-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold">
                <HeartCrack size={16} />
                {errorMsg}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
