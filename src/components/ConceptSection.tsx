import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Sparkles, Smile, Coffee, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const ConceptSection: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Cuidado Humanizado',
      desc: 'Tratamento com afeto, respeito e tempo dedicado a cada necessidade específica do seu animalzinho.',
    },
    {
      icon: Sparkles,
      title: 'Tudo em um Só Lugar',
      desc: 'Banho, tosa, acompanhamento veterinário, boutique seleta e um café acolhedor em uma estrutura integrada.',
    },
    {
      icon: Coffee,
      title: 'Convivência Pet Friendly',
      desc: 'Ambiente aconchegante para você relaxar e curtir momentos especiais enquanto seu pet é atendido.',
    },
  ];

  return (
    <section id="conceito" className="py-24 bg-[#F0F8FB] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Photo 1: Dog */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4] bg-white">
                  <img
                    src="/divert_photos/photo_golden_bath.jpg"
                    alt="Golden Retriever aproveitando banho na Divert Pet"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#C4E6F2] shadow-sm">
                  <span className="text-2xl font-extrabold text-[#6F4325] block">
                    100%
                  </span>
                  <span className="text-xs font-semibold text-[#4A5D67] uppercase tracking-wider">
                    Dedicado ao conforto animal
                  </span>
                </div>
              </motion.div>

              {/* Photo 2: Cat & Dog togetherness */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-4 sm:space-y-6 pt-8 sm:pt-12"
              >
                <div className="p-5 rounded-2xl bg-[#F3ECE4] border border-[#E4D5C5] shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#6F4325] block mb-1">
                    Ambiente Integrado
                  </span>
                  <p className="text-xs text-[#5A351B] leading-relaxed">
                    Instalações modernas no Recreio dos Bandeirantes para toda a família.
                  </p>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4] bg-white">
                  <img
                    src="/divert_photos/photo_samoyed_gate.jpg"
                    alt="Samoieda sorridente no parquinho da Divert Pet"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

            </div>

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-[#C4E6F2] flex items-center gap-2.5">
              <span className="text-[#63C3D1] font-bold text-lg">✦</span>
              <span className="text-xs font-extrabold text-[#0F1419] tracking-wider uppercase">
                Experiência Divert Pet
              </span>
            </div>
          </div>

          {/* Right / Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
                Um Novo Conceito
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-6">
              Muito mais que um pet shop.
            </h2>

            <p className="text-lg text-[#3A4A53] leading-relaxed font-normal mb-8">
              Um espaço pensado para transformar os cuidados com seu pet em uma experiência especial. Na Divert Pet, você encontra diferentes serviços e momentos de cuidado, diversão e bem-estar em um só lugar.
            </p>

            {/* 3 Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/80 border border-[#C4E6F2]/70 hover:border-[#63C3D1] transition-all flex items-start gap-4 shadow-xs"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E1F1F7] text-[#1C6576] flex items-center justify-center shrink-0 mt-0.5">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F1419] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6E78] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action */}
            <div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-md hover:shadow-lg transition-all"
              >
                <span>FALAR COM NOSSA EQUIPE</span>
                <span className="text-[#93CEE4]">→</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
