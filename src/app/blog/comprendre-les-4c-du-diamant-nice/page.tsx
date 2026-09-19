import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Les 4C du Diamant Expliqués par Nos Gemmologues au Carré d'Or de Nice | Blog Rachat Bijoux Nice",
  description: "Carat, Couleur, Pureté et Taille : analyse détaillée des 4C par des experts gemmologues à Nice.",
  alternates: { canonical: `${site.url}/blog/comprendre-les-4c-du-diamant-nice` },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[#08162b] text-ink-100">
      <Section className="py-16 md:py-20 bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <Link href="/blog" className="hover:underline">← Retour au Blog</Link>
            <span>•</span>
            <span>Gemmologie</span>
            <span>•</span>
            <span>6 min de lecture</span>
          </div>
          <h1 className="h1 text-white leading-tight">
            Les 4C du Diamant Expliqués par Nos Gemmologues au Carré d'Or de Nice
          </h1>
          <p className="text-xs text-ink-300">Publié le 14 Septembre 2026 par Maison Obagem Nice</p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="container-x max-w-3xl space-y-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/photos/tailles-diamants.jpg"
              alt="Les 4C du Diamant Expliqués par Nos Gemmologues au Carré d'Or de Nice"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-sm text-ink-200 leading-relaxed font-sans">
            <p className="text-base text-white font-serif leading-relaxed">
              Le système de classification des 4C conçu par le Gemological Institute of America (GIA) permet de définir rigoureusement la qualité d'un diamant brut ou taillé.
            </p>
            <p>
              Le Carat indique le poids, mais deux diamants de poids similaire peuvent afficher des écarts de valeur considérables en fonction de leur pureté (de Flawless à Piqué) et de leur blancheur (de D à Z). De plus, un polissage et des symétries parfaits maximisent la brillance et le feu de la pierre.
            </p>
            <p>
              Au sein de notre laboratoire à Nice, nous mettons notre instrumentation scientifique à votre disposition pour vous expliquer chaque nuance de votre diamant en toute transparence.
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
