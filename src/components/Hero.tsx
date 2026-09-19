import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data';
import { MessageCircle, ArrowDown, Sparkles, Heart, ShieldCheck, Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToConcept = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#conceito');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-28 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#E1F1F7] via-[#F0F8FB] to-[#F0F8FB]"
    >
      {/* Subtle organic light-blue & warm accent background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C4E6F2]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-10%] w-[450px] h-[450px] bg-[#E4D5C5]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Brand Logo Banner */}
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-[#C4E6F2] shadow-xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-[#63C3D1] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
                Divert Pet • Recreio dos Bandeirantes, RJ
              </span>
            </div>

            {/* Logo in large presentation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-8"
            >
              <div className="p-3 sm:p-4 rounded-3xl bg-white/70 border border-white/90 shadow-sm backdrop-blur-md inline-block">
                <Logo size="hero" showText={false} />
              </div>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F1419] tracking-tight leading-[1.1] mb-6">
              Um lugar para cuidar,{' '}
              <span className="text-[#6F4325] block sm:inline">divertir</span> e{' '}
              <span className="text-[#1C6576]">mimar seu pet.</span>
            </h1>

            {/* Secondary Text */}
            <p className="text-lg sm:text-xl text-[#3A4A53] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10">
              Pet shop, banho e tosa, veterinária e cafeteria em um só lugar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold tracking-wider uppercase bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>AGENDAR PELO WHATSAPP</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#conceito"
                onClick={handleScrollToConcept}
                id="hero-cta-concept"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm sm:text-base font-bold tracking-wider uppercase bg-white/90 hover:bg-white text-[#0F1419] border border-[#C4E6F2] shadow-sm hover:shadow-md transition-all"
              >
                <span>CONHEÇA A DIVERT PET</span>
                <ArrowDown className="w-4 h-4 text-[#6F4325]" />
              </motion.a>
            </div>

            {/* Quick trust metrics/pills */}
            <div className="mt-10 pt-8 border-t border-[#C4E6F2]/80 grid grid-cols-3 gap-4 w-full max-w-lg">
              <div className="flex flex-col">
                <span className="text-xs text-[#5A6E78] uppercase tracking-wider font-semibold">Espaço</span>
                <span className="text-sm sm:text-base font-bold text-[#0F1419]">Pet Friendly</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#5A6E78] uppercase tracking-wider font-semibold">Atendimento</span>
                <span className="text-sm sm:text-base font-bold text-[#0F1419]">Humanizado</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#5A6E78] uppercase tracking-wider font-semibold">Estrutura</span>
                <span className="text-sm sm:text-base font-bold text-[#0F1419]">Completa</span>
              </div>
            </div>
          </motion.div>

          {/* Right / Visual Pet Imagery Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Framed Realistic Photo */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gradient-to-tr from-[#93CEE4] to-[#F0F8FB]">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85"
                  alt="Cachorro feliz e bem cuidado na Divert Pet"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <p className="text-xs uppercase tracking-widest font-semibold text-[#93CEE4]">
                    Experiência Exclusiva
                  </p>
                  <p className="text-lg font-bold font-display leading-tight">
                    Carinho, bem-estar e diversão para o seu melhor amigo.
                  </p>
                </div>
              </div>

              {/* Floating Realistic Badge 1: Cat Photo */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -top-6 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3 max-w-[210px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=150&q=80"
                  alt="Gato tranquilo"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#0F1419] leading-tight">
                    Cães & Gatos
                  </span>
                  <span className="text-[10px] text-[#5A6E78]">
                    Atendimento dedicado
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Coffee & Pet Friendly */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3ECE4] text-[#6F4325] flex items-center justify-center">
                  <Coffee className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F1419]">
                    Cafeteria Integrada
                  </span>
                  <span className="text-[11px] text-[#6F4325] font-medium">
                    Aproveite enquanto ele relaxa
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
