import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const LocationSection: React.FC = () => {
  // Google Maps embed URL centered on Rua Antonio Baptista Bittencourt 325, Recreio dos Bandeirantes, RJ
  const encodedAddress = encodeURIComponent(
    'Rua Antonio Baptista Bittencourt, 325, Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-250'
  );
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F1F7] border border-[#C4E6F2] shadow-xs mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#6F4325]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C6576]">
              Onde Estamos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-4">
            Venha conhecer a Divert Pet.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5D67]">
            Um espaço moderno, acolhedor e com estacionamento fácil no coração do Recreio dos Bandeirantes.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Address Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#F0F8FB] to-[#E1F1F7] p-8 sm:p-10 rounded-3xl border border-[#C4E6F2] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white text-[#6F4325] flex items-center justify-center shadow-sm mb-6">
                <Compass className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F1419] mb-4">
                Nosso Endereço
              </h3>

              <div className="space-y-4 text-[#3A4A53]">
                <div className="p-4 rounded-2xl bg-white/80 border border-white flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#6F4325] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#5A6E78] block">
                      Endereço Oficial
                    </span>
                    <p className="text-base font-bold text-[#0F1419] mt-0.5">
                      {CONTACT_INFO.address.street}
                    </p>
                    <p className="text-sm text-[#4A5D67]">
                      {CONTACT_INFO.address.neighborhood}
                    </p>
                    <p className="text-sm text-[#4A5D67]">
                      {CONTACT_INFO.address.cityState}
                    </p>
                    <p className="text-xs text-[#5A6E78] font-mono mt-1">
                      CEP: {CONTACT_INFO.address.cep}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-white flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#6F4325] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#5A6E78] block">
                      Telefones de Contato
                    </span>
                    <p className="text-sm font-semibold text-[#0F1419] mt-0.5">
                      <a href="tel:+5521976401017" className="hover:underline text-[#6F4325] mr-2">(21) 97640-1017</a>
                      •
                      <a href="tel:+552134891561" className="hover:underline text-[#6F4325] ml-2">(21) 3489-1561</a>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-white flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#63C3D1] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#5A6E78] block">
                      Agendamentos & Dúvidas
                    </span>
                    <p className="text-sm font-semibold text-[#0F1419] mt-0.5">
                      Atendimento rápido via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-[#C4E6F2]/80 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-como-chegar"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>COMO CHEGAR</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-[#0F1419] border border-[#C4E6F2] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#6F4325]" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </motion.div>

          {/* Right / Interactive Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#C4E6F2] shadow-lg relative min-h-[420px] bg-slate-100"
          >
            <iframe
              title="Mapa Divert Pet Recreio"
              src={mapsEmbedUrl}
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating pill over map */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#C4E6F2] flex items-center gap-2.5 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#63C3D1] animate-ping" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0F1419]">DIVERT PET</span>
                <span className="text-[10px] text-[#5A6E78]">Recreio dos Bandeirantes, RJ</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
