import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Vendre une Montre de Prestige à Nice : Rolex, Patek Philippe, Audemars Piguet | Blog Rachat Bijoux Nice",
  description: "Comment valoriser au mieux une montre suisse de collection à Nice : modèles sportifs, cohésion des pièces et boîte d'origine.",
  alternates: { canonical: `${site.url}/blog/vendre-montre-luxe-rolex-patek-richard-mille-nice` },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[#08162b] text-ink-100">
      <Section className="py-16 md:py-20 bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <Link href="/blog" className="hover:underline">← Retour au Blog</Link>
            <span>•</span>
            <span>Horlogerie</span>
            <span>•</span>
            <span>7 min de lecture</span>
          </div>
          <h1 className="h1 text-white leading-tight">
            Vendre une Montre de Prestige à Nice : Rolex, Patek Philippe, Audemars Piguet
          </h1>
          <p className="text-xs text-ink-300">Publié le 02 Septembre 2026 par Maison Obagem Nice</p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="container-x max-w-3xl space-y-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/photos/montre-luxe.jpg"
              alt="Vendre une Montre de Prestige à Nice : Rolex, Patek Philippe, Audemars Piguet"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-sm text-ink-200 leading-relaxed font-sans">
            <p className="text-base text-white font-serif leading-relaxed">
              Nice et la Riviera rassemblent de fabuleuses collections horlogères. Les références sportives comme la Rolex Daytona, Submariner ou GMT-Master, ainsi que la Patek Philippe Nautilus ou l'Audemars Piguet Royal Oak constituent de solides valeurs d'investissement.
            </p>
            <p>
              Pour obtenir le meilleur prix, il convient d'analyser l'état du boîtier (les exemplaires non polis conservent une cote supérieure), la conformité du cadran et la régularité du mouvement au chronocomparateur.
            </p>
            <p>
              Notre cabinet rachète vos montres suisses comptant avec un virement bancaire instantané et un contrat de cession formel.
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
