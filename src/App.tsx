/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { ExperienceGallery } from './components/ExperienceGallery';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F8FB] text-[#0F1419] antialiased selection:bg-[#6F4325] selection:text-white">
      {/* Header Fixo & Elegante */}
      <Navbar />

      {/* Conteúdo Principal Fluido e Enxuto */}
      <main>
        {/* 1. Hero Principal com Logo Grande e Apresentação de Impacto */}
        <Hero />

        {/* 2. Sobre Nós & O Conceito Divert Pet */}
        <ConceptSection />

        {/* 3. Nossos Serviços (Unificado, Interativo e Completo) */}
        <ServicesShowcase />

        {/* 4. Galeria & Experiência com Instagram */}
        <ExperienceGallery />

        {/* 5. Localização & Mapa Interativo no Recreio */}
        <LocationSection />

        {/* 6. Chamada Final de Agendamento */}
        <FinalCta />
      </main>

      {/* Footer Premium em Preto com Todas as Informações */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
