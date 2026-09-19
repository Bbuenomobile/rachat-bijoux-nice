import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Bijoux Anciens & Époque à Nice | Art Déco, Belle Époque & 18 Carats",
  description: "Rachat de bijoux anciens à Nice. Nous valorisons l'époque, la signature orfèvre et les gemmes bien au-delà du simple cours de l'or. Salons Carré d'Or.",
  alternates: { canonical: `${site.url}/rachat-bijoux-anciens-nice` },
};

export default function AnciensPage() {
  return (
    <ServicePage
      slug="rachat-bijoux-anciens-nice"
      category="Bijoux Anciens"
      defaultItemType="Bijoux d'époque / Or 18k / Parure ancienne"
      defaultSubject="Estimation Bijoux Anciens à Nice"
      hero={{
        eyebrow: "Patrimoine & Histoire Joaillière à Nice",
        title: "Rachat de Bijoux Anciens à Nice",
        titleHighlight: "Au-delà du Simple Poids de l'Or",
        intro: "Les bijoux anciens de famille recèlent un savoir-faire d'orfèvrerie remarquable. Nous expertisons et rachetons vos joyaux Belle Époque, Art Déco, Napoléon III et créations 18 carats à leur véritable valeur d'art.",
        image: "/photos/bijou-ancien.jpg",
        imageAlt: "Rachat de bijoux anciens à Nice",
      }}
      introBlock={{
        eyebrow: "Transmission & Savoir-faire",
        title: "La Reconnaissance du Travail d'Art Joaillier à Nice",
        paragraphs: [
          "Nice et la Riviera ont été la villégiature privilégiée de l'aristocratie européenne dès le XIXe siècle, favorisant la présence d'extraordinaires collections de bijoux d'époque : diamants taillés en rose ou ancienne mine, sertissages au platine mille-grains, perles fines et émaux précieux.",
          "Les officines de rachat au poids envoient ces pièces historiques à la fonte. Notre cabinet analyse l'ancienneté, les poinçons d'orfèvre de maître et le style artistique de chaque bijou pour vous proposer une offre reflétant sa valeur de collection.",
        ],
      }}
      criteria={{
        title: "Ce que Nous Valorisons dans les Bijoux Anciens",
        items: [
          { label: "Période & Style", text: "Créations du XIXe siècle, Art Nouveau, Art Déco des années 1920-1930, bijoux tank des années 1940 et pièces modernistes 1960-1970." },
          { label: "Poinçons & Métaux", text: "Poinçons de maître, poinçons tête d'aigle (or 750‰), tête de chien ou mascaron (platine 950‰)." },
          { label: "Pierres Incluses", text: "Valorisation conjointe des diamants taille ancienne, émeraudes, saphirs et perles fines montées sur la pièce." },
          { label: "Intégrité & Conservation", text: "Examen de l'état des chatons, des émaux et des fermoirs d'origine." },
        ],
      }}
      process={{
        title: "Notre Processus de Rachat de Bijoux d'Époque",
        steps: [
          { title: "1. Examen Stylistique et Historique", body: "Recherche de la période de création, identification des poinçons et attribution d'atelier." },
          { title: "2. Analyse des Pierres et Titrage", body: "Diagnostic gemmologique non destructif des gemmes et test du métal précieux." },
          { title: "3. Proposition Globale Optimisée", body: "Offre d'achat intégrant la cote du métal fin augmentée de la prime artistique et historique." },
          { title: "4. Règlement Immédiat", body: "Paiement instantané par virement bancaire et remise de la facture d'achat conforme." },
        ],
      }}
      gallery={[
        "/photos/bijou-precieux.jpg",
        "/photos/bijoux-monte.jpg",
        "/photos/collier-perles.jpg",
      ]}
      faqs={[
        { q: "Pourquoi ne faut-il pas vendre ses bijoux anciens au poids ?", a: "Le prix au poids ne rémunère que les grammes d'or brut en détruisant le bijou. Un bijou Art Déco ou Belle Époque bien conservé vaut fréquemment 2 à 4 fois son poids en or sur le marché des collectionneurs." },
        { q: "Achetez-vous les bijoux anciens même abîmés ?", a: "Oui. Nous rachetons des bijoux anciens nécessitant une restauration, des montures orphelines et des pierres desserties de collections anciennes." },
        { q: "Intervenez-vous dans le cadre de successions à Nice ?", a: "Absolument. Nous travaillons régulièrement auprès de familles et d'études notariales des Alpes-Maritimes pour dresser des inventaires estimatifs et procéder au rachat." },
      ]}
      related={[
        { label: "Diamants GIA", href: "/rachat-diamant-nice" },
        { label: "Or d'Investissement", href: "/rachat-lingots-pieces-or-nice" },
        { label: "Comment Ça Marche", href: "/comment-ca-marche" },
      ]}
    />
  );
}
