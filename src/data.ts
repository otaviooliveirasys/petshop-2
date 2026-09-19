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
  phones: [
    { label: 'WhatsApp Atendimento', number: '(21) 97640-1017', link: 'https://wa.me/5521976401017' },
    { label: 'Telefone Divert Pet', number: '(21) 3489-1561', link: 'tel:+552134891561' },
  ],
};

export interface CafeMenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
}

export const DIVERT_CAFE_MENU: CafeMenuItem[] = [
  { id: '1', name: 'Croissant de Quatro Queijos', price: 'R$ 6,00', category: 'Salgados' },
  { id: '2', name: 'Croissant de Frango com Requeijão', price: 'R$ 6,00', category: 'Salgados' },
  { id: '3', name: 'Croissant Integral de Peito de Peru', price: 'R$ 6,00', category: 'Salgados' },
  { id: '4', name: 'Croissant de Chocolate', price: 'R$ 6,00', category: 'Salgados' },
  { id: '5', name: 'Joelho', price: 'R$ 6,00', category: 'Salgados' },
  { id: '6', name: 'Hambúrguer', price: 'R$ 6,00', category: 'Salgados' },
];

export const SERVICES_LIST: ServiceCard[] = [
  {
    id: 'banho-e-tosa',
    number: '01',
    title: 'Banho & Tosa',
    subtitle: 'Estética Animal & Bem-estar',
    description: 'Cuidados carinhosos e relaxantes para deixar seu pet limpo, cheiroso e revigorado.',
    image: '/divert_photos/photo_golden_bath.jpg',
    tag: '🐶 Banho & Hidratação',
    ctaText: 'Agendar Banho e Tosa',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Banhos relaxantes com água na temperatura ideal',
      'Produtos hipoalergênicos e cosméticos selecionados',
      'Tosa higiênica e tosa padrão com acabamento delicado',
      'Secagem suave e ambiente acolhedor no Recreio'
    ]
  },
  {
    id: 'daycare',
    number: '02',
    title: 'Daycare & Parquinho',
    subtitle: 'Socialização & Diversão',
    description: 'Parquinho completo com escorregador, piscina de bolinhas, área molhada e muita alegria supervisionada.',
    image: '/divert_photos/photo_pomeranian_slide.jpg',
    tag: '🐾 Parquinho & Diversão',
    ctaText: 'Agendar Atendimento',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Piscina de bolinhas e brinquedos interativos',
      'Escorregador e circuito de atividades recreativas',
      'Área com grama sintética e fonte de água fresca',
      'Supervisão contínua com muito carinho e respeito'
    ]
  },
  {
    id: 'cafeteria',
    number: '03',
    title: 'Divert Café',
    subtitle: 'Espaço Pet Friendly',
    description: 'Um café aconchegante com salgados frescos e croissants quentinhos para você relaxar com seu pet.',
    image: '/divert_photos/photo_cafe_menu.jpg',
    tag: '☕ Cafeteria & Salgados',
    ctaText: 'Ver Cardápio no WhatsApp',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Croissants recheados e salgados variados por apenas R$ 6,00',
      'Café saboroso e bebidas enquanto seu pet é atendido',
      'Mesas confortáveis e convivência pet friendly real',
      'Pedidos e informações: (21) 97640-1017 e (21) 3489-1561'
    ]
  },
  {
    id: 'pet-shop',
    number: '04',
    title: 'Pet Shop & Boutique',
    subtitle: 'Mimos & Cuidados',
    description: 'Bolinhas, mordedores, brinquedos estimulantes e acessórios selecionados para cães e gatos.',
    image: '/divert_photos/photo_golden_toy.jpg',
    tag: '🛍️ Brinquedos & Acessórios',
    ctaText: 'Consultar Produtos',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Bolinhas e brinquedos resistentes de alta qualidade',
      'Acessórios, caminhas, guias e peitorais anatômicos',
      'Itens de higiene, hidratação e cuidado diário',
      'Atendimento consultivo para as necessidades do seu pet'
    ]
  },
  {
    id: 'veterinaria',
    number: '05',
    title: 'Veterinária',
    subtitle: 'Saúde & Longevidade',
    description: 'Acompanhamento clínico e preventivo focado na saúde e na tranquilidade do seu animal.',
    image: '/divert_photos/photo_dogs_sunglasses.jpg',
    tag: '🩺 Saúde & Prevenção',
    ctaText: 'Falar pelo WhatsApp',
    ctaLink: CONTACT_INFO.whatsappUrl,
    highlights: [
      'Acompanhamento preventivo e clínico humanizado',
      'Ambiente calmo para evitar estresse durante a consulta',
      'Atendimento dedicado a cães e gatos',
      'Orientações claras para o bem-estar da família'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Golden Retriever aproveitando água fresca e banho relaxante',
    category: 'banho',
    imageUrl: '/divert_photos/photo_golden_bath.jpg',
    aspect: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'g2',
    title: 'Lulu da Pomerânia super estiloso na piscina de bolinhas',
    category: 'daycare',
    imageUrl: '/divert_photos/photo_pomeranian_ballpit.jpg',
    aspect: 'col-span-1',
  },
  {
    id: 'g3',
    title: 'Duplinha curtindo a piscina de óculos de sol',
    category: 'daycare',
    imageUrl: '/divert_photos/photo_dogs_sunglasses.jpg',
    aspect: 'col-span-1',
  },
  {
    id: 'g4',
    title: 'Samoieda sorridente no parquinho da Divert Pet',
    category: 'daycare',
    imageUrl: '/divert_photos/photo_samoyed_gate.jpg',
    aspect: 'col-span-1',
  },
  {
    id: 'g5',
    title: 'Pomerânia se divertindo no escorregador azul',
    category: 'daycare',
    imageUrl: '/divert_photos/photo_pomeranian_slide.jpg',
    aspect: 'col-span-1',
  },
  {
    id: 'g6',
    title: 'Golden Retrievers se refrescando na piscina molhada',
    category: 'daycare',
    imageUrl: '/divert_photos/photo_goldens_pool.jpg',
    aspect: 'col-span-1',
  },
  {
    id: 'g7',
    title: 'Golden feliz relaxando com brinquedo de bolinha',
    category: 'loja',
    imageUrl: '/divert_photos/photo_golden_toy.jpg',
    aspect: 'col-span-1',
  },
  {
    id: 'g8',
    title: 'Croissants e delícias do cardápio do Divert Café',
    category: 'cafe',
    imageUrl: '/divert_photos/photo_cafe_menu.jpg',
    aspect: 'col-span-1',
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    imageUrl: '/divert_photos/photo_pomeranian_slide.jpg',
    caption: 'Muita diversão no escorregador do parquinho Divert Pet! Aqui a felicidade é garantida! 🐾✨',
    likes: '184',
    comments: '22',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    id: 'ig2',
    imageUrl: '/divert_photos/photo_dogs_sunglasses.jpg',
    caption: 'Estilo e atitude pura! Nossos amiguinhos curtindo a área molhada no Recreio dos Bandeirantes! 😎🐶',
    likes: '249',
    comments: '35',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    id: 'ig3',
    imageUrl: '/divert_photos/photo_golden_bath.jpg',
    caption: 'Refrescância total! Aquele momento gostoso de banho que todo pet merece receber! 🛁💙',
    likes: '210',
    comments: '28',
    url: CONTACT_INFO.instagramUrl,
  },
  {
    id: 'ig4',
    imageUrl: '/divert_photos/photo_pomeranian_ballpit.jpg',
    caption: 'Pronto para a festa na piscina de bolinhas! Venha viver a experiência Divert Pet! 🎈🎉',
    likes: '195',
    comments: '19',
    url: CONTACT_INFO.instagramUrl,
  },
];
