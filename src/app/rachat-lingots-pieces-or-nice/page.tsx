import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Lingots & Pièces d'Or à Nice | Cours de Bourse en Direct & Fiscalité",
  description: "Rachat d'or d'investissement à Nice. Lingots certifiés LBMA 999,9‰, pièces de 20 Francs Napoléon, Souverains, Krugerrand. Virement immédiat Carré d'Or.",
  alternates: { canonical: `${site.url}/rachat-lingots-pieces-or-nice` },
};

export default function LingotsPage() {
  return (
    <ServicePage
      slug="rachat-lingots-pieces-or-nice"
      category="Or d'Investissement"
      defaultItemType="Lingot d'or / Pièces d'or boursières"
      defaultSubject="Estimation Or d'Investissement à Nice"
      hero={{
        eyebrow: "Négociant Agréé en Métaux Précieux",
        title: "Rachat de Lingots et Pièces d'Or à Nice",
        titleHighlight: "Cours de Bourse Officiels en Direct",
        intro: "Vente de votre or d'investissement dans les meilleures conditions : lingots LBMA scellés et pièces d'or cotées (Napoléon, Souverains, Krugerrand). Conseil fiscal personnalisé et virement instantané.",
        image: "/photos/lingot-or.jpg",
        imageAlt: "Rachat de lingots et pièces d'or à Nice",
      }}
      introBlock={{
        eyebrow: "Sécurité & Transparence",
        title: "La Liquidité Maximale de Votre Or Physique à Nice",
        paragraphs: [
          "L'or d'investissement constitue un actif financier majeur pour les familles de la Côte d'Azur. Lors de la cession de lingots ou de monnaies boursières, il est primordial de faire appel à un cabinet appliquant un spread réduit et respectant scrupuleusement la réglementation fiscale française.",
          "Dans notre salon de l'Avenue de Verdun à Nice, nous vérifions le poids et le titre de vos lingots et pièces d'or avec du matériel homologué sans altérer l'intégrité des blisters d'origine. Nous vous guidons dans le choix de l'option fiscale la plus avantageuse entre la taxe forfaitaire (TMP) et le régime des plus-values réelles (TPV).",
        ],
      }}
      criteria={{
        title: "Les Produits d'Or Boursier que Nous Rachetons",
        items: [
          { label: "Lingots & Lingotins LBMA", text: "De 5g à 1kg, certifiés par les affineurs mondiaux : C-Hafner, Umicore, Metalor, Valcambi, Heraeus." },
          { label: "20 Francs Napoléon & Marianne", text: "Toutes effigies : Coq Marianne, Napoléon III, Génie, Cérès (titre 900‰ - poids brut 6,45g)." },
          { label: "Souverains Britanniques", text: "Souverains George V, Reine Victoria, Élisabeth II et Charles III (titre 916,7‰ - poids brut 7,988g)." },
          { label: "Monnaies Internationales d'Once", text: "Krugerrand sud-africain, Maple Leaf canadienne, Philharmonique de Vienne, American Eagle." },
        ],
      }}
      process={{
        title: "Les Étapes de Cession d'Or Boursier à Nice",
        steps: [
          { title: "1. Contrôle des Scellés et Titrage", body: "Vérification des numéros de série, certificats d'essai et état de conservation des monnaies." },
          { title: "2. Fixation du Cours Spot", body: "Application de la cotation de bourse en temps réel selon le fixing international de Londres (LBMA)." },
          { title: "3. Choix de la Fiscalité Optimisée", body: "Calcul comparatif entre la taxe forfaitaire de 11,5% et le régime des plus-values (abattement de 5%/an après 2 ans)." },
          { title: "4. Règlement Immédiat", body: "Paiement par virement bancaire sécurisé et remise de l'imprimé fiscal Cerfa 2091 ou 2092." },
        ],
      }}
      gallery={[
        "/photos/lingot-or.jpg",
        "/photos/atelier-2.jpg",
        "/photos/bijoux-rachat.jpg",
      ]}
      faqs={[
        { q: "Quelle fiscalité s'applique lors de la vente d'or en France ?", a: "Vous avez le choix entre la Taxe sur les Métaux Précieux (TMP de 11,5% tout compris sur le montant brut) ou la Taxe sur les Plus-Values réelles (TPV de 36,2% sur le gain avec exonération totale après 22 ans de détention sur justificatif d'achat nominatif)." },
        { q: "Rachetez-vous des pièces d'or sans sachet scellé ?", a: "Oui, nous rachetons également des pièces conservées en étuis ou en vrac au cours légal de leur poids en or fin." },
        { q: "Le paiement peut-il être effectué en espèces ?", a: "Non, la loi française interdit formellement tout paiement en espèces pour les transactions sur métaux précieux. Le paiement est obligatoirement effectué par virement bancaire ou chèque." },
      ]}
      related={[
        { label: "Bijoux Anciens", href: "/rachat-bijoux-anciens-nice" },
        { label: "Fiscalité Or Blog", href: "/blog/fiscalite-or-lingots-pieces-france" },
        { label: "Contact Salon Privé", href: "/contact" },
      ]}
    />
  );
}
