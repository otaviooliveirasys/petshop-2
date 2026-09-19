import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SERVICES_LIST, CONTACT_INFO } from '../data';
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ScrollCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate translation range for desktop:
  // There are 5 cards. We want to translate from 0% to approximately -75% to show all 5 cards smoothly.
  const xTransform = useTransform(scrollYProgress, [0, 1], ['0%', '-76%']);

  // Track active card by scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      const idx = Math.min(
        SERVICES_LIST.length - 1,
        Math.max(0, Math.floor(val * SERVICES_LIST.length))
      );
      setActiveCardIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleManualNav = (direction: 'prev' | 'next') => {
    if (isMobile && scrollTrackRef.current) {
      const cardWidth = scrollTrackRef.current.clientWidth * 0.85;
      scrollTrackRef.current.scrollBy({
        left: direction === 'next' ? cardWidth : -cardWidth,
        behavior: 'smooth',
      });
      return;
    }

    if (containerRef.current) {
      const targetIdx =
        direction === 'next'
          ? Math.min(SERVICES_LIST.length - 1, activeCardIndex + 1)
          : Math.max(0, activeCardIndex - 1);
      
      const containerTop = containerRef.current.offsetTop;
      const totalScrollableDistance =
        containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll =
        containerTop + (targetIdx / (SERVICES_LIST.length - 1)) * totalScrollableDistance;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={containerRef}
      id="carrossel-experiencia"
      className="relative bg-gradient-to-b from-[#F0F8FB] via-[#E1F1F7] to-[#F0F8FB] lg:h-[360vh]"
    >
      {/* Desktop Sticky Viewport */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden py-16 lg:py-0">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 lg:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C4E6F2] shadow-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
                  Experiência Completa Divert Pet
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight">
                Cuidado em cada detalhe.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5D67] mt-1 max-w-xl">
                Explore os serviços pensados com carinho para oferecer bem-estar completo ao seu pet.
              </p>
            </div>

            {/* Navigation Indicators & Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-2 rounded-full border border-[#C4E6F2]">
                {SERVICES_LIST.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (containerRef.current) {
                        const containerTop = containerRef.current.offsetTop;
                        const totalScrollableDistance =
                          containerRef.current.offsetHeight - window.innerHeight;
                        window.scrollTo({
                          top: containerTop + (i / (SERVICES_LIST.length - 1)) * totalScrollableDistance,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    aria-label={`Ir para card ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeCardIndex === i
                        ? 'w-7 bg-[#6F4325]'
                        : 'w-2 bg-[#93CEE4] hover:bg-[#63C3D1]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleManualNav('prev')}
                  disabled={activeCardIndex === 0}
                  className="p-2.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs text-[#0F1419] hover:bg-[#F3ECE4] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Serviço anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleManualNav('next')}
                  disabled={activeCardIndex === SERVICES_LIST.length - 1}
                  className="p-2.5 rounded-full bg-[#6F4325] text-white shadow-xs hover:bg-[#5A351B] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Próximo serviço"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Content Track */}
        <div className="w-full relative">
          {/* Mobile Native Scroll Track */}
          <div
            ref={scrollTrackRef}
            className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-5 px-4 sm:px-6 pb-6 pt-2 no-scrollbar"
          >
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                className="min-w-[85vw] sm:min-w-[420px] snap-center shrink-0"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#C4E6F2]/80 flex flex-col h-full">
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#6F4325]">
                      {service.tag}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#0F1419]/80 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-full">
                      {service.number}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-[#63C3D1]">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0F1419] mt-1 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#4A5D67] leading-relaxed mb-5">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href={service.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] text-white hover:bg-[#5A351B] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{service.ctaText}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Framer Motion Horizontal Scroll Track */}
          <div className="hidden lg:block w-full overflow-hidden">
            <motion.div
              style={{ x: xTransform }}
              className="flex gap-8 pl-12 pr-24 py-4"
            >
              {SERVICES_LIST.map((service, index) => {
                const isActive = activeCardIndex === index;
                return (
                  <motion.div
                    key={service.id}
                    className="w-[820px] shrink-0"
                    animate={{
                      scale: isActive ? 1 : 0.96,
                      opacity: isActive ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-[#C4E6F2]/70 grid grid-cols-12 h-[480px] transition-all duration-300">
                      
                      {/* Left: Large Photo */}
                      <div className="col-span-7 relative h-full overflow-hidden bg-slate-100 group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                        {/* Top floating pill */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#6F4325] shadow-sm">
                          {service.tag}
                        </div>

                        {/* Bottom image caption */}
                        <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                          <p className="text-xs uppercase tracking-widest text-[#C4E6F2] font-semibold">
                            Divert Pet Care
                          </p>
                          <p className="text-xl font-bold font-display">
                            {service.title}
                          </p>
                        </div>
                      </div>

                      {/* Right: Content details */}
                      <div className="col-span-5 p-8 flex flex-col justify-between bg-gradient-to-b from-white to-[#FBF8F5]">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs uppercase font-extrabold tracking-widest text-[#63C3D1]">
                              {service.subtitle}
                            </span>
                            <span className="font-mono text-3xl font-extrabold text-[#6F4325]/40">
                              {service.number}
                            </span>
                          </div>

                          <h3 className="text-3xl font-bold text-[#0F1419] tracking-tight mb-4">
                            {service.title}
                          </h3>

                          <p className="text-base text-[#4A5D67] leading-relaxed mb-6 font-normal">
                            {service.description}
                          </p>

                          {/* Highlights checklist */}
                          <div className="space-y-2 mb-6">
                            {service.highlights.slice(0, 3).map((item, hi) => (
                              <div key={hi} className="flex items-start gap-2.5 text-xs text-[#3A4A53]">
                                <CheckCircle2 className="w-4 h-4 text-[#63C3D1] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action CTA */}
                        <div>
                          <a
                            href={service.ctaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white transition-all shadow-md hover:shadow-lg active:scale-98"
                          >
                            <MessageCircle className="w-4 h-4 text-white" />
                            <span>{service.ctaText}</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll helper hint on desktop */}
        <div className="hidden lg:flex justify-center mt-6 text-xs font-semibold text-[#5A6E78] uppercase tracking-widest items-center gap-2">
          <span>Role para continuar navegando pelos serviços</span>
          <span className="animate-bounce">↓</span>
        </div>

      </div>
    </div>
  );
};
