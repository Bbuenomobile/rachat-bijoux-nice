import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Antibes, Cap d'Antibes & Cannes | Rachat Bijoux Nice",
  description: "D'Antibes et de son mythique Cap jusqu'à la Croisette de Cannes, notre cabinet intervient pour expertiser et racheter au meilleur cours les bijoux d'exception, métaux précieux et montres de grandes manufactures.",
  alternates: { canonical: `${site.url}/rachat-bijoux-antibes-cap-d-antibes-cannes` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-antibes-cap-d-antibes-cannes"
      district="Antibes, Cap d'Antibes & Cannes"
      postalCode="06600 / 06400"
      hero={{
        eyebrow: "Le Cœur Festif & Balnéaire de la Côte d'Azur",
        title: "Rachat Bijoux Antibes, Cap d'Antibes & Cannes",
        titleHighlight: "Baie des Milliardaires, Croisette & Palaces",
        intro: "D'Antibes et de son mythique Cap jusqu'à la Croisette de Cannes, notre cabinet intervient pour expertiser et racheter au meilleur cours les bijoux d'exception, métaux précieux et montres de grandes manufactures.",
        image: "/photos/vendre-bijou-monte.jpg",
        imageAlt: "Rachat Bijoux Antibes, Cap d'Antibes & Cannes",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Antibes, Cap d'Antibes & Cannes",
        paragraphs: [
          "Le Cap d'Antibes et la Croisette de Cannes partagent avec Nice une renommée internationale dans l'univers du luxe et des pierres précieuses. Nous proposons aux propriétaires de villas et résidences cannoises un service d'achat direct et transparent.",
          "Évitez les intermédiaires de commissionnement : notre cabinet formule des offres nettes fermes et procède au règlement immédiat par virement bancaire sécurisé.",
        ],
      }}
      highlights={[
        { title: "Cap d'Antibes & Cannes", desc: "Service à domicile dans tout le bassin ouest des Alpes-Maritimes." },
        { title: "Rachat Or & Lingots", desc: "Reprise de lingots LBMA et or 18k aux meilleurs cours officiels." },
        { title: "Joaillerie de Prestige", desc: "Estimation experte de bijoux d'exception montés de diamants." },
        { title: "Simplicité & Rapidité", desc: "Expertise en moins d'une heure et virement bancaire instantané." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Antibes, Cap d'Antibes & Cannes ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Antibes, Cap d'Antibes & Cannes ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
