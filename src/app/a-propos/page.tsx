import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "À Propos de la Maison | Rachat Bijoux Nice — Maison Obagem",
  description: "Plus de 40 ans d'excellence en gemmologie, haute joaillerie et métaux précieux. Votre cabinet de référence à Nice et sur la Côte d'Azur.",
  alternates: { canonical: `${site.url}/a-propos` },
};

export default function AProposPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Tradition Joaillière & Rigueur</span>
          <h1 className="h1 text-white">À Propos — Maison Obagem Nice</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Depuis plus de quatre décennies, notre Maison conseille les familles, collectionneurs et professionnels pour la valorisation et le rachat de joyaux d'exception.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-ink-700 leading-relaxed">
              <SectionHeading
                eyebrow="Histoire & Déontologie"
                title="Un Lien Direct avec les Bourses Mondiales du Diamant"
              />
              <p className="text-ink-200">
                Fondée par des gemmologues passionnés, notre Maison s'est imposée comme un acteur indépendant de référence sur la scène européenne. Présente au Carré d'Or à Nice, elle permet aux résidents de la Côte d'Azur d'accéder sans intermédiaire aux cours des bourses d'Anvers, de New York et de Genève.
              </p>
              <p className="text-ink-200">
                Nos salons feutrés offrent un cadre discret et parfaitement sécurisé pour faire estimer vos bijoux signés, diamants solitaires et garde-temps de prestige, avec la certitude d'un traitement déontologique exemplaire.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="btn-gold">
                  Rencontrer Nos Gemmologues à Nice
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/photos/atelier-1.jpg"
                alt="Cabinet d'expertise joaillière à Nice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
