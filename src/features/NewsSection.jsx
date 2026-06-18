import { CalendarDays, Newspaper } from 'lucide-react';
import { useState } from 'react';
import Modal from '../components/Modal';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { newsItems } from '../data/news';

export default function NewsSection() {
  const [activeNews, setActiveNews] = useState(null);

  return (
    <section id="news" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Informasi"
              title="Kabar dan aktivitas terbaru."
              description="Informasi singkat seputar kegiatan masjid, kajian, suasana Ramadan, dan peran Masjid Agung Batam sebagai ruang publik religi."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-heading">
              <Newspaper size={17} className="text-primary" />
              Latest Information
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Reveal delay={index * 0.06} key={item.id}>
              <article className="h-full overflow-hidden rounded-lg border border-border bg-background shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-white">
                <img alt="" className="h-56 w-full object-cover" src={item.image} />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                    <span className="rounded-full bg-primary/10 px-3 py-1">{item.category}</span>
                    <span className="inline-flex items-center gap-1 text-text">
                      <CalendarDays size={14} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-heading">{item.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-text">{item.excerpt}</p>
                  <button
                    aria-label={`Baca detail ${item.title}`}
                    className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white transition hover:bg-primary-hover"
                    data-testid={`news-${item.id}`}
                    onClick={() => setActiveNews(item)}
                    type="button"
                  >
                    Baca Detail
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal label={activeNews?.title || 'Informasi'} onClose={() => setActiveNews(null)} open={Boolean(activeNews)}>
        {activeNews ? (
          <article className="max-h-[88svh] overflow-y-auto">
            <img alt="" className="h-[320px] w-full object-cover" src={activeNews.image} />
            <div className="p-6 md:p-9">
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-primary">
                <span>{activeNews.category}</span>
                <span className="text-text">{activeNews.date}</span>
              </div>
              <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-heading md:text-4xl">
                {activeNews.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-text">{activeNews.body}</p>
            </div>
          </article>
        ) : null}
      </Modal>
    </section>
  );
}
