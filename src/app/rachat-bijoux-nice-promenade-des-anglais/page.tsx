import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Nice Promenade des Anglais | Rachat Bijoux Nice",
  description: "La Promenade des Anglais, ses palaces Belle Époque et ses appartements d'exception face à la Méditerranée incarnent le prestige niçois. Service d'expertise et de rachat joaillier dans la plus stricte discrétion.",
  alternates: { canonical: `${site.url}/rachat-bijoux-nice-promenade-des-anglais` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-nice-promenade-des-anglais"
      district="Promenade des Anglais"
      postalCode="06000"
      hero={{
        eyebrow: "L'Avenue Mythique de la Baie des Anges",
        title: "Rachat Bijoux Nice Promenade des Anglais",
        titleHighlight: "Hôtel Negresco & Palais de la Méditerranée",
        intro: "La Promenade des Anglais, ses palaces Belle Époque et ses appartements d'exception face à la Méditerranée incarnent le prestige niçois. Service d'expertise et de rachat joaillier dans la plus stricte discrétion.",
        image: "/photos/bijoux-obagem.jpg",
        imageAlt: "Rachat Bijoux Nice Promenade des Anglais",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Promenade des Anglais",
        paragraphs: [
          "Face à la Baie des Anges, le long de la Promenade des Anglais et à proximité de l'Hôtel Negresco, réside une clientèle internationale exigeante détenant des parures en diamants GIA, des bijoux d'époque Art Déco et des montres de grande manufacture.",
          "Nous organisons des expertises privées en salons feutrés ou nous déplaçons directement au sein de vos résidences sur la Promenade des Anglais, avec règlement instantané par virement bancaire sécurisé.",
        ],
      }}
      highlights={[
        { title: "Palaces & Promenade", desc: "Service discret au pied des plus beaux édifices de la Baie des Anges." },
        { title: "Cours Rapaport Officiel", desc: "Valorisation transparente des diamants de 1 à plus de 10 carats." },
        { title: "Paiement Instantané", desc: "Virement bancaire immédiat avant remise définitive de vos joyaux." },
        { title: "Discrétion Absolue", desc: "Entretiens confidentiels sans attente ni indiscrétion." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Promenade des Anglais ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Promenade des Anglais ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
