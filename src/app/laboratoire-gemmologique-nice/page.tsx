import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Laboratoire Gemmologique à Nice | Expertise Diamants & Pierres Précieuses",
  description: "Matériel scientifique de pointe pour l'analyse des diamants et pierres précieuses au Carré d'Or à Nice. Réfractomètre, microscope polarisant et spectrométrie.",
  alternates: { canonical: `${site.url}/laboratoire-gemmologique-nice` },
};

export default function LaboratoirePage() {
  const instruments = [
    {
      name: "Microscope Gemmologique à Champ Sombre",
      desc: "Inspection des inclusions diagnostiques, des micro-fissures et lecture du numéro de rapport gravé au laser sur le rondiste du diamant (GIA/HRD/IGI).",
    },
    {
      name: "Réfractomètre Optique Gemmologique",
      desc: "Détermination exacte de l'indice de réfraction (IR) et de la biréfringence pour identifier sans équivoque émeraudes, saphirs, rubis et imitations synthétiques.",
    },
    {
      name: "Spectroscope & Lampes UV Ondes Courtes / Longues",
      desc: "Évaluation de la fluorescence des diamants et détection des traitements thermiques ou imprégnations de résine dans les pierres de couleur.",
    },
    {
      name: "Balance Électronique Hydrostatique Homologuée",
      desc: "Pesée métrologique au centième de carat et calcul de la densité spécifique pour les métaux précieux et les pierres non montées.",
    },
  ];

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Science des Matériaux & Rigueur</span>
          <h1 className="h1 text-white">Laboratoire Gemmologique et Analyse Scientifique à Nice</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Nous disposons au Carré d'Or d'un équipement analytique de premier plan pour contrôler l'authenticité, la pureté et l'absence de traitement sur chaque gemme.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-ink-700 leading-relaxed">
              <SectionHeading
                eyebrow="Rigueur d'Analyse"
                title="Une Méthode Scientifique Inattaquable pour Votre Rachat"
              />
              <p className="text-ink-200">
                Face à la prolifération des diamants synthétiques créés en laboratoire (CVD et HPHT) et des gemmes traitées thermiquement ou résinées, seul un équipement de laboratoire perfectionné permet de certifier l'origine naturelle d'un bijou.
              </p>
              <p className="text-ink-200">
                Dans notre cabinet niçois, toutes les perquisitions gemmologiques sont conduites par des méthodes strictement non invasives qui préservent l'intégrité de vos biens. Vous assistez à chaque phase de l'expertise pour une totale clarté.
              </p>
              <div className="pt-2">
                <Link href="/estimation-gratuite" className="btn-gold">
                  Prendre Rendez-vous au Laboratoire
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/photos/expertise-en-cours.jpg"
                alt="Examen gemmologique au microscope à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#050f1d] border-t border-white/5">
        <div className="container-x max-w-5xl">
          <SectionHeading
            eyebrow="Instruments de Précision"
            title="L'Équipement Technique de Notre Cabinet"
            description="L'ensemble de nos appareils est étalonné conformément aux standards métrologiques internationaux."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {instruments.map((inst, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b1e38] border border-white/10 space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] font-bold">
                  {idx + 1}
                </div>
                <h3 className="h3 text-white text-lg">{inst.name}</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
