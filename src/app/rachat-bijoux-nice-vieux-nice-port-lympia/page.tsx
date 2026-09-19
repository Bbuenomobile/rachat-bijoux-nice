import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Vieux-Nice & Port Lympia | Rachat Bijoux Nice",
  description: "Entre les ruelles pittoresques du Vieux-Nice, le Cours Saleya, la Place Garibaldi et le Port Lympia avec ses antiquaires réputés, nous rachetons vos bijoux d'occasion, or 18 carats et montres mécaniques.",
  alternates: { canonical: `${site.url}/rachat-bijoux-nice-vieux-nice-port-lympia` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-nice-vieux-nice-port-lympia"
      district="Vieux-Nice & Port Lympia"
      postalCode="06300"
      hero={{
        eyebrow: "Tradition Baroque & Quartier des Antiquaires",
        title: "Rachat Bijoux Vieux-Nice & Port Lympia",
        titleHighlight: "Cours Saleya, Place Garibaldi & Quai des Deux-Emmanuel",
        intro: "Entre les ruelles pittoresques du Vieux-Nice, le Cours Saleya, la Place Garibaldi et le Port Lympia avec ses antiquaires réputés, nous rachetons vos bijoux d'occasion, or 18 carats et montres mécaniques.",
        image: "/photos/bijoux-rachat.jpg",
        imageAlt: "Rachat Bijoux Vieux-Nice & Port Lympia",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Vieux-Nice & Port Lympia",
        paragraphs: [
          "Le quartier des antiquaires du Port Lympia et le Vieux-Nice sont des lieux d'échange privilégiés d'objets d'art. Notre cabinet y assure un service expert de rachat d'or et de joyaux, rémunérant le véritable cours du marché.",
          "Qu'il s'agisse de bijoux modernes, d'or cassé ou de montres de plongée de prestige, nous offrons une estimation claire et un paiement comptant immédiat.",
        ],
      }}
      highlights={[
        { title: "Proximité & Rapidité", desc: "Expertise rapide de vos bijoux et pièces d'or sans attente." },
        { title: "Or 18 Carats au Plus Haut", desc: "Rachat de bijoux cassés ou démodés selon le cours officiel de l'or fin." },
        { title: "Montres Mécaniques", desc: "Rachat de montres automatiques et chronographes vintage." },
        { title: "Transactions Transparentes", desc: "Contrat de vente en règle et virement bancaire immédiat." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Vieux-Nice & Port Lympia ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Vieux-Nice & Port Lympia ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
