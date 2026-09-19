import type { Metadata } from 'next';
import { ServicePage } from '@/components/service-page';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Rachat Haute Joaillerie Signée à Nice | Cartier, Van Cleef, Bulgari, Chaumet",
  description: "Rachat de bijoux signés des grandes maisons à Nice. Cote internationale pour Cartier, Van Cleef & Arpels, Boucheron, Bulgari, Chaumet, Tiffany. Salons Carré d'Or.",
  alternates: { canonical: `${site.url}/rachat-haute-joaillerie-signee-nice` },
};

export default function SigneePage() {
  return (
    <ServicePage
      slug="rachat-haute-joaillerie-signee-nice"
      category="Haute Joaillerie Signée"
      defaultItemType="Bijou de Grande Maison (Cartier, VCA, etc.)"
      defaultSubject="Estimation Haute Joaillerie à Nice"
      hero={{
        eyebrow: "Maisons Mythiques de la Place Vendôme & Riviera",
        title: "Rachat de Haute Joaillerie Signée à Nice",
        titleHighlight: "Cartier, Van Cleef & Arpels, Boucheron, Bulgari",
        intro: "Les créations des joailliers les plus prestigieux bénéficient d'une demande mondiale inaltérable. Notre cabinet offre les meilleures conditions de reprise du marché pour vos joyaux signés à Nice.",
        image: "/photos/bijoux-obagem.jpg",
        imageAlt: "Rachat de haute joaillerie signée à Nice",
      }}
      introBlock={{
        eyebrow: "Prestige International",
        title: "La Valorisation des Signatures Joaillières Iconiques à Nice",
        paragraphs: [
          "Les collections emblématiques telles que Love, Panthère ou Juste un Clou de Cartier, Alhambra ou Frivole de Van Cleef & Arpels, Serpenti ou B.zero1 de Bulgari, et Quatre de Boucheron constituent de véritables valeurs refuges patrimoniales.",
          "Dans notre salon privé niçois, nous expertisons vos pièces de haute joaillerie avec ou sans leur écrin et certificat d'origine. La présence des papiers historiques et boîtes d'époque apporte une plus-value que nous répercutons intégralement dans notre proposition d'achat comptant.",
        ],
      }}
      criteria={{
        title: "Les Grandes Signatures que Nous Rachetons en Priorité",
        items: [
          { label: "Maison Cartier", text: "Bagues, bracelets, colliers et broches des collections historiques et contemporaines." },
          { label: "Van Cleef & Arpels", text: "Parures Alhambra, créations en nacre, malachite, corail, onyx et haute joaillerie florale." },
          { label: "Grandes Maisons Françaises", text: "Boucheron, Chaumet, Mauboussin, Chanel Joaillerie, Dior Joaillerie, Fred, Poiray." },
          { label: "Signatures Italiennes & Mondiales", text: "Bulgari, Buccellati, Pomellato, Damiani, Tiffany & Co, Harry Winston, Graff." },
        ],
      }}
      process={{
        title: "Protocole d'Expertise de Vos Bijoux Signés",
        steps: [
          { title: "1. Authentification Formelle", body: "Contrôle microscopique de la signature gravée, du numéro de série individuel et des poinçons d'atelier." },
          { title: "2. Examen de l'État de Préservation", body: "Vérification des sertissages, absence de polissage excessif et contrôle des gemmes d'accompagnement." },
          { title: "3. Offre au Sommet du Marché", body: "Estimation basée sur les derniers résultats des ventes aux enchères internationales de Genève et New York." },
          { title: "4. Virement Bancaire Immédiat", body: "Paiement direct et sécurisé dès conclusion de la vente avec délivrance du récépissé légal." },
        ],
      }}
      gallery={[
        "/photos/bague-diamant-or-blanc.jpg",
        "/photos/bague-poire-gia.jpg",
        "/photos/bijou-precieux.jpg",
      ]}
      faqs={[
        { q: "Puis-je vendre un bijou signé sans son certificat d'origine ?", a: "Oui. Bien que le certificat d'authenticité de la maison soit un plus, nos experts identifient formellement l'authenticité de la pièce grâce aux gravures et poinçons d'orfèvre." },
        { q: "Combien vaut un bijou Cartier ou Van Cleef par rapport à l'or ?", a: "Le prix de marché d'un bijou signé iconique peut être 3 à 8 fois supérieur à la valeur brute de l'or et des diamants qui le composent." },
        { q: "L'expertise en salon privé est-elle payante ?", a: "Non, toutes nos expertises et propositions de rachat en salons privés au Carré d'Or de Nice sont entièrement gratuites et sans engagement." },
      ]}
      related={[
        { label: "Montres de Prestige", href: "/rachat-montres-luxe-nice" },
        { label: "Diamants GIA", href: "/rachat-diamant-nice" },
        { label: "À Propos", href: "/a-propos" },
      ]}
    />
  );
}
