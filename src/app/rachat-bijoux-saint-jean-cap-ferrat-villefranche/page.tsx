import type { Metadata } from 'next';
import { LocalPage } from '@/components/local-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Saint-Jean-Cap-Ferrat | Rachat Bijoux Nice",
  description: "Saint-Jean-Cap-Ferrat et Villefranche-sur-Mer représentent l'un des sommets du luxe planétaire. Service exclusif d'expertise gemmologique en villa privée pour joyaux d'exception et diamants de haute joaillerie.",
  alternates: { canonical: `${site.url}/rachat-bijoux-saint-jean-cap-ferrat-villefranche` },
};

export default function DistrictPage() {
  return (
    <LocalPage
      slug="rachat-bijoux-saint-jean-cap-ferrat-villefranche"
      district="Saint-Jean-Cap-Ferrat & Villefranche"
      postalCode="06230"
      hero={{
        eyebrow: "La Presqu'île des Fortunes Mondiales",
        title: "Rachat Bijoux Saint-Jean-Cap-Ferrat",
        titleHighlight: "Cap-Ferrat, Rade de Villefranche & Grand-Hôtel",
        intro: "Saint-Jean-Cap-Ferrat et Villefranche-sur-Mer représentent l'un des sommets du luxe planétaire. Service exclusif d'expertise gemmologique en villa privée pour joyaux d'exception et diamants de haute joaillerie.",
        image: "/photos/diamant-poire.jpg",
        imageAlt: "Rachat Bijoux Saint-Jean-Cap-Ferrat",
      }}
      introBlock={{
        eyebrow: "Service Privé & Confidentiel",
        title: "Expertise et Rachat Joaillier à Saint-Jean-Cap-Ferrat & Villefranche",
        paragraphs: [
          "Sur la presqu'île de Saint-Jean-Cap-Ferrat et autour de la rade de Villefranche, notre cabinet assure des interventions ultra-discrètes pour l'acquisition de parures majeures, de diamants de couleur exceptionnelle et de pièces d'horlogerie uniques.",
          "Un gemmologue diplômé se déplace directement à votre propriété ou sur votre yacht, vous garantissant une transaction sereine, protégée et un règlement sans limite de montant par virement sécurisé.",
        ],
      }}
      highlights={[
        { title: "Service VIP sur Rendez-vous", desc: "Déplacement exclusif en propriété privée ou yacht avec matériel d'analyse." },
        { title: "Diamants d'Investissement", desc: "Rachat de brillants certifiés GIA de 2 à plus de 15 carats." },
        { title: "Grandes Signatures Mondiales", desc: "Acquisition de pièces de collection Cartier, Harry Winston, Graff." },
        { title: "Confidentialité Absolue", desc: "Respect scrupuleux du secret professionnel et discrétion totale." },
      ]}
      faqs={[
        { q: "Comment demander une estimation à Saint-Jean-Cap-Ferrat & Villefranche ?", a: "Remplissez notre formulaire en ligne, téléphonez-nous ou convenez d'un rendez-vous confidentiel au Carré d'Or de Nice ou à votre domicile." },
        { q: "L'expertise m'engage-t-elle à la vente ?", a: "Non, notre évaluation et notre proposition d'achat sont totalement gratuites et sans le moindre engagement de votre part." },
        { q: "Quel est le moyen de paiement utilisé à Saint-Jean-Cap-Ferrat & Villefranche ?", a: "Le règlement est effectué immédiatement par virement bancaire instantané avec remise d'un bordereau de transaction officiel." },
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
