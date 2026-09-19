import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_LIST, CONTACT_INFO } from '../data';
import { Sparkles, ArrowRight, MessageCircle, Check } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const [activeModalService, setActiveModalService] = useState<string | null>(null);

  const selectedService = SERVICES_LIST.find((s) => s.id === activeModalService);

  const handleLearnMore = (serviceId: string) => {
    const targetElement = document.querySelector(`#${serviceId}`);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    } else {
      setActiveModalService(serviceId);
    }
  };

  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-[#F0F8FB] to-[#E1F1F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-4">
            Excelência e carinho em cada atendimento.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5D67]">
            Conheça todos os serviços integrados disponíveis na Divert Pet para você e seu melhor amigo.
          </p>
        </div>

        {/* 5 Premium Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-3xl overflow-hidden border border-[#C4E6F2]/70 shadow-md hover:shadow-2xl hover:border-[#63C3D1] transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Image Container with zoom & badge */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#6F4325] shadow-xs">
                    {service.tag}
                  </div>

                  {/* Top Number */}
                  <div className="absolute top-4 right-4 bg-[#0F1419]/80 backdrop-blur-md text-white font-mono text-xs font-bold px-3 py-1 rounded-full">
                    {service.number}
                  </div>

                  {/* Bottom title overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#93CEE4] font-semibold block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-sm text-[#4A5D67] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights list that reveals nicely */}
                  <div className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((item, hi) => (
                      <div key={hi} className="flex items-start gap-2 text-xs text-[#2A3B43]">
                        <Check className="w-3.5 h-3.5 text-[#63C3D1] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with "Saiba mais" and WhatsApp CTA */}
              <div className="p-6 pt-0 border-t border-[#F0F8FB] flex items-center gap-3">
                <button
                  onClick={() => handleLearnMore(service.id)}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#F0F8FB] hover:bg-[#E1F1F7] text-[#0F1419] border border-[#C4E6F2] transition-colors flex items-center justify-center gap-2 group-hover:border-[#63C3D1]"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6F4325]" />
                </button>

                <a
                  href={service.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#6F4325] hover:bg-[#5A351B] text-white transition-colors shadow-xs"
                  title={service.ctaText}
                  aria-label={service.ctaText}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
