import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { blogPosts } from '@/lib/blog';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: "Articles & Conseils d'Expertise Joaillière | Rachat Bijoux Nice",
  description: "Guides exclusifs de nos gemmologues : cours du diamant Rapaport, cote des montres Rolex, valorisation des bijoux signés et fiscalité de l'or en France.",
  alternates: { canonical: `${site.url}/blog` },
};

export default function BlogIndexPage() {
  return (
    <>
      <Section className="py-16 md:py-24 bg-[#08162b] text-white">
        <div className="container-x max-w-4xl text-center space-y-6">
          <span className="label text-[#d4af37]">Publications & Expertises</span>
          <h1 className="h1 text-white">Actualités et Guides Gemmologiques</h1>
          <p className="lead text-ink-200 max-w-2xl mx-auto">
            Les conseils de professionnels pour appréhender la valeur de vos biens précieux à Nice et sur la Riviera.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#0b1e38] rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4af37]/40 transition-all hover:-translate-y-1 flex flex-col group"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#081a30]/80 backdrop-blur px-3 py-1 rounded-full text-[11px] text-[#d4af37] font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-ink-300">{post.date} · {post.readingTime}</p>
                    <h3 className="h3 text-white text-lg group-hover:text-[#d4af37] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-ink-200 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[#d4af37] group-hover:translate-x-1 transition-transform"
                  >
                    Lire l'article complet →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
