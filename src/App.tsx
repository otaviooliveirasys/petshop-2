/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollCarousel } from './components/ScrollCarousel';
import { ConceptSection } from './components/ConceptSection';
import { ServicesGrid } from './components/ServicesGrid';
import { GroomingSection } from './components/GroomingSection';
import { VetSection } from './components/VetSection';
import { PetShopSection } from './components/PetShopSection';
import { CafeSection } from './components/CafeSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F8FB] text-[#0F1419] antialiased selection:bg-[#6F4325] selection:text-white">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Principal */}
        <Hero />

        {/* 2. Carrossel Interativo Durante a Rolagem */}
        <ScrollCarousel />

        {/* 3. Seção "Um Novo Conceito" (Sobre Nós) */}
        <ConceptSection />

        {/* 4. Grade de Serviços Premium */}
        <ServicesGrid />

        {/* 5. Banho e Tosa */}
        <GroomingSection />

        {/* 6. Atendimento Veterinário */}
        <VetSection />

        {/* 7. Pet Shop & Boutique */}
        <PetShopSection />

        {/* 8. Cafeteria Pet Friendly */}
        <CafeSection />

        {/* 9. Galeria / Experiência */}
        <GallerySection />

        {/* 10. Localização & Mapa */}
        <LocationSection />

        {/* 11. Instagram */}
        <InstagramSection />

        {/* 12. Chamada Final para Ação */}
        <FinalCta />
      </main>

      {/* Footer Elegante em Fundo Preto */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
