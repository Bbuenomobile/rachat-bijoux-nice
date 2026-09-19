import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Pierres Précieuses & Perles à Nice | Saphirs, Émeraudes, Rubis",
  description: "Rachat de pierres précieuses de couleur et perles fines à Nice. Émeraudes de Colombie, saphirs de Ceylan, rubis birmans. Expertise en salon privé Carré d'Or.",
  alternates: { canonical: `${site.url}/rachat-pierres-precieuses-nice` },
};

export default function PierresPage() {
  return (
    <ServicePage
      slug="rachat-pierres-precieuses-nice"
      category="Pierres Précieuses"
      defaultItemType="Pierre Précieuse (Émeraude, Saphir, Rubis, Perle fine)"
      defaultSubject="Estimation Pierres Précieuses à Nice"
      hero={{
        eyebrow: "Gemmes de Couleur & Perles Fines",
        title: "Rachat de Pierres Précieuses et Perles à Nice",
        titleHighlight: "Saphirs, Émeraudes, Rubis de Couleur",
        intro: "Les gemmes de couleur exceptionnelles exigent un outillage de laboratoire pointu pour identifier l'origine géographique et l'absence de traitement thermique ou d'imprégnation. Expertise et rachat au sommet à Nice.",
        image: "/photos/bague-saphir.jpg",
        imageAlt: "Rachat de pierres précieuses et perles à Nice",
      }}
      introBlock={{
        eyebrow: "Science Gemmologique",
        title: "La Confirmation Scientifique de l'Origine et de la Pureté à Nice",
        paragraphs: [
          "Sur le marché des pierres de couleur, la valeur d'un saphir de Ceylan non chauffé (no heat) ou d'une émeraude de Colombie exempte d'huile artificielle (no oil) est sans commune mesure avec celle d'une gemme traitée. Ces pierres précieuses naturelles rares attirent les plus grands collectionneurs internationaux.",
          "Dans notre cabinet de Nice, nous analysons la réfraction optique, les inclusions fluides caractéristiques et la réaction aux ultraviolets pour déterminer la valeur réelle de vos pierres montées ou brutes et vous formuler une offre de reprise immédiate.",
        ],
      }}
      criteria={{
        title: "Les Gemmes Précieuses que Nous Recherchons",
        items: [
          { label: "Émeraudes Naturelles", text: "Origine Colombie (mines de Muzo, Chivor), Zambie, Brésil. Examen du jardin de l'émeraude et absence de résine." },
          { label: "Saphirs Royaux", text: "Saphirs bleus 'Royal Blue' ou 'Bleuet' de Ceylan (Sri Lanka), Birmanie et Madagascar, chauffés ou non chauffés." },
          { label: "Rubis d'Exception", text: "Rubis birmans de Mogok ('Sang de Pigeon') et du Mozambique, exempts de remplissage de verre au plomb." },
          { label: "Perles Fines & Perles de Culture", text: "Perles fines naturelles d'époque et perles de culture des Mers du Sud (Australie, Tahiti) ou Akoya japonaises." },
        ],
      }}
      process={{
        title: "Les Étapes de l'Examen Gemmologique à Nice",
        steps: [
          { title: "1. Réfractométrie et Spectroscopie", body: "Mesure de l'indice de réfraction pour identifier formellement la famille minérale." },
          { title: "2. Observation Microscopique sous Éclairage Polarisé", body: "Étude des inclusions naturelles diagnostiques versus synthèses et imitations." },
          { title: "3. Analyse de la Saturation Chromatique", body: "Graduation de la couleur selon les chartes internationales de teinte et de clarté." },
          { title: "4. Proposition d'Achat Comptant", body: "Offre transparente et virement bancaire instantané lors de la transaction." },
        ],
      }}
      gallery={[
        "/photos/bague-saphir.jpg",
        "/photos/collier-perles.jpg",
        "/photos/bijou-precieux.jpg",
      ]}
      faqs={[
        { q: "Quels laboratoires de gemmologie font autorité pour les pierres de couleur ?", a: "Les références mondiales sont le SSEF (Bâle), Gübelin (Lucerne), le LFG (Paris) et le GIA. Nous expertisons avec la même rigueur les gemmes dépourvues de certificat." },
        { q: "Comment différencier une perle fine d'une perle de culture ?", a: "Les perles fines anciennes se caractérisent par des couches concentriques de nacre sans nucléus artificiel, vérifiables par examen radiographique." },
        { q: "Achetez-vous les bijoux montés avec des saphirs ou émeraudes ?", a: "Oui, nous rachetons des bagues toi et moi, des solitaires saphir, des broches anciennes et des colliers de perles fines avec fermoirs en or et diamants." },
      ]}
      related={[
        { label: "Rachat Diamants", href: "/rachat-diamant-nice" },
        { label: "Haute Joaillerie", href: "/rachat-haute-joaillerie-signee-nice" },
        { label: "Laboratoire Gemmologique", href: "/laboratoire-gemmologique-nice" },
      ]}
    />
  );
}
