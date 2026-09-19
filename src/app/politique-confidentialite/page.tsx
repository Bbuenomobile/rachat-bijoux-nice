import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Politique de Confidentialité (RGPD) | Rachat Bijoux Nice",
  description: "Protection et traitement des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).",
  alternates: { canonical: `${site.url}/politique-confidentialite` },
};

export default function PolitiquePage() {
  return (
    <Section className="py-20 text-ink-200">
      <div className="container-x max-w-3xl space-y-8">
        <h1 className="h1 text-white">Politique de Confidentialité</h1>
        
        <div className="space-y-4 text-sm leading-relaxed">
          <p>Conformément au RGPD (Règlement Général sur la Protection des Données), nous vous informons que les données collectées via les formulaires du site {site.domain} ont pour unique finalité le traitement confidentiel de vos demandes d'estimation et de rendez-vous d'expertise.</p>
          <p>Aucune information personnelle n'est cédée, louée ou commercialisée à des tiers. Les données afférentes aux transactions conclues sont conservées selon les durées légales obligatoires prévues pour les registres d'objets mobiliers.</p>
          <p>Vous disposez d'un droit permanent d'accès, de rectification ou de suppression de vos données en écrivant à : <strong>{site.email}</strong>.</p>
        </div>
      </div>
    </Section>
  );
}
