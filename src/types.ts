export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  ctaText: string;
  ctaLink: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'banho' | 'veterinaria' | 'loja' | 'cafe' | 'daycare';
  imageUrl: string;
  aspect: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  url: string;
}
