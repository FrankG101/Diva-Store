export interface Product {
  id: string;
  name: string;
  category: "pantaloni" | "maglie" | "top" | "abiti" | "giacche" | "accessori";
  categoryLabel: string;
  image: string;
  imageAlt: string;
  sizes: string;
  price: string;
  badge?: string;
  badgeType?: "default" | "outline";
}

export const products: Product[] = [
  // ── Pantaloni ──
  {
    id: "pantalone-palazzo-fluido",
    name: "Pantalone Palazzo Fluido",
    category: "pantaloni",
    categoryLabel: "Pantaloni",
    image:
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80",
    imageAlt: "Pantalone Palazzo Fluido",
    sizes: "XS · S · M · L",
    price: "€ 79",
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "pantalone-sigaretta-sartoriale",
    name: "Pantalone a Sigaretta Sartoriale",
    category: "pantaloni",
    categoryLabel: "Pantaloni",
    image:
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80",
    imageAlt: "Pantalone a Sigaretta Sartoriale",
    sizes: "S · M · L · XL",
    price: "€ 89",
  },
  {
    id: "pantalone-lino-rilassato",
    name: "Pantalone in Lino Relaxed",
    category: "pantaloni",
    categoryLabel: "Pantaloni",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
    imageAlt: "Pantalone in Lino Relaxed",
    sizes: "XS · S · M · L",
    price: "€ 69",
    badge: "Must Have",
    badgeType: "outline",
  },

  // ── Maglie ──
  {
    id: "maglia-filato-leggero",
    name: "Maglia in Filato Leggero",
    category: "maglie",
    categoryLabel: "Maglie",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    imageAlt: "Maglia in Filato Leggero",
    sizes: "S · M · L",
    price: "€ 59",
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "cardigan-morbido-estate",
    name: "Cardigan Morbido Casual",
    category: "maglie",
    categoryLabel: "Maglie",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
    imageAlt: "Cardigan Morbido Casual",
    sizes: "Misura Unica",
    price: "€ 75",
  },
  {
    id: "maglia-costine-scollo-v",
    name: "Maglia a Costine Scollo a V",
    category: "maglie",
    categoryLabel: "Maglie",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    imageAlt: "Maglia a Costine Scollo a V",
    sizes: "XS · S · M · L",
    price: "€ 49",
    badge: "Continuativo",
    badgeType: "outline",
  },

  // ── Top & Camicie ──
  {
    id: "blusa-seta-avorio",
    name: "Blusa in Seta Avorio",
    category: "top",
    categoryLabel: "Top & Camicie",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    imageAlt: "Blusa in Seta Avorio",
    sizes: "XS · S · M · L · XL",
    price: "€ 89",
    badge: "Must Have",
    badgeType: "outline",
  },
  {
    id: "camicia-puro-lino",
    name: "Camicia Puro Lino",
    category: "top",
    categoryLabel: "Top & Camicie",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    imageAlt: "Camicia Puro Lino",
    sizes: "XS · S · M · L",
    price: "€ 79",
  },
  {
    id: "top-cashmere-misto",
    name: "Top Spalline Sottili",
    category: "top",
    categoryLabel: "Top & Camicie",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
    imageAlt: "Top Spalline Sottili",
    sizes: "S · M · L",
    price: "€ 45",
  },

  // ── Abiti ──
  {
    id: "abito-midi-seta",
    name: "Abito Midi Fluido",
    category: "abiti",
    categoryLabel: "Abiti",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    imageAlt: "Abito Midi Fluido",
    sizes: "XS · S · M · L",
    price: "€ 119",
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "abito-essenziale-nero",
    name: "Abito Essenziale Nero",
    category: "abiti",
    categoryLabel: "Abiti",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    imageAlt: "Abito Essenziale Nero",
    sizes: "XS · S · M · L",
    price: "€ 129",
  },
  {
    id: "abito-chiffon-soft",
    name: "Abito Chiffon Soft",
    category: "abiti",
    categoryLabel: "Abiti",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    imageAlt: "Abito Chiffon Soft",
    sizes: "XS · S · M",
    price: "€ 95",
    badge: "Continuativo",
    badgeType: "outline",
  },
  {
    id: "tubino-sartoriale",
    name: "Tubino Casual Chic",
    category: "abiti",
    categoryLabel: "Abiti",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    imageAlt: "Tubino Casual Chic",
    sizes: "S · M · L · XL",
    price: "€ 109",
  },

  // ── Giacche ──
  {
    id: "blazer-sartoriale-cammello",
    name: "Blazer Strutturato Cammello",
    category: "giacche",
    categoryLabel: "Giacche",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    imageAlt: "Blazer Strutturato Cammello",
    sizes: "XS · S · M",
    price: "€ 139",
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "cappotto-lana",
    name: "Giacca Lunga Primaverile",
    category: "giacche",
    categoryLabel: "Giacche",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    imageAlt: "Giacca Lunga Primaverile",
    sizes: "S · M · L",
    price: "€ 159",
  },
  {
    id: "blazer-minimal-nero",
    name: "Blazer Versatile Nero",
    category: "giacche",
    categoryLabel: "Giacche",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    imageAlt: "Blazer Versatile Nero",
    sizes: "XS · S · M · L",
    price: "€ 119",
  },

  // ── Accessori ──
  {
    id: "borsa-strutturata-pelle",
    name: "Borsa a Tracolla Pratica",
    category: "accessori",
    categoryLabel: "Accessori",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80",
    imageAlt: "Borsa a Tracolla Pratica",
    sizes: "Misura Unica",
    price: "€ 69",
    badge: "Novità",
    badgeType: "default",
  },
  {
    id: "cintura-minimale-pelle",
    name: "Cintura in Pelle Elegante",
    category: "accessori",
    categoryLabel: "Accessori",
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
    imageAlt: "Cintura in Pelle Elegante",
    sizes: "S · M · L",
    price: "€ 35",
  },
  {
    id: "foulard-seta-stampata",
    name: "Foulard Stampa Marina",
    category: "accessori",
    categoryLabel: "Accessori",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=600&q=80",
    imageAlt: "Foulard Stampa Marina",
    sizes: "Misura Unica",
    price: "€ 29",
  },
  {
    id: "orecchini-essenziali-dorati",
    name: "Orecchini a Cerchio Dorati",
    category: "accessori",
    categoryLabel: "Accessori",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
    imageAlt: "Orecchini a Cerchio Dorati",
    sizes: "Misura Unica",
    price: "€ 25",
  },
];

/** Products featured on homepage carousel (first 6) */
export const featuredProducts = products.slice(0, 6);
