import { Gem, Landmark, Layers3 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { galleryItems } from '../data/gallery';
import { architectureHighlights } from '../data/mosque';

const icons = [Landmark, Gem, Layers3];

export default function ArchitectureSection() {
  const domeImage = galleryItems.find((item) => item.id === 'dome-close');

  return (
    <section id="architecture" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Arsitektur"
              title="Kubah biru, ornamen Melayu-Islam, dan plaza yang lapang."
              description="Karakter visual Masjid Agung Batam dibangun dari komposisi kubah, ritme lengkung, dan ruang terbuka yang memberi kesan megah namun tetap ramah bagi jemaah."
            />

            <div className="mt-9 grid gap-4">
              {architectureHighlights.map((item, index) => {
                const Icon = icons[index] || Landmark;

                return (
                  <div className="rounded-lg border border-border bg-white p-5 shadow-soft" key={item.title}>
                    <div className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-heading">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-text">{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
              <img alt={domeImage.alt} className="h-full w-full object-cover" src={domeImage.src} />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/22 bg-heading/58 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Detail visual</p>
              <p className="mt-2 text-lg font-bold">Motif kubah menjadi identitas yang kuat di skyline Batam.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
