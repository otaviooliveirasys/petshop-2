import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { Logo } from './Logo';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F8FB] via-[#E1F1F7] to-[#0F1419] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl p-8 sm:p-14 lg:p-16 border-2 border-[#C4E6F2] shadow-2xl text-center overflow-hidden"
        >
          {/* Decorative background blurs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4E6F2]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E4D5C5]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Logo center top */}
          <div className="flex justify-center mb-6">
            <Logo size="lg" showText={false} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F1F7] border border-[#C4E6F2] shadow-xs mb-6">
            <Sparkles className="w-4 h-4 text-[#6F4325]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C6576]">
              Atendimento Exclusivo • Recreio dos Bandeirantes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F1419] tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
            Seu pet merece viver{' '}
            <span className="text-[#6F4325] inline-block">essa experiência.</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#3A4A53] max-w-xl mx-auto font-normal leading-relaxed mb-10">
            Agende seu atendimento e venha conhecer a Divert Pet.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-final-whatsapp"
              className="inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-2xl text-base sm:text-lg font-bold tracking-wider uppercase bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-xl hover:shadow-2xl transition-all"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <span>AGENDAR PELO WHATSAPP</span>
            </a>
          </motion.div>

          {/* Subtitle reassurance */}
          <p className="text-xs text-[#5A6E78] mt-6 flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 text-[#63C3D1]" />
            <span>Resposta rápida • Sem filas • Horário reservado com carinho</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};
