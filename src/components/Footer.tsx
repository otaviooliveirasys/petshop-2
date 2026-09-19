import React from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data';
import { Instagram, MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1419] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 mb-4 inline-block">
              <Logo size="md" showText={true} />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Pet shop, banho e tosa, veterinária e cafeteria em um só lugar. Uma experiência moderna, acolhedora e completa para cuidar e mimar seu pet no Recreio dos Bandeirantes.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#6F4325] hover:border-[#6F4325] transition-colors"
                aria-label="WhatsApp da Divert Pet"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-colors"
                aria-label="Instagram da Divert Pet"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#63C3D1] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#conceito" className="hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">Experiência</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#63C3D1] mb-4">
              Serviços Divert Pet
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">🐶 Banho & Tosa</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">🩺 Atendimento Veterinário</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">🛍️ Pet Shop & Boutique</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">☕ Cafeteria Pet Friendly</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">🐾 Daycare & Diversão</a>
              </li>
            </ul>
          </div>

          {/* Contact / Address Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#63C3D1] mb-4">
              Endereço
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6F4325] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">
                    {CONTACT_INFO.address.street}
                  </p>
                  <p>{CONTACT_INFO.address.neighborhood}</p>
                  <p>{CONTACT_INFO.address.cityState}</p>
                  <p className="font-mono text-xs text-slate-500 mt-1">
                    CEP {CONTACT_INFO.address.cep}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#63C3D1] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Agendar atendimento via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DIVERT PET. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
