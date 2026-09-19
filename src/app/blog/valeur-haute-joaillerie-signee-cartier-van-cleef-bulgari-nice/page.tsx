import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Haute Joaillerie Signée : Pourquoi Cartier et Van Cleef Valent Bien Plus que l'Or | Blog Rachat Bijoux Nice",
  description: "Le prestige des grandes signatures joaillières : préservez la valeur d'art de vos bijoux sans les céder au simple poids de l'or.",
  alternates: { canonical: `${site.url}/blog/valeur-haute-joaillerie-signee-cartier-van-cleef-bulgari-nice` },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[#08162b] text-ink-100">
      <Section className="py-16 md:py-20 bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <Link href="/blog" className="hover:underline">← Retour au Blog</Link>
            <span>•</span>
            <span>Haute Joaillerie</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
          <h1 className="h1 text-white leading-tight">
            Haute Joaillerie Signée : Pourquoi Cartier et Van Cleef Valent Bien Plus que l'Or
          </h1>
          <p className="text-xs text-ink-300">Publié le 26 Août 2026 par Maison Obagem Nice</p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="container-x max-w-3xl space-y-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/photos/bijoux-obagem.jpg"
              alt="Haute Joaillerie Signée : Pourquoi Cartier et Van Cleef Valent Bien Plus que l'Or"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-sm text-ink-200 leading-relaxed font-sans">
            <p className="text-base text-white font-serif leading-relaxed">
              Une erreur récurrente consiste à présenter un bijou signé dans un comptoir d'achat d'or classique qui se contente de le poser sur une balance. Un bracelet Love de Cartier ou un collier Alhambra de Van Cleef & Arpels possèdent une cote qui s'affranchit du cours brut de l'or.
            </p>
            <p>
              Les collectionneurs internationaux recherchent l'authenticité de la maison, le raffinement des finitions et le design historique. C'est pourquoi nous valorisons la signature et le modèle dans son intégralité.
            </p>
            <p>
              Faites estimer vos bijoux signés dans notre salon niçois pour bénéficier des meilleures cotations du marché secondaire international.
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
