import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Section } from '@/components/section';
import { TrustBar } from '@/components/trust-bar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Demande d'Estimation Gratuite à Nice | Rachat Bijoux Nice",
  description: "Formulaire d'estimation gratuite pour diamants, haute joaillerie, or et montres de luxe à Nice. Analyse sous 24h par nos gemmologues.",
  alternates: { canonical: `${site.url}/estimation-gratuite` },
};

export default function EstimationPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Sans Engagement & Sous 24h</span>
          <h1 className="h1 text-white">Demande d'Estimation Gratuite à Nice</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Renseignez les éléments de votre bijou ou montre. Nos gemmologues diplômés étudieront vos informations pour vous soumettre une première évaluation indicative.
          </p>
        </div>
      </Section>

      <TrustBar />

      <Section>
        <div className="container-x max-w-3xl">
          <div className="bg-[#0b1e38] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <ContactForm source="estimation-gratuite-page" />
          </div>
        </div>
      </Section>
    </>
  );
}
