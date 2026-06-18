import { Maximize2, PlayCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import Modal from '../components/Modal';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { galleryItems } from '../data/gallery';

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState(null);
  const featuredItems = useMemo(() => galleryItems, []);

  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri"
            title="Sudut visual Masjid Agung Batam."
            description="Kumpulan foto dan video yang menampilkan fasad, interior, ornamen, dan suasana kegiatan di area masjid."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[260px] gap-4 md:grid-cols-3 md:auto-rows-[300px]">
          {featuredItems.map((item, index) => {
            const isWide = index === 0 || index === 4;
            const isVideo = item.type === 'video';

            return (
              <Reveal className={isWide ? 'md:col-span-2' : ''} delay={index * 0.04} key={item.id}>
                <button
                  className="group relative h-full w-full overflow-hidden rounded-lg bg-heading text-left shadow-soft"
                  data-testid={`gallery-${item.id}`}
                  onClick={() => setActiveItem(item)}
                  type="button"
                >
                  {isVideo ? (
                    <video
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                      muted
                      playsInline
                      poster={item.poster}
                      preload="metadata"
                      src={item.src}
                    />
                  ) : (
                    <img
                      alt={item.alt}
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                      src={item.src}
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-heading/82 via-heading/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary">
                    {item.category}
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <span>
                      <span className="block text-lg font-bold text-white">{item.title}</span>
                      <span className="mt-1 line-clamp-2 block text-sm leading-6 text-white/72">{item.description}</span>
                    </span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-primary transition group-hover:bg-gold group-hover:text-heading">
                      {isVideo ? <PlayCircle size={21} /> : <Maximize2 size={19} />}
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Modal label={activeItem?.title || 'Galeri'} onClose={() => setActiveItem(null)} open={Boolean(activeItem)}>
        {activeItem ? (
          <div className="grid max-h-[88svh] overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-heading">
              {activeItem.type === 'video' ? (
                <video
                  className="h-full max-h-[72svh] min-h-[320px] w-full object-contain"
                  controls
                  poster={activeItem.poster}
                  src={activeItem.src}
                />
              ) : (
                <img
                  alt={activeItem.alt}
                  className="h-full max-h-[72svh] min-h-[320px] w-full object-contain"
                  src={activeItem.src}
                />
              )}
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{activeItem.category}</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold text-heading">{activeItem.title}</h3>
              <p className="mt-4 leading-8 text-text">{activeItem.description}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
