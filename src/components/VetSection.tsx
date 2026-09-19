import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, HeartPulse, Stethoscope, Shield, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const VetSection: React.FC = () => {
  const commitments = [
    {
      title: 'Consultas Clínicas & Avaliação',
      desc: 'Acompanhamento do estado geral de saúde do seu animal, com olhar atento e minucioso.',
    },
    {
      title: 'Medicina Preventiva',
      desc: 'Orientações de vacinação, vermifugação e bem-estar para garantir vida longa e ativa.',
    },
    {
      title: 'Ambiente Calmo & Seguro',
      desc: 'Espaço higienizado, pensado para reduzir a agitação de cães e o medo de felinos.',
    },
    {
      title: 'Comunicação Clara com Tutores',
      desc: 'Transparência total em cada etapa do atendimento para você tomar as melhores decisões.',
    },
  ];

  return (
    <section id="veterinaria" className="py-24 bg-[#F0F8FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Professional Vet Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80"
                alt="Ambiente veterinário acolhedor e profissional na Divert Pet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-xs uppercase tracking-widest text-[#93CEE4] font-semibold">
                  Saúde & Longevidade
                </span>
                <p className="text-xl font-bold font-display mt-1">
                  Atendimento que coloca a saúde e o respeito em primeiro lugar.
                </p>
              </div>
            </div>

            {/* Small Floating Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#C4E6F2] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E1F1F7] text-[#1C6576] flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0F1419]">
                  Cuidado Preventivo
                </span>
                <span className="text-[11px] text-[#5A6E78]">
                  Cães e gatos
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right / Information & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs mb-4">
              <Stethoscope className="w-3.5 h-3.5 text-[#6F4325]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
                Atendimento Veterinário
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-6">
              Cuidado e saúde em primeiro lugar.
            </h2>

            <p className="text-lg text-[#3A4A53] leading-relaxed mb-8">
              Acompanhar a saúde do seu companheiro com atenção e carinho é essencial para uma convivência longa e cheia de alegria. Nosso espaço veterinário foi desenhado para oferecer conforto, tranquilidade e atendimento humanizado.
            </p>

            {/* Commitments list */}
            <div className="space-y-4 mb-8">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#C4E6F2]/70 shadow-xs flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#63C3D1] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#0F1419]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5A6E78] mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-falar-whatsapp-vet"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>FALAR PELO WHATSAPP</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
