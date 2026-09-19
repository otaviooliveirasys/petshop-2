import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const PetShopSection: React.FC = () => {
  const categories = [
    {
      title: 'Brinquedos Estimulantes',
      desc: 'Pelúcias resistentes, brinquedos interativos e mordedores seguros para entretenimento e gasto de energia.',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80',
      tag: 'Diversão & Mente Ativa',
    },
    {
      title: 'Acessórios & Passeio',
      desc: 'Guias, coleiras anatômicas, peitorais com alta durabilidade e design sofisticado para passeios confortáveis.',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
      tag: 'Conforto & Estilo',
    },
    {
      title: 'Caminhas & Descanso',
      desc: 'Caminhas ergonômicas, tocas aconchegantes e almofadas laváveis com tecidos nobres para sono reparador.',
      image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80',
      tag: 'Sono & Relaxamento',
    },
    {
      title: 'Higiene & Cuidados',
      desc: 'Escovas, hidratantes de patinhas, lenços específicos e cosméticos de uso diário de marcas selecionadas.',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
      tag: 'Cuidado Diário',
    },
  ];

  return (
    <section id="pet-shop" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F1F7] border border-[#C4E6F2] shadow-xs mb-4">
              <ShoppingBag className="w-3.5 h-3.5 text-[#6F4325]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1C6576]">
                Boutique Divert Pet
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1419] tracking-tight mb-4">
              Produtos e mimos selecionados para seu pet.
            </h2>
            <p className="text-base sm:text-lg text-[#4A5D67]">
              Uma curadoria criteriosa de brinquedos, caminhas, acessórios e cuidados essenciais para cães e gatos exigentes.
            </p>
          </div>

          <div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-[#6F4325] hover:bg-[#5A351B] text-white shadow-sm hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONSULTAR PRODUTOS</span>
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[#F0F8FB] rounded-3xl overflow-hidden border border-[#C4E6F2]/70 shadow-xs hover:shadow-xl hover:border-[#63C3D1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#6F4325]">
                    {cat.tag}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0F1419] mb-2 group-hover:text-[#6F4325] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#5A6E78] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6F4325] hover:text-[#5A351B] transition-colors"
                >
                  <span>Verificar disponibilidade</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
