import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-[#050f1d] text-ink-100 border-t border-white/10">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#997b24] text-[#081a30] font-serif font-bold text-lg">
              RN
            </span>
            <span className="font-display text-xl text-white font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-xs">
            Cabinet d'expertise gemmologique indépendante et rachat direct de haute joaillerie à Nice : diamants certifiés GIA / HRD selon le cours international Rapaport, bijoux signés (Cartier, Van Cleef & Arpels, Boucheron, Bulgari, Chaumet), or d'investissement et montres de collection (Rolex, Patek Philippe, Audemars Piguet).
          </p>
          <div className="mt-5 text-sm text-ink-300 space-y-1">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="block text-[#d4af37] hover:text-white font-medium">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
            <p className="pt-2">{site.address.street}</p>
            <p>{site.address.postalCode} {site.address.city} ({site.region}), France</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Nos Expertises</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-diamant-nice" className="text-ink-300 hover:text-white">Diamants Certifiés (GIA, HRD)</Link></li>
            <li><Link href="/rachat-haute-joaillerie-signee-nice" className="text-ink-300 hover:text-white">Haute Joaillerie Signée</Link></li>
            <li><Link href="/rachat-bijoux-anciens-nice" className="text-ink-300 hover:text-white">Bijoux Anciens & Époque</Link></li>
            <li><Link href="/rachat-montres-luxe-nice" className="text-ink-300 hover:text-white">Montres de Prestige</Link></li>
            <li><Link href="/rachat-lingots-pieces-or-nice" className="text-ink-300 hover:text-white">Or d'Investissement & Lingots</Link></li>
            <li><Link href="/rachat-pierres-precieuses-nice" className="text-ink-300 hover:text-white">Saphirs, Émeraudes, Rubis</Link></li>
            <li><Link href="/laboratoire-gemmologique-nice" className="text-ink-300 hover:text-white">Laboratoire Gemmologique</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">La Maison</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/a-propos" className="text-ink-300 hover:text-white">À Propos de la Maison</Link></li>
            <li><Link href="/comment-ca-marche" className="text-ink-300 hover:text-white">Comment Ça Marche</Link></li>
            <li><Link href="/estimation-gratuite" className="text-ink-300 hover:text-white">Demande d'Estimation</Link></li>
            <li><Link href="/faq" className="text-ink-300 hover:text-white">Questions Fréquentes (FAQ)</Link></li>
            <li><Link href="/blog" className="text-ink-300 hover:text-white">Guides & Actualités</Link></li>
            <li><Link href="/contact" className="text-ink-300 hover:text-white">Salons Privés & Contact</Link></li>
            <li><Link href="/mentions-legales" className="text-ink-300 hover:text-white">Mentions Légales</Link></li>
            <li><Link href="/politique-confidentialite" className="text-ink-300 hover:text-white">Confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#d4af37]">Nice & Côte d'Azur</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/rachat-bijoux-nice-promenade-des-anglais" className="text-ink-300 hover:text-white">Promenade des Anglais</Link></li>
            <li><Link href="/rachat-bijoux-nice-carre-d-or-place-massena" className="text-ink-300 hover:text-white">Carré d'Or & Place Masséna</Link></li>
            <li><Link href="/rachat-bijoux-nice-mont-boron-cap-de-nice" className="text-ink-300 hover:text-white">Mont Boron & Cap de Nice</Link></li>
            <li><Link href="/rachat-bijoux-nice-cimiez-arenes" className="text-ink-300 hover:text-white">Cimiez & Arènes</Link></li>
            <li><Link href="/rachat-bijoux-nice-vieux-nice-port-lympia" className="text-ink-300 hover:text-white">Vieux-Nice & Port Lympia</Link></li>
            <li><Link href="/rachat-bijoux-saint-jean-cap-ferrat-villefranche" className="text-ink-300 hover:text-white">Cap-Ferrat & Villefranche</Link></li>
            <li><Link href="/rachat-bijoux-beaulieu-sur-mer-eze-monaco" className="text-ink-300 hover:text-white">Beaulieu, Èze & Monaco</Link></li>
            <li><Link href="/rachat-bijoux-antibes-cap-d-antibes-cannes" className="text-ink-300 hover:text-white">Antibes, Cap d'Antibes & Cannes</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-x py-6 border-t border-white/5 text-xs text-ink-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {site.legalName}. Tous droits réservés.</p>
        <p className="text-ink-300">Rachat direct de métaux précieux et joyaux avec expertise scientifique, discrétion absolue et virement instantané à Nice et sur la Côte d'Azur.</p>
      </div>
    </footer>
  );
}
