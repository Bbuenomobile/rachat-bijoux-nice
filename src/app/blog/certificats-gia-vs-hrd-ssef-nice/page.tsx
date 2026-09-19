import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Certificats GIA, HRD, SSEF à Nice : Pourquoi Font-ils Toute la Différence ? | Blog Rachat Bijoux Nice",
  description: "Comparatif des plus grands laboratoires gemmologiques mondiaux et impact sur la valeur de revente de vos joyaux.",
  alternates: { canonical: `${site.url}/blog/certificats-gia-vs-hrd-ssef-nice` },
};

export default function ArticlePage() {
  return (
    <article className="min-h-screen bg-[#08162b] text-ink-100">
      <Section className="py-16 md:py-20 bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#d4af37]">
            <Link href="/blog" className="hover:underline">← Retour au Blog</Link>
            <span>•</span>
            <span>Certificats</span>
            <span>•</span>
            <span>5 min de lecture</span>
          </div>
          <h1 className="h1 text-white leading-tight">
            Certificats GIA, HRD, SSEF à Nice : Pourquoi Font-ils Toute la Différence ?
          </h1>
          <p className="text-xs text-ink-300">Publié le 08 Septembre 2026 par Maison Obagem Nice</p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="container-x max-w-3xl space-y-8">
          <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/photos/diamants-expertise.jpg"
              alt="Certificats GIA, HRD, SSEF à Nice : Pourquoi Font-ils Toute la Différence ?"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-sm text-ink-200 leading-relaxed font-sans">
            <p className="text-base text-white font-serif leading-relaxed">
              Dans le commerce de haute joaillerie, le certificat gemmologique émis par un laboratoire indépendant international constitue la référence de sécurité absolue.
            </p>
            <p>
              Le GIA américain est le leader universel incontesté, suivi du HRD d'Anvers pour l'Europe du Nord et du SSEF de Bâle pour les gemmes de couleur exceptionnelles. La présence d'un rapport officiel garantit une liquidité immédiate et le meilleur prix de reprise.
            </p>
            <p>
              Nous vérifions en direct la concordance du rapport avec la gravure laser sur le rondiste de vos diamants dans nos salons du Carré d'Or à Nice.
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
