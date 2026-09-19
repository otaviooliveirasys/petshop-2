import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS, CONTACT_INFO, INSTAGRAM_POSTS } from '../data';
import { Sparkles, Instagram, Heart, MessageCircle, ExternalLink, X } from 'lucide-react';
import { GalleryItem } from '../types';

export const ExperienceGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  // Display all real photos in an elegant, responsive 4-column mosaic
  const featuredGallery = GALLERY_ITEMS;

  return (
    <section id="experiencia" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F1F7] border border-[#C4E6F2] shadow-xs mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1C6576]">
                Vida na Divert Pet
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1419] tracking-tight">
              Galeria & Conexão Real
            </h2>
            <p className="text-sm sm:text-base text-[#4A5D67] mt-1 max-w-xl">
              Confira momentos reais de cuidado, banho, escorregador, piscina de bolinhas, café e acompanhe nosso dia a dia no Instagram.
            </p>
          </div>

          <div>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-md hover:shadow-lg transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>SEGUIR @DIVERT_PET</span>
            </a>
          </div>
        </div>

        {/* 8 Grid Photo Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuredGallery.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#C4E6F2] aspect-square bg-slate-100 cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#93CEE4] font-bold">
                  {item.category}
                </span>
                <p className="text-xs font-semibold line-clamp-2 leading-snug">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-2xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 p-2 text-white hover:text-slate-300"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              className="rounded-2xl max-h-[75vh] object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-white text-center mt-3 text-sm font-semibold">
              {activeImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
