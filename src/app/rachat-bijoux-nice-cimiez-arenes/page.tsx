import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Nice Cimiez | Rachat Bijoux Nice",
  description: "Colline résidentielle historique prisée par la reine Victoria et l'aristocratie européenne, Cimiez se caractérise par ses palais et hôtels particuliers grandioses. Rachat spécialisé de bijoux anciens et patrimoniaux.",
  alternates: { canonical: `${site.url}/rachat-bijoux-nice-cimiez-arenes` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-nice-cimiez-arenes"
      district="Cimiez & Arènes"
      postalCode="06000"
      hero={{
        eyebrow: "Élégance Aristocratique & Histoire",
        title: "Rachat Bijoux Nice Cimiez",
        titleHighlight: "Boulevard de Cimiez & Arènes Romaines",
        intro: "Colline résidentielle historique prisée par la reine Victoria et l'aristocratie européenne, Cimiez se caractérise par ses palais et hôtels particuliers grandioses. Rachat spécialisé de bijoux anciens et patrimoniaux.",
        image: "/photos/bijou-ancien.jpg",
        imageAlt: "Rachat Bijoux Nice Cimiez",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Cimiez & Arènes",
        paragraphs: [
          "Le quartier de Cimiez recèle de magnifiques pièces d'héritage : parures Belle Époque, broches en platine serties de diamants taille ancienne, saphirs et émeraudes naturelles. Nous vous accompagnons pour estimer équitablement ces trésors familiaux.",
          "Nous collaborons régulièrement avec les études notariales et les héritiers pour rédiger des inventaires estimatifs précis et procéder au rachat direct.",
        ],
      }}
      highlights={[
        { title: "Bijoux d'Époque & d'Héritage", desc: "Valorisation de la manufacture historique et des gemmes d'origine." },
        { title: "Successions & Partages", desc: "Expertise certifiée pour successions et partages patrimoniaux." },
        { title: "Or Boursier & Monnaies", desc: "Rachat de Napoléons, Souverains et lingots d'or 24 carats." },
        { title: "Conseil Personnalisé", desc: "Accompagnement fiscal et déontologique sans engagement." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Cimiez & Arènes ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Cimiez & Arènes ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
