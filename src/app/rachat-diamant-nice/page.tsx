import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Diamant Nice | Expertise Selon le Cours Rapaport & Virement Immédiat",
  description: "Rachat de diamants à Nice au Carré d'Or. Diamants certifiés GIA, HRD, IGI et solitaires d'exception. Évaluation gemmologique transparente et paiement instantané.",
  alternates: { canonical: `${site.url}/rachat-diamant-nice` },
};

export default function DiamantPage() {
  return (
    <ServicePage
      slug="rachat-diamant-nice"
      category="Diamants"
      defaultItemType="Diamant naturel / Solitaire"
      defaultSubject="Estimation Diamant à Nice"
      hero={{
        eyebrow: "Gemmologie de Précision à Nice",
        title: "Rachat de Diamants à Nice",
        titleHighlight: "Cours Officiel Rapaport Anvers",
        intro: "Évaluation scientifique et rachat direct de diamants naturels taillés en brillant, poire, émeraude ou coussin. Expertise en salons privés au Carré d'Or ou à domicile sur la Côte d'Azur.",
        image: "/photos/diamant-loupe.jpg",
        imageAlt: "Rachat et expertise de diamants à Nice",
      }}
      introBlock={{
        eyebrow: "Critères Internationaux",
        title: "La Valorisation Maximale de Votre Diamant à Nice",
        paragraphs: [
          "Le marché des diamants de qualité supérieure requiert une expertise gemmologique rigoureuse. Dans notre salon niçois, chaque pierre est analysée selon la règle universelle des 4C établie par le Gemological Institute of America (GIA) : Carat (poids), Color (couleur), Clarity (pureté) et Cut (qualité de taille et proportions).",
          "Nous rachetons les diamants accompagnés de certificats internationaux (GIA, HRD, IGI, SSEF) mais aussi les diamants montés sur bagues solitaires anciennes sans document. Notre offre de rachat ferme se fonde directement sur le cours mondial Rapaport, avec règlement immédiat par virement bancaire.",
        ],
      }}
      criteria={{
        title: "Les Paramètres Clés de Notre Évaluation",
        items: [
          { label: "Poids en Carats", text: "Rachat de pierres dès 0,50 carat jusqu'aux gemmes d'exception de 5, 10 carats et plus." },
          { label: "Échelle de Couleur", text: "Du blanc exceptionnel D et E jusqu'aux teintes chaudes et aux rarissimes Fancy Colors (jaune intense, rose, bleu)." },
          { label: "Degré de Pureté", text: "De la pureté absolue Flawless (FL/IF) aux grades VVS, VS et SI observés au microscope sous champ sombre." },
          { label: "Taille & Proportions", text: "Vérification des symétries, du polissage (Triple Excellent) et de l'intensité de la fluorescence ultraviolette." },
        ],
      }}
      process={{
        title: "Comment se Déroule la Vente de Votre Diamant à Nice",
        steps: [
          { title: "1. Prise de Contact Confidentielle", body: "Transmettez-nous les caractéristiques du diamant en ligne ou prenez rendez-vous au Carré d'Or." },
          { title: "2. Examen Gemmologique en Direct", body: "Analyse minutieuse sous vos yeux : contrôle du numéro de certificat gravé au laser sur le rondiste." },
          { title: "3. Offre Ferme Rapaport", body: "Proposition chiffrée transparente basée sur le cours de la bourse d'Anvers sans commission cachée." },
          { title: "4. Paiement Sécurisé Immédiat", body: "Émission d'un virement bancaire instantané et remise du bordereau officiel de transaction." },
        ],
      }}
      gallery={[
        "/photos/diamant-bague-2ct.jpg",
        "/photos/diamants-precision.jpg",
        "/photos/solitaire-diamant.jpg",
      ]}
      faqs={[
        { q: "Puis-je vendre un diamant sans certificat à Nice ?", a: "Absolument. Nos gemmologues diplômés réalisent l'expertise complète sur place et déterminent avec exactitude le grade des 4C de votre pierre." },
        { q: "Faut-il dessertir la pierre de son bijou ?", a: "Nous effectuons une première estimation précise du diamant monté. Si un des-sertissage s'avère nécessaire pour une pesée au centième de carat, il n'est réalisé qu'avec votre accord formel préalable." },
        { q: "Quel est le mode de paiement utilisé ?", a: "Conformément à la réglementation française, le paiement est effectué par virement bancaire immédiat ou chèque de banque certifié." },
      ]}
      related={[
        { label: "Haute Joaillerie Signée", href: "/rachat-haute-joaillerie-signee-nice" },
        { label: "Laboratoire Gemmologique", href: "/laboratoire-gemmologique-nice" },
        { label: "Estimation Gratuite", href: "/estimation-gratuite" },
      ]}
    />
  );
}
