import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import { statistics } from '../data/mosque';

export default function StatsSection() {
  return (
    <section className="bg-primary py-20 text-white md:py-24">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Statistik"
              title="Angka penting dari perjalanan Masjid Agung Batam."
              description="Ringkasan singkat tentang milestone dan peran masjid sebagai ruang publik religi di Batam."
              tone="dark"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {statistics.map((item, index) => (
              <Reveal delay={index * 0.06} key={item.label}>
                <StatCard item={item} tone="dark" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
