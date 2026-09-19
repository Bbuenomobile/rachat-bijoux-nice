import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contact & Salons Privés à Nice | Rachat Bijoux Nice",
  description: "Contactez notre cabinet gemmologique à Nice. Salons privés au Carré d'Or (Avenue de Verdun). Téléphone, WhatsApp et formulaire sécurisé.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Salons Privés au Carré d'Or</span>
          <h1 className="h1 text-white">Contact & Rendez-vous Confidentiels</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Nous vous accueillons en toute discrétion à Nice ou intervenons à votre domicile sur toute la Côte d'Azur.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-5xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="h3 text-white mb-4">Coordonnées du Cabinet</h3>
                <div className="space-y-4 text-sm text-ink-200">
                  <p>
                    <strong className="text-white block">Adresse du Salon :</strong>
                    {site.address.street}<br/>
                    {site.address.postalCode} {site.address.city} ({site.region}), France
                  </p>
                  <p>
                    <strong className="text-white block">Ligne Directe :</strong>
                    <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-[#d4af37] hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <strong className="text-white block">Email Privé :</strong>
                    <a href={`mailto:${site.email}`} className="text-[#d4af37] hover:underline">
                      {site.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-white block">WhatsApp Gemmologues :</strong>
                    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">
                      Démarrer un échange sécurisé
                    </a>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0b1e38] border border-white/10 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Horaires d'Ouverture</h4>
                <ul className="text-xs space-y-2 text-ink-200">
                  {site.openingHours.map((h, i) => (
                    <li key={i} className="flex justify-between py-1 border-b border-white/5">
                      <span>{h.day}</span>
                      <span className="font-semibold text-white">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#0b1e38] p-8 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="h3 text-white mb-2">Prendre Rendez-vous à Nice</h3>
              <p className="text-xs text-ink-300 mb-6">
                Remplissez les champs ci-dessous pour recevoir une réponse confidentielle sous 24h.
              </p>
              <ContactForm source="contact-page" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
