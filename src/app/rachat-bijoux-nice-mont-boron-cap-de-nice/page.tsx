import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Nice Mont Boron | Rachat Bijoux Nice",
  description: "Surplombant la mer entre Nice et la rade de Villefranche, le Mont Boron et le Cap de Nice abritent des domaines et villas de maître remarquables. Service d'expertise joaillière à domicile en toute confidentialité.",
  alternates: { canonical: `${site.url}/rachat-bijoux-nice-mont-boron-cap-de-nice` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-nice-mont-boron-cap-de-nice"
      district="Mont Boron & Cap de Nice"
      postalCode="06300"
      hero={{
        eyebrow: "L'Enclave d'Exception de la Riviera",
        title: "Rachat Bijoux Nice Mont Boron",
        titleHighlight: "Cap de Nice & Villas Panoramiques",
        intro: "Surplombant la mer entre Nice et la rade de Villefranche, le Mont Boron et le Cap de Nice abritent des domaines et villas de maître remarquables. Service d'expertise joaillière à domicile en toute confidentialité.",
        image: "/photos/atelier-2.jpg",
        imageAlt: "Rachat Bijoux Nice Mont Boron",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Mont Boron & Cap de Nice",
        paragraphs: [
          "Les propriétés du Mont Boron et du Cap de Nice abritent des patrimoines d'orfèvrerie et de joaillerie d'une grande rareté. Nos experts se déplacent avec leur matériel portatif d'analyse pour évaluer diamants solitaires, bijoux de famille et lingots d'or à votre domicile.",
          "Ce service sur mesure garantit une tranquillité totale, sans transport de valeurs, avec un versement immédiat des fonds sur votre compte bancaire.",
        ],
      }}
      highlights={[
        { title: "Déplacement en Villa", desc: "Expertise gemmologique à domicile au Mont Boron et Cap de Nice." },
        { title: "Capacité Financière Immédiate", desc: "Rachat de collections importantes et de gemmes de haute valeur." },
        { title: "Montres de Collection", desc: "Reprise comptant de pièces compliquées et modèles vintage rares." },
        { title: "Virement Garanti", desc: "Fonds crédités instantanément lors de la signature de l'acte de vente." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Mont Boron & Cap de Nice ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Mont Boron & Cap de Nice ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
