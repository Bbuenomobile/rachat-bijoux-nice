import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyCta } from '@/components/sticky-cta';
import { site } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Rachat Haute Joaillerie, Diamants & Or`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'rachat bijoux nice',
    'rachat diamant nice',
    'vendre bijoux or nice',
    'rachat or nice carree d or',
    'rachat montres luxe rolex nice',
    'rachat bijoux cartier van cleef nice',
    'expertise gemmologique nice',
    'promenade des anglais rachat bijoux',
    'rachat lingots or nice',
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Cabinet Gemmologique & Rachat d'Exception à Nice`,
    description: site.description,
    images: [
      {
        url: `${site.url}/og.jpg`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: [`${site.url}/og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/og.jpg`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: site.areasServed.map((a) => ({
      '@type': 'AdministrativeArea',
      name: a,
    })),
    priceRange: '€€€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement Bancaire Immédiat, Chèque de Banque',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '17:30',
      },
    ],
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#08162b] text-ink-100 antialiased font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
