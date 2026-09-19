import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Speech Bubble Reminder */}
      {bubbleOpen && (
        <div className="mb-3 max-w-[260px] bg-white text-[#0F1419] p-3 rounded-2xl shadow-2xl border border-[#C4E6F2] relative animate-fade-in flex items-start gap-2 text-xs">
          <div className="flex-1">
            <span className="font-bold text-[#6F4325] block">Divert Pet no WhatsApp</span>
            <span>Olá! Agende banho, tosa ou consulta diretamente com a gente. 🐾</span>
          </div>
          <button
            onClick={() => setBubbleOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar balão de ajuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-b border-r border-[#C4E6F2] transform rotate-45" />
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Conversar pelo WhatsApp"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 text-white drop-shadow-sm" />
      </a>
    </div>
  );
};
