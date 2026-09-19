import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Mentions Légales & Registre de Police | Rachat Bijoux Nice",
  description: "Mentions légales, conformité réglementaire sur les métaux précieux et informations relatives à Rachat Bijoux Nice — Maison Obagem.",
  alternates: { canonical: `${site.url}/mentions-legales` },
};

export default function MentionsPage() {
  return (
    <Section className="py-20 text-ink-200">
      <div className="container-x max-w-3xl space-y-8">
        <h1 className="h1 text-white">Mentions Légales</h1>
        
        <div className="space-y-4 text-sm leading-relaxed">
          <p><strong>Dénomination :</strong> {site.legalName}</p>
          <p><strong>Adresse de l'Établissement Niçois :</strong> {site.address.street}, {site.address.postalCode} {site.address.city} ({site.region}), France</p>
          <p><strong>Téléphone :</strong> {site.phoneDisplay}</p>
          <p><strong>Courriel :</strong> {site.email}</p>
          <p><strong>Activité Réglementée :</strong> Cabinet gemmologique, négoce et rachat de métaux précieux et bijoux d'occasion sous agrément des douanes françaises et tenue d'un livre de police officiel conformément aux articles 537 et suivants du Code Général des Impôts.</p>
          <p>Tout achat de métaux précieux est soumis à la vérification d'une pièce d'identité officielle et fait l'objet d'un paiement exclusivement scriptural (virement bancaire ou chèque barré), conformément à l'article L. 112-6 du Code monétaire et financier.</p>
        </div>
      </div>
    </Section>
  );
}
