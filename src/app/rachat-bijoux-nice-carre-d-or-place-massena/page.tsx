import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Nice Carré d'Or | Rachat Bijoux Nice",
  description: "Le Carré d'Or, entre la Place Masséna, l'Avenue de Verdun et la Rue Paradis, concentre les boutiques des plus illustres joailliers mondiaux. Notre cabinet vous accueille pour expertiser et racheter vos pièces de prestige.",
  alternates: { canonical: `${site.url}/rachat-bijoux-nice-carre-d-or-place-massena` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-nice-carre-d-or-place-massena"
      district="Carré d'Or & Place Masséna"
      postalCode="06000"
      hero={{
        eyebrow: "Le Quartier du Luxe & de l'Horlogerie",
        title: "Rachat Bijoux Nice Carré d'Or",
        titleHighlight: "Place Masséna, Avenue de Verdun & Rue Paradis",
        intro: "Le Carré d'Or, entre la Place Masséna, l'Avenue de Verdun et la Rue Paradis, concentre les boutiques des plus illustres joailliers mondiaux. Notre cabinet vous accueille pour expertiser et racheter vos pièces de prestige.",
        image: "/photos/bague-diamant-or-blanc.jpg",
        imageAlt: "Rachat Bijoux Nice Carré d'Or",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Carré d'Or & Place Masséna",
        paragraphs: [
          "Au cœur du Carré d'Or niçois, nous offrons une alternative confidentielle et avantageuse aux circuits de revente classiques. Nous rachetons au plus haut les pièces signées Cartier, Van Cleef & Arpels, Boucheron, Bulgari, ainsi que les montres Rolex, Patek Philippe et Audemars Piguet.",
          "Bénéficiez de l'expertise de gemmologues diplômés au sein de salons sécurisés, avec une estimation gratuite et immédiate de vos joyaux.",
        ],
      }}
      highlights={[
        { title: "Salons Privés Carré d'Or", desc: "Accueil sur rendez-vous au cœur du quartier joaillier de Nice." },
        { title: "Haute Joaillerie Signée", desc: "Prime substantielle accordée aux signatures iconiques mondiales." },
        { title: "Rolex & Patek Philippe", desc: "Évaluation chronométrique et rachat immédiat de montres de luxe." },
        { title: "Sécurité Maximale", desc: "Transactions encadrées et traçabilité bancaire irréprochable." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Carré d'Or & Place Masséna ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Carré d'Or & Place Masséna ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
