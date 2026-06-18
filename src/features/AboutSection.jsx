import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { galleryItems } from '../data/gallery';
import { mosqueProfile } from '../data/mosque';

const aboutFacts = [
  'Dibangun mulai tahun 1999',
  'Diresmikan pada tahun 2001',
  'Berada di kawasan Batam Centre',
  'Pusat ibadah, sosial, budaya, dan wisata religi'
];

export default function AboutSection() {
  const nightImage = galleryItems.find((item) => item.id === 'night-milky-way');
  const interiorImage = galleryItems.find((item) => item.id === 'interior-hall');

  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-12 px-4 md:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <img alt={nightImage.alt} className="h-full w-full object-cover" src={nightImage.src} />
          </div>
          <div className="absolute -bottom-8 right-5 w-[58%] overflow-hidden rounded-lg border-4 border-background shadow-soft md:right-[-26px]">
            <img alt={interiorImage.alt} className="aspect-[4/3] h-full w-full object-cover" src={interiorImage.src} />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="Profil Masjid"
            title="Ruang ibadah, kebersamaan, dan wajah budaya kota Batam."
            description={mosqueProfile.description}
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutFacts.map((fact) => (
              <div className="flex items-start gap-3 rounded-lg border border-border bg-white p-4" key={fact}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-success" size={20} />
                <p className="text-sm font-semibold leading-6 text-heading">{fact}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Referensi</p>
            <a
              className="mt-3 inline-flex items-center gap-2 text-base font-bold text-heading transition hover:text-primary"
              href={mosqueProfile.reference}
              rel="noreferrer"
              target="_blank"
            >
              Wikipedia Masjid Agung Batam
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
