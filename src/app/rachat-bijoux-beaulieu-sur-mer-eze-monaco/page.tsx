import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Beaulieu, Èze & Monaco | Rachat Bijoux Nice",
  description: "De Beaulieu-sur-Mer et Èze-Bord-de-Mer jusqu'à Monaco et Cap d'Ail, nous intervenons auprès d'une clientèle résidente pour l'achat comptant de haute joaillerie, montres de prestige et diamants certifiés.",
  alternates: { canonical: `${site.url}/rachat-bijoux-beaulieu-sur-mer-eze-monaco` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-beaulieu-sur-mer-eze-monaco"
      district="Beaulieu, Èze & Monaco"
      postalCode="06310 / 06360 / 98000"
      hero={{
        eyebrow: "La Riviera Orientale & Principauté",
        title: "Rachat Bijoux Beaulieu, Èze & Monaco",
        titleHighlight: "Baie des Fourmis, Cap d'Ail & Principauté de Monaco",
        intro: "De Beaulieu-sur-Mer et Èze-Bord-de-Mer jusqu'à Monaco et Cap d'Ail, nous intervenons auprès d'une clientèle résidente pour l'achat comptant de haute joaillerie, montres de prestige et diamants certifiés.",
        image: "/photos/montre-luxe.jpg",
        imageAlt: "Rachat Bijoux Beaulieu, Èze & Monaco",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Beaulieu, Èze & Monaco",
        paragraphs: [
          "L'axe reliant Nice à Monaco en passant par Beaulieu-sur-Mer concentre un patrimoine joaillier d'un éclat incomparable. Nous répondons aux demandes d'arbitrage de collections joaillières et d'optimisation d'actifs en or physique.",
          "Nous organisons des expertises privées au Carré d'Or de Nice ou nous déplaçons directement auprès de nos clients résidents à Beaulieu, Cap d'Ail et Monaco.",
        ],
      }}
      highlights={[
        { title: "Proximité Monaco & Beaulieu", desc: "Interventions rapides pour les résidents de la Principauté et de la Riviera." },
        { title: "Montres de Haute Complication", desc: "Rachat de Patek Philippe, Audemars Piguet, Richard Mille, Rolex." },
        { title: "Pierres Rares non Chauffées", desc: "Saphirs de Ceylan, émeraudes colombiennes et rubis birmans." },
        { title: "Paiement en Euros Rapide", desc: "Virement bancaire instantané sur votre établissement bancaire." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Beaulieu, Èze & Monaco ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Beaulieu, Èze & Monaco ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
      ]}
      relatedAreas={[
        { label: "Promenade des Anglais", href: "/rachat-bijoux-nice-promenade-des-anglais" },
        { label: "Carré d'Or", href: "/rachat-bijoux-nice-carre-d-or-place-massena" },
        { label: "Mont Boron", href: "/rachat-bijoux-nice-mont-boron-cap-de-nice" },
        { label: "Cap-Ferrat", href: "/rachat-bijoux-saint-jean-cap-ferrat-villefranche" },
      ]}
    />
  );
}
