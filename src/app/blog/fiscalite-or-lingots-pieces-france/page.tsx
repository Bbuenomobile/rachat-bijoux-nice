import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Fiscalité de l'Or en France : TMP ou TPV, Quelle Option Choisir à Nice ? | Blog Rachat Bijoux Nice",
  description: "Tout comprendre sur l'imposition lors de la vente de métaux précieux en France : TMP à 11,5% versus TPV avec abattement annuel.",
  alternates: { canonical: `${site.url}/blog/fiscalite-or-lingots-pieces-france` },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[#08162b] text-ink-100">
      <Section className="py-16 md:py-20 bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <Link href="/blog" className="hover:underline">← Retour au Blog</Link>
            <span>•</span>
            <span>Fiscalité Or</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>
          <h1 className="h1 text-white leading-tight">
            Fiscalité de l'Or en France : TMP ou TPV, Quelle Option Choisir à Nice ?
          </h1>
          <p className="text-xs text-ink-300">Publié le 16 Août 2026 par Maison Obagem Nice</p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="container-x max-w-3xl space-y-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/photos/lingot-or.jpg"
              alt="Fiscalité de l'Or en France : TMP ou TPV, Quelle Option Choisir à Nice ?"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-sm text-ink-200 leading-relaxed font-sans">
            <p className="text-base text-white font-serif leading-relaxed">
              En France, la vente d'or physique d'investissement (lingots certifiés et pièces cotées) est encadrée par deux régimes fiscaux distincts au choix du vendeur.
            </p>
            <p>
              La Taxe sur les Métaux Précieux (TMP) applique un taux forfaitaire de 11,5% sur le montant total de la cession. À l'inverse, le régime des Plus-Values réelles (TPV) permet une taxation sur le gain net avec un abattement de 5% par an dès la 3e année de détention, aboutissant à une exonération fiscale complète après 22 ans sous réserve de détenir une facture nominative.
            </p>
            <p>
              Nos experts à Nice calculent pour vous l'option la plus profitable et établissent immédiatement la déclaration fiscale requise.
            </p>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-[#0b1e38] border border-white/10 space-y-4 text-center">
            <h3 className="h3 text-white">Vous Souhaitez Faire Estimer Vos Joyaux à Nice ?</h3>
            <p className="text-xs text-ink-300 max-w-md mx-auto">
              Nos gemmologues diplômés vous reçoivent sur rendez-vous au Carré d'Or à Nice ou se déplacent en villa sur toute la Côte d'Azur.
            </p>
            <Link href="/estimation-gratuite" className="btn-gold inline-block">
              Demander une Estimation Gratuite
            </Link>
          </div>
        </div>
      </Section>
    </article>
  );
}
