import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rachat Bijoux Nice — Maison Obagem',
    short_name: 'RachatNice',
    description: "Expertise gemmologique et rachat d'or, diamants, haute joaillerie et montres de luxe à Nice.",
    start_url: '/',
    display: 'standalone',
    background_color: '#08162b',
    theme_color: '#08162b',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
