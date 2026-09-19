import { ServiceCard, GalleryItem, InstagramPost } from './types';

export const CONTACT_INFO = {
  whatsappUrl: 'https://wa.link/zmeowm',
  instagramUrl: 'https://www.instagram.com/divert_pet/',
  address: {
    street: 'Rua Antonio Baptista Bittencourt, 325, Loja C',
    neighborhood: 'Recreio dos Bandeirantes',
    cityState: 'Rio de Janeiro - RJ',
    cep: '22790-250',
    full: 'Rua Antonio Baptista Bittencourt, 325, Loja C - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-250',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Antonio+Baptista+Bittencourt+325+Loja+C+Recreio+dos+Bandeirantes+Rio+de+Janeiro+RJ+22790-250',
  },
  phoneFormatted: '(21) 99999-9999', // display placeholder if needed
};

export const SERVICES_LIST: ServiceCard[] = [
  {
    id: 'banho-e-tosa',
    number: '01',
    title: 'Banho & Tosa',
    subtitle: 'Estética Animal Premium',
    description: 'Cuidados especiais para deixar seu pet limpo, cheiroso e ainda mais feliz.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
    tag: '🐶 Estética & Higiene',
    ctaText: 'Agendar Banho e Tosa',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Banhos relaxantes com produtos selecionados',
      'Tosa higiênica e tosa da raça com acabamento impecável',
      'Secagem suave e ambiente climatizado',
      'Cuidado carinhoso e humanizado em cada detalhe'
    ]
  },
  {
    id: 'veterinaria',
    number: '02',
    title: 'Veterinária',
    subtitle: 'Saúde & Longevidade',
    description: 'Cuidados veterinários para acompanhar a saúde e o bem-estar do seu pet.',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80',
    tag: '🩺 Saúde & Bem-estar',
    ctaText: 'Falar pelo WhatsApp',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Acompanhamento preventivo e clínico',
      'Atendimento cuidadoso e sem estresse para cães e gatos',
      'Ambiente calmo, higienizado e acolhedor',
      'Foco total no bem-estar e conforto do animal'
    ]
  },
  {
    id: 'pet-shop',
    number: '03',
    title: 'Pet Shop',
    subtitle: 'Boutique Selecionada',
    description: 'Produtos, acessórios e tudo o que seu pet precisa.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
    tag: '🛍️ Boutique & Acessórios',
    ctaText: 'Falar pelo WhatsApp',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Alimentação de alta qualidade e petiscos selecionados',
      'Brinquedos educativos e estimulantes',
      'Caminhas anatômicas, guias, coleiras e peitorais modernos',
      'Itens de cuidado diário de marcas conceituadas'
    ]
  },
  {
    id: 'cafeteria',
    number: '04',
    title: 'Cafeteria',
    subtitle: 'Espaço Pet Friendly',
    description: 'Um espaço agradável para você aproveitar enquanto seu pet também curte a experiência.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    tag: '☕ Café & Convivência',
    ctaText: 'Falar pelo WhatsApp',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Café especial, bebidas e ambiente acolhedor para tutores',
      'Área planejada para você relaxar lado a lado com seu pet',
      'Climatização agradável e mesas confortáveis',
      'Pausa perfeita durante o banho ou após as compras'
    ]
  },
  {
    id: 'daycare',
    number: '05',
    title: 'Daycare / Diversão',
    subtitle: 'Socialização & Afeto',
    description: 'Um ambiente pensado para diversão, interação e momentos especiais.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
    tag: '🐾 Socialização & Alegria',
    ctaText: 'Agendar Atendimento',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Atividades recreativas e estímulo físico equilibrado',
      'Monitoramento atento e equipe dedicada',
      'Espaço seguro, higienizado e enriquecido',
      'Momentos de socialização que deixam seu pet alegre e tranquilo'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Golden Retriever pós-banho e escovação',
    category: 'banho',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'g2',
    title: 'Gato Siamês em consulta preventiva',
    category: 'veterinaria',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1',
  },
  {
    id: 'g3',
    title: 'Café especial servido na nossa cafeteria pet friendly',
    category: 'cafe',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1',
  },
  {
    id: 'g4',
    title: 'Acessórios e coleiras premium na boutique',
    category: 'loja',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1',
  },
  {
    id: 'g5',
    title: 'Cães se divertindo em momento de recreação',
    category: 'daycare',
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1 md:col-span-2',
  },
  {
    id: 'g6',
    title: 'Cuidado atencioso e carinhoso no banho',
    category: 'banho',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1',
  },
  {
    id: 'g7',
    title: 'Tutor relaxando com seu cachorro na cafeteria',
    category: 'cafe',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    aspect: 'col-span-1',
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=600&q=80',
    caption: 'Dia de spa completo na Divert Pet! Olha esse sorriso e pelo macio! 🛁✨ #DivertPet #Recreio',
    likes: '142',
    comments: '18',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    id: 'ig2',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    caption: 'Momento café enquanto o amigão toma aquele banho caprichado. Conforto para ambos! ☕🐶 #PetFriendly',
    likes: '198',
    comments: '24',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    id: 'ig3',
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80',
    caption: 'Carinho, paciência e respeito em cada atendimento. Nossa prioridade é o bem-estar! 🩺💙',
    likes: '230',
    comments: '31',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    id: 'ig4',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80',
    caption: 'Novidades na boutique: caminhas ultraconfortáveis e brinquedos para todas as idades. 🧸✨',
    likes: '165',
    comments: '15',
    url: CONTACT_INFO.instagramUrl,
  },
];
