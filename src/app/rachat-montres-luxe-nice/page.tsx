import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Montres de Luxe à Nice | Rolex, Patek Philippe, Audemars Piguet",
  description: "Rachat comptant de montres de prestige à Nice. Rolex Daytona, Submariner, Patek Philippe, Audemars Piguet, Cartier. Salons privés Carré d'Or.",
  alternates: { canonical: `${site.url}/rachat-montres-luxe-nice` },
};

export default function MontresPage() {
  return (
    <ServicePage
      slug="rachat-montres-luxe-nice"
      category="Montres de Luxe"
      defaultItemType="Montre de Prestige (Rolex, Patek Philippe, etc.)"
      defaultSubject="Estimation Montre de Luxe à Nice"
      hero={{
        eyebrow: "Haute Horlogerie & Pièces de Collection à Nice",
        title: "Rachat de Montres de Luxe à Nice",
        titleHighlight: "Rolex, Patek Philippe, Audemars Piguet",
        intro: "Rachat immédiat de garde-temps suisses modernes et de collection. Nous rémunérons la véritable cote du marché secondaire mondial pour les références les plus convoitées, avec ou sans boîte et papiers.",
        image: "/photos/montre-luxe.jpg",
        imageAlt: "Rachat de montres de luxe à Nice",
      }}
      introBlock={{
        eyebrow: "Expertise Horlogère",
        title: "La Valorisation Précise de Vos Garde-temps de Prestige à Nice",
        paragraphs: [
          "La Riviera est un carrefour incontournable pour les amateurs et collectionneurs de haute horlogerie suisse. Les modèles sportifs en acier, les grandes complications en or rose ou platine et les pièces de collection vintage atteignent des valorisations exceptionnelles sur le second marché.",
          "Dans notre salon privé du Carré d'Or à Nice, nous examinons minutieusement l'authenticité et la cohésion de chaque composant : boîtier, lunette, cadran d'origine, aiguilles, mouvement mécanique et bracelet. Nous rachetons vos montres avec leur set complet (Full Set) mais aussi des pièces isolées d'héritage sans boîte ni papiers.",
        ],
      }}
      criteria={{
        title: "Les Manufactures que Nous Rachetons avec Priorité",
        items: [
          { label: "Rolex", text: "Daytona, Submariner, GMT-Master II (Pepsi, Batman), Sea-Dweller, Explorer, Datejust, Day-Date, Sky-Dweller." },
          { label: "Patek Philippe", text: "Nautilus (5711, 5712, 3800), Aquanaut, Calatrava, Chronographes et Quantièmes Perpétuels." },
          { label: "Audemars Piguet", text: "Royal Oak 'Jumbo', Royal Oak Offshore, chronographes automatiques et pièces squelettes." },
          { label: "Grandes Manufactures", text: "Cartier (Santos, Tank), Vacheron Constantin, Omega (Speedmaster), Jaeger-LeCoultre, IWC, Richard Mille." },
        ],
      }}
      process={{
        title: "Déroulement du Rachat de Votre Montre à Nice",
        steps: [
          { title: "1. Contrôle Visuel et Numéro de Série", body: "Vérification des numéros gravés entre les cornes et concordance avec les archives de la manufacture." },
          { title: "2. Diagnostic Mécanique au Chronocomparateur", body: "Test de la marche, de l'amplitude du balancier et de la réserve de marche du mouvement." },
          { title: "3. Proposition Ferme Alignée sur la Cote", body: "Offre d'achat nette indexée sur les cours réels de transaction du marché secondaire international." },
          { title: "4. Règlement Immédiat", body: "Paiement par virement bancaire instantané lors de la cession avec contrat officiel de vente." },
        ],
      }}
      gallery={[
        "/photos/montre-luxe.jpg",
        "/photos/atelier-1.jpg",
        "/photos/atelier-3.jpg",
      ]}
      faqs={[
        { q: "Puis-je vendre une montre de luxe sans sa boîte ni ses papiers ?", a: "Oui. Même si le set complet valorise l'ensemble, nous rachetons régulièrement des montres prestigieuses sans écrin ni papiers après authentification minutieuse de l'ensemble des composants." },
        { q: "Comment jugez-vous de l'état d'une montre de collection ?", a: "Nous accordons une prime substantielle aux pièces jamais polies (unpolished) conservant leurs arêtes d'origine vives. Une montre nécessitant une révision est également reprise en déduisant simplement le coût technique." },
        { q: "Le paiement est-il immédiat ?", a: "Oui, le règlement s'effectue en temps réel par virement bancaire instantané avant que la montre ne quitte votre possession." },
      ]}
      related={[
        { label: "Haute Joaillerie Signée", href: "/rachat-haute-joaillerie-signee-nice" },
        { label: "Diamants GIA", href: "/rachat-diamant-nice" },
        { label: "Guide Montres Blog", href: "/blog/vendre-montre-luxe-rolex-patek-richard-mille-nice" },
      ]}
    />
  );
}
