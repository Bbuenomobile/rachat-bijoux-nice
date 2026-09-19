import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Comment Ça Marche | Processus de Rachat Joaillier à Nice",
  description: "La procédure simple et transparente pour vendre vos bijoux, diamants et montres à Nice : estimation gratuite, expertise scientifique et virement bancaire instantané.",
  alternates: { canonical: `${site.url}/comment-ca-marche` },
};

export default function CommentCaMarchePage() {
  const steps = [
    {
      num: "01",
      title: "Prise de Contact Initiale",
      desc: "Envoyez-nous les détails ou photographies de vos bijoux via notre formulaire sécurisé ou contactez-nous par téléphone pour une première orientation de valeur.",
    },
    {
      num: "02",
      title: "Expertise en Salon Privé ou à Domicile",
      desc: "Prenez rendez-vous dans nos salons feutrés au Carré d'Or de Nice ou sollicitez la visite d'un gemmologue à votre domicile ou villa sur la Côte d'Azur.",
    },
    {
      num: "03",
      title: "Offre d'Achat Ferme et Transparente",
      desc: "Nous vous soumettons une proposition nette basée sur les cours boursiers et gemmologiques internationaux (Rapaport, cote horlogère).",
    },
    {
      num: "04",
      title: "Paiement Immédiat & Bordereau Légal",
      desc: "Si vous acceptez l'offre, le règlement est déclenché sur le champ par virement bancaire instantané avec remise d'un acte de vente conforme.",
    },
  ];

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Transparence & Sécurité</span>
          <h1 className="h1 text-white">Comment Fonctionne Notre Expertise à Nice</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Quatre étapes simples pour valoriser et céder vos joyaux dans un cadre de sérénité et de confidentialité absolue.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0b1e38] border border-white/10 space-y-4">
                <span className="text-3xl font-serif font-bold text-[#d4af37]">{s.num}</span>
                <h3 className="h3 text-white text-xl">{s.title}</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/estimation-gratuite" className="btn-gold">
              Demander une Estimation Gratuite
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
