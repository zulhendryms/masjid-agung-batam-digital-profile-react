import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronsDown, Images, MapPin, Moon, Sun } from 'lucide-react';
import { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { themeHeroImages } from '../data/gallery';
import { mosqueProfile } from '../data/mosque';

export default function HeroSection() {
  const { isDark, theme } = useTheme();
  const currentSlide = themeHeroImages[theme];
  const ModeIcon = useMemo(() => (isDark ? Moon : Sun), [isDark]);

  return (
    <section id="hero" className="relative min-h-[94svh] overflow-hidden bg-heading text-white">
      <AnimatePresence initial={false}>
        <motion.img
          key={`${theme}-${currentSlide.src}`}
          alt={currentSlide.alt}
          className="absolute inset-0 h-full w-full object-cover"
          src={currentSlide.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-heading/86 via-heading/42 to-heading/14" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[94svh] max-w-content items-end px-4 pb-20 pt-32 md:px-6 md:pb-24">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/14 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <MapPin size={16} />
                {mosqueProfile.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-heading/34 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <ModeIcon size={16} />
                {isDark ? 'Mode Malam' : 'Mode Siang'}
              </div>
            </div>
            <h1 className="font-heading text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
              Masjid Agung Batam
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-xl">
              Profil digital modern untuk ikon religi Batam Centre, menghadirkan sejarah, arsitektur, galeri,
              informasi, dan lokasi dalam satu pengalaman yang elegan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-bold text-heading shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
                href="#about"
              >
                Jelajahi Profil
                <ArrowRight size={18} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/28 bg-white/12 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/22"
                href="#gallery"
              >
                <Images size={18} />
                Lihat Galeri
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hidden rounded-lg border border-white/22 bg-white/14 p-4 shadow-glow backdrop-blur-lg lg:block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-md">
              <img alt={currentSlide.alt} className="h-full w-full object-cover" src={currentSlide.src} />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="min-w-0 text-sm font-semibold text-white">{currentSlide.title}</p>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/18 text-white">
                <ModeIcon size={18} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        aria-label="Turun ke konten"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition hover:text-white md:block"
        href="#about"
        title="Turun ke konten"
      >
        <ChevronsDown size={30} />
      </a>
    </section>
  );
}
