import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Momentos' },
    { id: 'banho', label: 'Banho & Tosa' },
    { id: 'veterinaria', label: 'Atendimento' },
    { id: 'cafe', label: 'Cafeteria' },
    { id: 'loja', label: 'Boutique' },
    { id: 'daycare', label: 'Diversão' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-24 bg-[#F0F8FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#6F4325]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
              Galeria de Experiências
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-4">
            Momentos que encantam tutores e pets.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5D67]">
            Confira registros autênticos do dia a dia na Divert Pet: carinho, alegria e cuidado em cada detalhe.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#6F4325] text-white shadow-md'
                  : 'bg-white text-[#4A5D67] hover:bg-[#E1F1F7] hover:text-[#0F1419] border border-[#C4E6F2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mosaic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-white aspect-[4/3] sm:aspect-square bg-slate-200 cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#93CEE4] font-bold">
                    {item.category.toUpperCase()}
                  </span>
                  <p className="text-base font-bold font-display mt-0.5">
                    {item.title}
                  </p>
                  
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/90">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              className="max-h-[75vh] w-auto rounded-3xl object-contain shadow-2xl border border-white/20"
            />

            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-widest text-[#93CEE4] font-bold">
                {activeImage.category.toUpperCase()}
              </span>
              <p className="text-lg font-bold mt-1">
                {activeImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
