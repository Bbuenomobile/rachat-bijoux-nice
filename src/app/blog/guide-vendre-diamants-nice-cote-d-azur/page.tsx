import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Guide de Vente des Diamants à Nice : Obtenir le Cours Rapaport Réel | Blog Rachat Bijoux Nice",
  description: "Comment vendre un diamant naturel à Nice au cours officiel Rapaport d'Anvers. Critères d'expertise et conseils de nos gemmologues.",
  alternates: { canonical: `${site.url}/blog/guide-vendre-diamants-nice-cote-d-azur` },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[#08162b] text-ink-100">
      <Section className="py-16 md:py-20 bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <Link href="/blog" className="hover:underline">← Retour au Blog</Link>
            <span>•</span>
            <span>Diamants</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
          <h1 className="h1 text-white leading-tight">
            Guide de Vente des Diamants à Nice : Obtenir le Cours Rapaport Réel
          </h1>
          <p className="text-xs text-ink-300">Publié le 18 Septembre 2026 par Maison Obagem Nice</p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="container-x max-w-3xl space-y-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/photos/diamant-loupe.jpg"
              alt="Guide de Vente des Diamants à Nice : Obtenir le Cours Rapaport Réel"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-sm text-ink-200 leading-relaxed font-sans">
            <p className="text-base text-white font-serif leading-relaxed">
              Sur la Côte d'Azur, la cession d'un diamant naturel de belle carature requiert une compréhension précise du barème international professionnel utilisé par les diamantaires : le Rapaport Diamond Report.
            </p>
            <p>
              Trop souvent, les détenteurs de bijoux s'adressent à des boutiques d'or qui sous-estiment la qualité de taille et de pureté des pierres précieuses, faute d'équipement microscopique adéquat.
            </p>
            <p>
              Dans nos salons privés du Carré d'Or à Nice, nous déterminons les caractéristiques exactes de votre gemme devant vous et vous présentons la cotation correspondante pour un rachat net sans commission opaque.
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
