import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { historyTimeline } from '../data/mosque';

export default function TimelineSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Sejarah"
            title="Dari kebutuhan ibadah kota menuju ikon religi Batam."
            description="Garis waktu singkat dari pembangunan awal sampai perannya hari ini."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {historyTimeline.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.year}>
              <article className="h-full rounded-lg border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <span className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold text-white">
                  {item.year}
                </span>
                <h3 className="mt-6 text-xl font-bold text-heading">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
