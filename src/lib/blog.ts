export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guide-vendre-diamants-nice-cote-d-azur",
    title: "Guide de Vente des Diamants à Nice : Obtenir le Cours Rapaport Réel",
    excerpt: "Comprendre la formation des cours mondiaux du diamant et valoriser au plus haut un solitaire ou une pierre d'héritage sur la Côte d'Azur.",
    date: "18 Septembre 2026",
    category: "Diamants",
    readingTime: "5 min",
    image: "/photos/diamant-loupe.jpg",
  },
  {
    slug: "comprendre-les-4c-du-diamant-nice",
    title: "Les 4C du Diamant Expliqués par Nos Gemmologues au Carré d'Or de Nice",
    excerpt: "Carat, Color, Clarity, Cut : comment ces quatre critères déterminent la rareté et le prix d'un diamant naturel en laboratoire.",
    date: "14 Septembre 2026",
    category: "Gemmologie",
    readingTime: "6 min",
    image: "/photos/tailles-diamants.jpg",
  },
  {
    slug: "certificats-gia-vs-hrd-ssef-nice",
    title: "Certificats GIA, HRD, SSEF à Nice : Pourquoi Font-ils Toute la Différence ?",
    excerpt: "L'autorité des grands laboratoires indépendants et leur impact direct sur la liquidité et la cotation de vos pierres précieuses.",
    date: "08 Septembre 2026",
    category: "Certificats",
    readingTime: "5 min",
    image: "/photos/diamants-expertise.jpg",
  },
  {
    slug: "vendre-montre-luxe-rolex-patek-richard-mille-nice",
    title: "Vendre une Montre de Prestige à Nice : Rolex, Patek Philippe, Audemars Piguet",
    excerpt: "Analyse des facteurs clés du marché secondaire horloger : cohésion des composants, état d'origine non poli et boîte d'époque.",
    date: "02 Septembre 2026",
    category: "Horlogerie",
    readingTime: "7 min",
    image: "/photos/montre-luxe.jpg",
  },
  {
    slug: "valeur-haute-joaillerie-signee-cartier-van-cleef-bulgari-nice",
    title: "Haute Joaillerie Signée : Pourquoi Cartier et Van Cleef Valent Bien Plus que l'Or",
    excerpt: "La prime d'attractivité des grandes signatures joaillières face au piège du simple rachat au poids des métaux précieux.",
    date: "26 Août 2026",
    category: "Haute Joaillerie",
    readingTime: "5 min",
    image: "/photos/bijoux-obagem.jpg",
  },
  {
    slug: "fiscalite-or-lingots-pieces-france",
    title: "Fiscalité de l'Or en France : TMP ou TPV, Quelle Option Choisir à Nice ?",
    excerpt: "Guide fiscal pratique pour optimiser la revente de lingots LBMA et monnaies d'or (Napoléon, Souverain) en toute légalité.",
    date: "16 Août 2026",
    category: "Fiscalité Or",
    readingTime: "6 min",
    image: "/photos/lingot-or.jpg",
  },
];
