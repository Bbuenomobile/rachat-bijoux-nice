import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;
  const now = new Date().toISOString();

  const routes = [
    // 1 Homepage
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: 'weekly' as const },

    // 7 Services & Gemological Lab
    { url: `${baseUrl}/rachat-diamant-nice`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-anciens-nice`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-haute-joaillerie-signee-nice`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-lingots-pieces-or-nice`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-montres-luxe-nice`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-pierres-precieuses-nice`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/laboratoire-gemmologique-nice`, priority: 0.85, changeFrequency: 'monthly' as const },

    // 8 Districts & Côte d'Azur Resorts
    { url: `${baseUrl}/rachat-bijoux-nice-promenade-des-anglais`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-nice-carre-d-or-place-massena`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-nice-mont-boron-cap-de-nice`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-nice-cimiez-arenes`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-nice-vieux-nice-port-lympia`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-saint-jean-cap-ferrat-villefranche`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-beaulieu-sur-mer-eze-monaco`, priority: 0.85, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/rachat-bijoux-antibes-cap-d-antibes-cannes`, priority: 0.8, changeFrequency: 'weekly' as const },

    // 7 Institutional
    { url: `${baseUrl}/a-propos`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/comment-ca-marche`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/faq`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/estimation-gratuite`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/mentions-legales`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/politique-confidentialite`, priority: 0.4, changeFrequency: 'yearly' as const },

    // 1 Blog Index + 6 Blog Articles
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog/guide-vendre-diamants-nice-cote-d-azur`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/comprendre-les-4c-du-diamant-nice`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/certificats-gia-vs-hrd-ssef-nice`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/vendre-montre-luxe-rolex-patek-richard-mille-nice`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/valeur-haute-joaillerie-signee-cartier-van-cleef-bulgari-nice`, priority: 0.75, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/fiscalite-or-lingots-pieces-france`, priority: 0.75, changeFrequency: 'monthly' as const },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
