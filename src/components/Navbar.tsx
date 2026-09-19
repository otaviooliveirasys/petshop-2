import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data';
import { MessageCircle, Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre nós', href: '#conceito' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Banho e Tosa', href: '#banho-e-tosa' },
    { label: 'Veterinária', href: '#veterinaria' },
    { label: 'Pet Shop', href: '#pet-shop' },
    { label: 'Cafeteria', href: '#cafeteria' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#localizacao' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F0F8FB]/90 backdrop-blur-md shadow-sm border-b border-[#C4E6F2]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Left */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center group cursor-pointer focus:outline-none"
          aria-label="Divert Pet Início"
        >
          <Logo size="sm" showText={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium text-[#181F26] hover:text-[#6F4325] hover:bg-white/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button Right */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-whatsapp"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase bg-[#6F4325] text-white hover:bg-[#5A351B] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>AGENDAR PELO WHATSAPP</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#6F4325] text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/80 text-[#0F1419] border border-[#C4E6F2]/80 shadow-xs focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-[#F0F8FB] border-b border-[#C4E6F2] shadow-xl px-6 py-6 transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-[#0F1419] hover:bg-white/80 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#63C3D1] text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#C4E6F2]/80 flex flex-col gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold tracking-wider uppercase bg-[#6F4325] text-white shadow-md active:scale-98 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              <span>AGENDAR PELO WHATSAPP</span>
            </a>

            <p className="text-center text-xs text-[#5A6E78] mt-1">
              Recreio dos Bandeirantes, Rio de Janeiro - RJ
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
