import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Check, Droplets, Scissors, Wind, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const GroomingSection: React.FC = () => {
  const steps = [
    {
      icon: Droplets,
      title: 'Banhos Terapêuticos & Relaxantes',
      desc: 'Água em temperatura ideal com cosméticos hipoalergênicos e fórmulas suaves para pele e pelos.',
    },
    {
      icon: Scissors,
      title: 'Tosa Higiênica & da Raça',
      desc: 'Cortes precisos que valorizam a beleza natural e respeitam a anatomia e padrão da raça.',
    },
    {
      icon: Wind,
      title: 'Secagem Silenciosa & Climatizada',
      desc: 'Equipamentos modernos e silenciosos para evitar ansiedade e estresse no animal.',
    },
    {
      icon: Heart,
      title: 'Carinho & Manejo Sem Estresse',
      desc: 'Profissionais dedicados que respeitam o ritmo, temperamento e conforto de cada pet.',
    },
  ];

  return (
    <section id="banho-e-tosa" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F1F7] border border-[#C4E6F2] shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1C6576]">
                Estética & Bem-estar
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-6">
              Seu pet merece esse cuidado.
            </h2>

            <p className="text-lg text-[#3A4A53] leading-relaxed mb-8">
              Na Divert Pet, o momento do banho e tosa é uma experiência de bem-estar, higiene e muito carinho. Cuidamos do seu amigo de quatro patas com atenção individualizada, técnicas sem estresse e estrutura totalmente climatizada.
            </p>

            {/* Steps & benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F0F8FB] border border-[#C4E6F2]/70 hover:border-[#63C3D1] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white text-[#6F4325] flex items-center justify-center mb-3 shadow-xs">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F1419] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A6E78] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Prominent CTA */}
            <div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-agendar-banho-e-tosa"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>AGENDAR BANHO E TOSA</span>
              </a>
            </div>

          </motion.div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F0F8FB] aspect-[3/4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
                  alt="Pet tomando banho com carinho e água quentinha"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#93CEE4]">Higiene Completa</span>
                  <p className="text-sm font-semibold">Produtos suaves e hipoalergênicos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F0F8FB] aspect-[3/4] sm:mt-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
                  alt="Cãozinho tosquiado e cheiroso"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#93CEE4]">Acabamento Impecável</span>
                  <p className="text-sm font-semibold">Pelagem limpa, macia e brilhante</p>
                </div>
              </motion.div>

            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border border-[#C4E6F2] shadow-xl flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#63C3D1]" />
              <span className="text-xs font-extrabold text-[#0F1419] tracking-wider uppercase">
                Toalhas esterilizadas e ambiente higienizado
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
