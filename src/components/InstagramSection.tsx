import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { INSTAGRAM_POSTS, CONTACT_INFO } from '../data';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-[#F0F8FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C4E6F2] shadow-xs mb-3">
            <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F1419]">
              @divert_pet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-4">
            Fique por dentro da Divert Pet.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5D67] mb-8">
            Acompanhe nossas histórias, bastidores do banho e tosa, dicas de cuidados e momentos fofos diários.
          </p>

          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-seguir-instagram"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span>SEGUIR NO INSTAGRAM</span>
          </a>
        </div>

        {/* 4 Cards Grid Style Instagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#C4E6F2] shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay with likes and comments */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold text-sm">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-xs text-white">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#3A4A53] line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>

                <div className="mt-3 pt-2.5 border-t border-[#F0F8FB] flex items-center justify-between text-[11px] text-[#63C3D1] font-semibold">
                  <span>Ver no Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
