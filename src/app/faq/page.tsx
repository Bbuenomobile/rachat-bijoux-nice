import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ) | Rachat Bijoux Nice",
  description: "Toutes les réponses sur le rachat de bijoux, diamants, montres et or à Nice : fiscalité, justificatifs, mode de paiement et rendez-vous.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Quels types de bijoux et joyaux rachetez-vous à Nice ?",
      a: "Nous rachetons les diamants naturels certifiés ou montés, les bijoux en or 18k et platine, la haute joaillerie signée (Cartier, Van Cleef & Arpels, Boucheron, Bulgari, Chaumet), les montres de prestige (Rolex, Patek Philippe, Audemars Piguet), les lingots et pièces d'or boursières.",
    },
    {
      q: "L'expertise de mes biens est-elle payante ?",
      a: "Non, l'ensemble de nos expertises et propositions d'achat en salon ou à domicile sont entièrement gratuites, confidentielles et sans aucun engagement de vente.",
    },
    {
      q: "Comment s'effectue le règlement de la transaction ?",
      a: "Conformément à la législation française, le paiement s'effectue immédiatement par virement bancaire instantané ou chèque de banque émis par un établissement bancaire français.",
    },
    {
      q: "Quelles pièces d'identité dois-je présenter ?",
      a: "Une pièce d'identité en cours de validité (Carte Nationale d'Identité, Passeport ou Titre de Séjour) est obligatoirement requise pour enregistrer l'acte de vente au livre de police.",
    },
    {
      q: "Proposez-vous des expertises à domicile sur la Côte d'Azur ?",
      a: "Oui, sur rendez-vous préalable, nos gemmologues se déplacent à domicile à Nice (Mont Boron, Cimiez, Promenade) ainsi qu'à Saint-Jean-Cap-Ferrat, Villefranche, Beaulieu, Monaco, Antibes et Cannes.",
    },
    {
      q: "Que faire si je n'ai plus la facture ou le certificat d'origine ?",
      a: "Ce n'est pas un obstacle : notre laboratoire gemmologique détermine directement le titrage des métaux précieux et les critères 4C des pierres précieuses pour formuler une offre ferme.",
    },
  ];

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Transparence Totale</span>
          <h1 className="h1 text-white">Foire Aux Questions (FAQ)</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Les réponses claires à vos interrogations sur la cession de vos précieux à Nice.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0b1e38] border border-white/10 space-y-3">
              <h3 className="h3 text-white text-lg flex items-center gap-3">
                <span className="text-[#d4af37]">Q:</span> {f.q}
              </h3>
              <p className="text-sm text-ink-200 leading-relaxed pl-6">{f.a}</p>
            </div>
          ))}

          <div className="mt-12 text-center p-8 rounded-2xl bg-[#050f1d] border border-white/5 space-y-4">
            <h4 className="text-white font-serif text-xl">Vous avez une question particulière ?</h4>
            <p className="text-xs text-ink-300">
              Nos gemmologues se tiennent à votre écoute par téléphone ou en salon privé.
            </p>
            <Link href="/estimation-gratuite" className="btn-gold inline-block">
              Demander une Estimation Personnalisée
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
