export interface Product {
  id: string;
  name: string;
  category: "pantaloni" | "maglie" | "top" | "abiti" | "giacche" | "accessori";
  image: string;
  sizes: string;
  price: number;
  badge?: string;
  badgeType?: "default" | "outline";
}

export const products: Product[] = [
  // ── Pantaloni ──
  {
    id: "pantalone-palazzo-fluido",
    name: "Pantalone Palazzo Fluido",
    category: "pantaloni",
    image:
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80",
    sizes: "XS · S · M · L",
    price: 79,
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "pantalone-lino-rilassato",
    name: "Pantalone in Lino Relaxed",
    category: "pantaloni",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
    sizes: "XS · S · M · L",
    price: 69,
    badge: "Must Have",
    badgeType: "outline",
  },

  // ── Maglie ──
  {
    id: "maglia-costine-scollo-v",
    name: "Maglia a Costine Scollo a V",
    category: "maglie",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    sizes: "XS · S · M · L",
    price: 49,
    badge: "Continuativo",
    badgeType: "outline",
  },

  // ── Top & Camicie ──
  {
    id: "blusa-seta-avorio",
    name: "Blusa in Seta Avorio",
    category: "top",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    sizes: "XS · S · M · L · XL",
    price: 89,
    badge: "Must Have",
    badgeType: "outline",
  },

  // ── Abiti ──
  {
    id: "abito-midi-seta",
    name: "Abito Midi Fluido",
    category: "abiti",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    sizes: "XS · S · M · L",
    price: 119,
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "abito-essenziale-nero",
    name: "Abito Essenziale Nero",
    category: "abiti",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    sizes: "XS · S · M · L",
    price: 129,
  },

  // ── Giacche ──
  {
    id: "blazer-sartoriale-cammello",
    name: "Blazer Strutturato Cammello",
    category: "giacche",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    sizes: "XS · S · M",
    price: 139,
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "blazer-minimal-nero",
    name: "Blazer Versatile Nero",
    category: "giacche",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    sizes: "XS · S · M · L",
    price: 119,
  },

  // ── Accessori ──
  {
    id: "borsa-strutturata-pelle",
    name: "Borsa a Tracolla Pratica",
    category: "accessori",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
    sizes: "Misura Unica",
    price: 69,
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "cintura-minimale-pelle",
    name: "Cintura in Pelle Elegante",
    category: "accessori",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
    sizes: "S · M · L",
    price: 35,
  },
];

/** Products featured on homepage carousel (first 6) */
export const featuredProducts = products.slice(0, 6);
