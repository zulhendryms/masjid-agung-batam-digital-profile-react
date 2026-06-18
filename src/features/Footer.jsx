import { ArrowUpRight, MapPin } from 'lucide-react';
import { navigationItems } from '../constants/navigation';
import { mosqueProfile } from '../data/mosque';

export default function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:px-6 md:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-sm font-black text-heading">
              {mosqueProfile.shortName}
            </span>
            <div>
              <p className="font-bold">Masjid Agung Batam</p>
              <p className="text-sm text-white/62">Digital Profile</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{mosqueProfile.description}</p>
          <div className="mt-6 inline-flex rounded-full border border-gold/35 bg-gold/12 px-4 py-2 text-sm font-bold text-gold">
            Dibuat oleh Zulhendry MS
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Navigasi</h3>
          <div className="mt-4 grid gap-3">
            {navigationItems.map((item) => (
              <a className="text-sm text-white/72 transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Alamat</h3>
          <p className="mt-4 flex gap-3 text-sm leading-7 text-white/72">
            <MapPin className="mt-1 shrink-0 text-gold" size={17} />
            {mosqueProfile.address}
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-gold"
            href={mosqueProfile.reference}
            rel="noreferrer"
            target="_blank"
          >
            Referensi Profil
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/54">
        Masjid Agung Batam Digital Profile. Dibuat oleh Zulhendry MS.
      </div>
    </footer>
  );
}
