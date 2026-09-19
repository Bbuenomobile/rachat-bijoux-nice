import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { ServiceCard } from '@/components/service-card';
import { site } from '@/lib/site';

export default function HomePage() {
  const services = [
    {
      title: "Rachat de Diamants GIA",
      slug: "rachat-diamant-nice",
      image: "/photos/diamant-loupe.jpg",
      description: "Expertise gemmologique scientifique et rachat de diamants naturels certifiés ou montés sur solitaires selon le cours officiel Rapaport d'Anvers.",
    },
    {
      title: "Haute Joaillerie Signée",
      slug: "rachat-haute-joaillerie-signee-nice",
      image: "/photos/bijoux-obagem.jpg",
      description: "Valorisation supérieure des grandes maisons : Cartier, Van Cleef & Arpels, Boucheron, Bulgari, Chaumet, Tiffany & Co, Buccellati.",
    },
    {
      title: "Bijoux Anciens & Époque",
      slug: "rachat-bijoux-anciens-nice",
      image: "/photos/bijou-ancien.jpg",
      description: "Rachat de bijoux d'héritage, pièces Art Déco, Belle Époque, bijoux napoléoniens et or 18 carats au-delà du simple poids du métal.",
    },
    {
      title: "Montres de Prestige",
      slug: "rachat-montres-luxe-nice",
      image: "/photos/montre-luxe.jpg",
      description: "Rachat comptant immédiat de garde-temps suisses : Rolex (Daytona, Submariner), Patek Philippe, Audemars Piguet, Cartier, Vacheron Constantin.",
    },
    {
      title: "Or d'Investissement & Lingots",
      slug: "rachat-lingots-pieces-or-nice",
      image: "/photos/lingot-or.jpg",
      description: "Rachat d'or boursier conforme : lingots 999,9‰ certifiés LBMA, 20 Francs Napoléon, Souverains, Krugerrand avec fiscalité optimisée.",
    },
    {
      title: "Pierres Précieuses de Couleur",
      slug: "rachat-pierres-precieuses-nice",
      image: "/photos/bague-saphir.jpg",
      description: "Diagnostic gemmologique de saphirs birmans et Ceylan, émeraudes de Colombie non huilées, rubis naturels et perles fines d'époque.",
    },
  ];

  const districts = [
    { name: "Promenade des Anglais & Negresco", slug: "rachat-bijoux-nice-promenade-des-anglais" },
    { name: "Carré d'Or & Place Masséna", slug: "rachat-bijoux-nice-carre-d-or-place-massena" },
    { name: "Mont Boron & Cap de Nice", slug: "rachat-bijoux-nice-mont-boron-cap-de-nice" },
    { name: "Cimiez & Arènes Aristocratiques", slug: "rachat-bijoux-nice-cimiez-arènes" },
    { name: "Vieux-Nice & Port Lympia", slug: "rachat-bijoux-nice-vieux-nice-port-lympia" },
    { name: "Saint-Jean-Cap-Ferrat & Villefranche", slug: "rachat-bijoux-saint-jean-cap-ferrat-villefranche" },
    { name: "Beaulieu-sur-Mer, Èze & Monaco", slug: "rachat-bijoux-beaulieu-sur-mer-eze-monaco" },
    { name: "Antibes, Cap d'Antibes & Cannes", slug: "rachat-bijoux-antibes-cap-d-antibes-cannes" },
  ];

  return (
    <>
      {/* HERO */}
      <Section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#061120] to-[#081a30] text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                ✨ Cabinet Gemmologique Privé · Nice & Côte d'Azur
              </span>
              <h1 className="h1 text-white leading-tight">
                Rachat de Haute Joaillerie, Diamants & Montres de Luxe à Nice
              </h1>
              <p className="lead text-ink-200">
                Cabinet d'expertise indépendant fondé sur les cours internationaux <strong>Rapaport</strong> et boursiers. Salons de réception feutrés au <strong>Carré d'Or</strong> (Avenue de Verdun / Place Masséna) et service d'expertise confidentielle à domicile sur toute la Côte d'Azur (Mont Boron, Cap-Ferrat, Monaco). Virement bancaire immédiat.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/estimation-gratuite" className="btn-gold">
                  Demander une Estimation Gratuite
                </Link>
                <Link href="/comment-ca-marche" className="btn-secondary">
                  Découvrir Notre Méthode
                </Link>
              </div>
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center border-t border-white/10">
                {site.stats.map((s, idx) => (
                  <div key={idx} className="p-2">
                    <p className="text-xl font-bold font-serif text-[#d4af37]">{s.value}</p>
                    <p className="text-[11px] text-ink-300 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0b1e38] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
                <h3 className="h3 text-white mb-2">Demande d'Expertise Confidentielle</h3>
                <p className="text-xs text-ink-300 mb-6">
                  Nos gemmologues diplômés vous répondent sous 24 heures en toute discrétion.
                </p>
                <ContactForm source="homepage-hero" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TrustBar />

      {/* SERVICES */}
      <Section className="bg-[#061120]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nos Spécialités d'Achat"
            title="Les Domaines d'Expertise de Notre Maison à Nice"
            description="De l'évaluation microscopique d'un diamant solitaire aux successions patrimoniales de joyaux et montres d'exception."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((s, i) => (
              <ServiceCard
                key={i}
                title={s.title}
                href={`/${s.slug}`}
                image={s.image}
                alt={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="bg-[#08162b] border-t border-white/5">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/photos/diamants-expertise.jpg"
                alt="Expertise gemmologique à Nice"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Déontologie & Rigueur"
                title="Pourquoi Confier Vos Joyaux à Notre Cabinet Niçois"
              />
              <div className="space-y-4 text-ink-200 text-sm leading-relaxed">
                <p>
                  Sur la Côte d'Azur, où circulent des trésors d'orfèvrerie et de grandes signatures joaillières, les simples comptoirs d'or se contentent de peser les métaux au tarif de la fonte. Notre cabinet privilégie la rareté intrinsèque, la signature des grands joailliers de la Place Vendôme et du Carré d'Or, et la perfection des gemmes.
                </p>
                <p>
                  Pour chaque pièce, nous établissons un diagnostic complet : conformité aux cours <strong>Rapaport</strong> d'Anvers, cote horlogère internationale pour les pièces de collection, et prime d'époque pour les montures Art Déco et Belle Époque.
                </p>
                <ul className="space-y-2 pt-2 text-ink-100">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span>
                    <span>Gemmologues diplômés avec équipement scientifique de pointe non invasif</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span>
                    <span>Salons privés au Carré d'Or niçois ou rendez-vous en villa privée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span>
                    <span>Paiement instantané et sécurisé par virement bancaire sans délai</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span>
                    <span>Confidentialité totale garantie pour les familles et successions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DISTRICTS / LOCAL PRESENCE */}
      <Section className="bg-[#050f1d] border-t border-white/5">
        <div className="container-x">
          <SectionHeading
            eyebrow="Ancrage Géographique"
            title="Nos Interventions à Nice & sur la Côte d'Azur"
            description="Expertises en salons privés et déplacements réservés dans les résidences et villas de la région."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {districts.map((d, i) => (
              <Link
                key={i}
                href={`/${d.slug}`}
                className="p-5 rounded-xl bg-[#09182d] border border-white/10 hover:border-[#d4af37]/50 transition-all hover:-translate-y-1 block group"
              >
                <h4 className="text-white font-serif font-semibold text-base group-hover:text-[#d4af37] transition-colors">
                  {d.name}
                </h4>
                <p className="text-xs text-ink-300 mt-2">
                  Expertise diamants, haute joaillerie & montres de collection →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
