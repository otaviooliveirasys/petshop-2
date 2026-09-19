import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Heart, Sparkles, MessageCircle, Clock, Wifi } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const CafeSection: React.FC = () => {
  return (
    <section id="cafeteria" className="py-24 bg-gradient-to-b from-[#FBF8F5] via-[#F3ECE4] to-[#FBF8F5] relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4D5C5] shadow-xs mb-4">
              <Coffee className="w-3.5 h-3.5 text-[#6F4325]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#5A351B]">
                Cafeteria Pet Friendly
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-6 leading-tight">
              Um café para você.{' '}
              <span className="text-[#6F4325] block">Um lugar para eles.</span>
            </h2>

            <p className="text-lg text-[#3A4A53] leading-relaxed mb-8">
              Enquanto seu pet passa pelo banho, tosa ou consulta, aproveite uma pausa deliciosa em nossa cafeteria. Um ambiente aconchegante, moderno e pensado para tutores e animais conviverem em perfeita harmonia.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-white/90 border border-[#E4D5C5] shadow-xs">
                <Coffee className="w-5 h-5 text-[#6F4325] mb-2" />
                <h4 className="text-sm font-bold text-[#0F1419] mb-1">Cafés Especiais</h4>
                <p className="text-xs text-[#5A6E78]">Grãos selecionados e bebidas preparadas na hora.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-[#E4D5C5] shadow-xs">
                <Heart className="w-5 h-5 text-[#63C3D1] mb-2" />
                <h4 className="text-sm font-bold text-[#0F1419] mb-1">Pet Welcome</h4>
                <p className="text-xs text-[#5A6E78]">Espaço amplo para cães e gatos relaxarem ao seu lado.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-[#E4D5C5] shadow-xs">
                <Wifi className="w-5 h-5 text-[#6F4325] mb-2" />
                <h4 className="text-sm font-bold text-[#0F1419] mb-1">Conexão & Conforto</h4>
                <p className="text-xs text-[#5A6E78]">Wi-Fi rápido e mesas confortáveis para trabalhar ou bater papo.</p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>CONHECER A CAFETERIA</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Image 1: Tutor with pet in coffee */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] bg-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80"
                  alt="Pessoa desfrutando de café com cão dócil no colo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4D5C5]">Convivência Leve</span>
                  <p className="text-sm font-semibold">Seu pet sempre com você</p>
                </div>
              </motion.div>

              {/* Image 2: Artisan coffee cup & cafe table */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] bg-white sm:mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                  alt="Xícara de café artesanal no balcão acolhedor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E4D5C5]">Momento Especial</span>
                  <p className="text-sm font-semibold">Pausa tranquila durante o dia</p>
                </div>
              </motion.div>

            </div>

            {/* Central Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#E4D5C5] shadow-xl flex items-center gap-2.5">
              <span className="text-xs font-extrabold text-[#6F4325] tracking-wider uppercase">
                Pet Friendly de Verdade • Recreio dos Bandeirantes
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
