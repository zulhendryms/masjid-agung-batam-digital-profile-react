import { Menu, Moon, MapPin, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigationItems } from '../constants/navigation';
import { useTheme } from '../contexts/ThemeContext';
import { mosqueProfile } from '../data/mosque';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto flex max-w-content items-center justify-between rounded-lg border px-4 py-3 transition duration-300 md:px-5 ${
          scrolled && isDark
            ? 'border-white/10 bg-slate-950/86 text-white shadow-soft backdrop-blur-xl'
            : scrolled
            ? 'border-white/55 bg-white/88 shadow-soft backdrop-blur-xl'
            : 'border-white/28 bg-white/18 text-white backdrop-blur-xl'
        }`}
        aria-label="Navigasi utama"
      >
        <a className="flex min-w-0 items-center gap-3" href="#hero" onClick={close}>
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
              scrolled && isDark
                ? 'border-white/10 bg-gold text-heading'
                : scrolled
                ? 'border-primary/12 bg-primary text-white'
                : 'border-white/25 bg-white/18 text-white'
            }`}
          >
            {mosqueProfile.shortName}
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate text-sm font-bold ${
                scrolled && isDark ? 'text-white' : scrolled ? 'text-heading' : 'text-white'
              }`}
            >
              Masjid Agung Batam
            </span>
            <span
              className={`block truncate text-xs ${
                scrolled && isDark ? 'text-white/62' : scrolled ? 'text-text' : 'text-white/72'
              }`}
            >
              Batam Centre
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => (
            <a
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                scrolled && isDark
                  ? 'text-white/78 hover:bg-white/10 hover:text-white'
                  : scrolled
                  ? 'text-heading hover:bg-primary/8 hover:text-primary'
                  : 'text-white hover:bg-white/14'
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label={isDark ? 'Aktifkan mode siang' : 'Aktifkan mode malam'}
            aria-pressed={isDark}
            className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-bold transition md:px-4 ${
              scrolled && isDark
                ? 'bg-white/10 text-white hover:bg-white/16'
                : scrolled
                ? 'bg-heading/5 text-heading hover:bg-primary/10'
                : 'bg-white/18 text-white hover:bg-white/28'
            }`}
            data-testid="theme-toggle"
            onClick={toggleTheme}
            title={isDark ? 'Aktifkan mode siang' : 'Aktifkan mode malam'}
            type="button"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span className="hidden sm:inline">{isDark ? 'Siang' : 'Malam'}</span>
          </button>
          <a
            className={`hidden h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition md:inline-flex ${
              scrolled && isDark
                ? 'bg-gold text-heading hover:bg-white'
                : scrolled
                ? 'bg-primary text-white hover:bg-primary-hover'
                : 'bg-white text-primary hover:bg-white/88'
            }`}
            href="#location"
          >
            <MapPin size={17} />
            Lokasi
          </a>
          <button
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className={`grid h-11 w-11 place-items-center rounded-full transition lg:hidden ${
              scrolled && isDark
                ? 'bg-white/10 text-white hover:bg-white/16'
                : scrolled
                ? 'bg-primary text-white hover:bg-primary-hover'
                : 'bg-white/18 text-white hover:bg-white/28'
            }`}
            onClick={() => setOpen((current) => !current)}
            title={open ? 'Tutup menu' : 'Buka menu'}
            type="button"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-content overflow-hidden rounded-lg border border-white/35 bg-white/94 shadow-soft backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="grid gap-1 p-3">
          {navigationItems.map((item) => (
            <a
              className="rounded-md px-4 py-3 text-sm font-semibold text-heading transition hover:bg-primary/8 hover:text-primary dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
              href={item.href}
              key={item.href}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
