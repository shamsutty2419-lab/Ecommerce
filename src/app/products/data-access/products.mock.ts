import { Product } from '../../shared/models/product.model';

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: 'Smartphone Pro',
    description: 'Flagship smartphone with stunning OLED display and excellent battery life.',
    price: 999,
    category: 'electronics',
    inStock: true,
    rating: 4.7,
    reviewsCount: 134,
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Lightweight Hoodie',
    description: 'Soft cotton hoodie, perfect for layering in all seasons.',
    price: 79,
    category: 'clothing',
    inStock: true,
    rating: 4.4,
    reviewsCount: 56,
    imageUrl:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Minimalist Chair',
    description: 'Modern ergonomic chair for your home office or living room.',
    price: 189,
    category: 'home',
    inStock: true,
    rating: 4.2,
    reviewsCount: 43,
    imageUrl:
      'https://images.unsplash.com/photo-1551292831-023188e78222?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with rich, immersive sound.',
    price: 249,
    category: 'electronics',
    inStock: true,
    rating: 4.8,
    reviewsCount: 201,
    imageUrl:
      'https://images.unsplash.com/photo-1518443895911-3c8a321d5c99?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Wool Scarf',
    description: 'Cozy wool scarf to keep you warm all winter long.',
    price: 39,
    category: 'accessories',
    inStock: true,
    rating: 4.5,
    reviewsCount: 67,
    imageUrl:
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Ceramic Vase',
    description: 'Handmade ceramic vase for fresh florals or dried arrangements.',
    price: 59,
    category: 'home',
    inStock: true,
    rating: 4.1,
    reviewsCount: 25,
    imageUrl:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80',
  },
];

