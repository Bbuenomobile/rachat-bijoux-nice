import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { Section, SectionHeading } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export type LocalPageProps = {
  slug: string;
  district: string;
  postalCode?: string;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight?: string;
    intro: string;
    image: string;
    imageAlt: string;
  };
  introBlock: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
  };
  highlights: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedAreas: { label: string; href: string }[];
};

export function LocalPage(p: LocalPageProps) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
      { '@type': 'ListItem', position: 2, name: `Rachat Bijoux ${p.district}`, item: `${site.url}/${p.slug}` },
    ],
  };

  return (
    <>
      <Section className="py-16 md:py-24 bg-[#081a30] text-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="label text-[#d4af37]">{p.hero.eyebrow}</span>
              <h1 className="h1 text-white">
                {p.hero.title}
                {p.hero.titleHighlight && (
                  <span className="block text-[#d4af37] mt-2">{p.hero.titleHighlight}</span>
                )}
              </h1>
              <p className="lead text-ink-200 max-w-2xl">{p.hero.intro}</p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/estimation-gratuite" className="btn-gold py-3 px-8 text-xs uppercase tracking-wider font-semibold">
                  Demander une Estimation
                </Link>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-outline border-white/30 text-white hover:bg-white/10 py-3 px-6 text-xs uppercase tracking-wider font-semibold"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={p.hero.image}
                  alt={p.hero.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-4xl space-y-8">
          <SectionHeading
            eyebrow={p.introBlock.eyebrow || `Présence à ${p.district}`}
            title={p.introBlock.title}
          />
          <div className="space-y-4 text-ink-700 leading-relaxed text-base md:text-lg">
            {p.introBlock.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#050f1d] text-white">
        <div className="container-x max-w-5xl">
          <SectionHeading
            eyebrow="Excellence & Sécurité"
            title={`Pourquoi Nous Choisir à ${p.district}`}
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {p.highlights.map((item, i) => (
              <div key={i} className="bg-[#0b1e38] p-6 rounded-2xl border border-white/10 space-y-2 shadow-sm">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                  Garantie 0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-sm text-ink-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl space-y-8">
          <SectionHeading
            eyebrow="Questions Fréquentes"
            title={`FAQ pour les Résidents de ${p.district}`}
            align="center"
          />
          <div className="space-y-4">
            {p.faqs.map((faq, i) => (
              <div key={i} className="bg-ink-50 p-6 rounded-2xl border border-ink-900/10 space-y-2 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-ink-900">{faq.q}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {p.relatedAreas && p.relatedAreas.length > 0 && (
        <Section className="bg-ink-50/50 border-t border-ink-900/5">
          <div className="container-x max-w-4xl text-center space-y-6">
            <h3 className="font-display text-xl font-semibold text-ink-900">
              Découvrez Aussi Nos Autres Secteurs à Nice & sur la Côte d'Azur
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {p.relatedAreas.map((area, i) => (
                <Link
                  key={i}
                  href={area.href}
                  className="px-4 py-2 rounded-xl bg-white border border-ink-900/10 text-sm font-medium text-ink-800 hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section className="bg-[#081a30] text-white">
        <div className="container-x max-w-4xl">
          <div className="bg-white text-ink-900 rounded-2xl border border-ink-900/10 p-8 md:p-12 shadow-2xl">
            <ContactForm
              headline={`Prendre Rendez-vous à Nice — ${p.district}`}
              source={`local:${p.slug}`}
              category={`Nice — ${p.district}`}
            />
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
