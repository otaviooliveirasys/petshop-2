import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_LIST, CONTACT_INFO, DIVERT_CAFE_MENU } from '../data';
import { Sparkles, MessageCircle, CheckCircle2, ArrowRight, UtensilsCrossed, Phone } from 'lucide-react';

export const ServicesShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(SERVICES_LIST[0].id);

  const activeService =
    SERVICES_LIST.find((s) => s.id === activeTabId) || SERVICES_LIST[0];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-[#F0F8FB] to-[#E1F1F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
              Nossos Serviços Integrados
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1419] tracking-tight mb-3">
            Tudo o que seu pet precisa em um só lugar.
          </h2>
          <p className="text-sm sm:text-base text-[#4A5D67]">
            Clique em cada serviço para conhecer nossa estrutura e fotos reais dos nossos hóspedes e clientes.
          </p>
        </div>

        {/* Interactive Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SERVICES_LIST.map((service) => {
            const isActive = service.id === activeTabId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#6F4325] text-white shadow-lg scale-102'
                    : 'bg-white/80 hover:bg-white text-[#3A4A53] border border-[#C4E6F2] hover:border-[#63C3D1]'
                }`}
              >
                <span>{service.tag.split(' ')[0]}</span>
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Card Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#C4E6F2]/80 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Photo Side */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[440px] overflow-hidden bg-slate-100">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#6F4325] shadow-xs">
                  {activeService.tag}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#93CEE4] font-semibold">
                    {activeService.subtitle}
                  </span>
                  <p className="text-xl font-bold font-display">
                    {activeService.title}
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-white to-[#FBF8F5]">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#63C3D1]">
                      Divert Pet • {activeService.subtitle}
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#6F4325]/30">
                      {activeService.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1419] tracking-tight mb-4">
                    {activeService.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4A5D67] leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  {/* If Cafeteria: Display Authentic Divert Café Menu */}
                  {activeService.id === 'cafeteria' ? (
                    <div className="mb-6 p-4 rounded-2xl bg-[#F4EDE5] border border-[#E3D4C4]">
                      <div className="flex items-center gap-2 mb-3">
                        <UtensilsCrossed className="w-4 h-4 text-[#6F4325]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#6F4325]">
                          Cardápio Divert Café • Salgados
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {DIVERT_CAFE_MENU.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-2 rounded-lg bg-white/90 border border-[#E8DEC8]"
                          >
                            <span className="font-medium text-[#2A3B43] pr-2">{item.name}</span>
                            <span className="font-bold text-[#6F4325] shrink-0">{item.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#E3D4C4]/80 flex flex-wrap items-center justify-between text-[11px] text-[#5A351B]">
                        <span>Pedidos e Encomendas:</span>
                        <div className="flex items-center gap-3 font-semibold">
                          <a href="tel:+5521976401017" className="hover:underline flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#6F4325]" /> (21) 97640-1017
                          </a>
                          <a href="tel:+552134891561" className="hover:underline">
                            (21) 3489-1561
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Highlights for other services */
                    <div className="space-y-2.5 mb-8">
                      {activeService.highlights.map((item, hi) => (
                        <div key={hi} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2A3B43]">
                          <CheckCircle2 className="w-4 h-4 text-[#63C3D1] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Action Button */}
                <div className="pt-4 border-t border-[#F0F8FB]">
                  <a
                    href={activeService.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>{activeService.ctaText}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
