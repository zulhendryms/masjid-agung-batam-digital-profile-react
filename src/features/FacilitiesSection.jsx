import { BookOpen, Camera, Landmark, MapPin, Sparkles, Users } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { facilities } from '../data/facilities';

const iconMap = {
  BookOpen,
  Camera,
  Landmark,
  MapPin,
  Sparkles,
  Users
};

export default function FacilitiesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Fasilitas"
            title="Ruang yang mendukung ibadah dan aktivitas masyarakat."
            description="Setiap area dirancang untuk menghadirkan kenyamanan, keteraturan, dan pengalaman yang berkesan bagi jemaah maupun pengunjung."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = iconMap[facility.icon] || Landmark;

            return (
              <Reveal delay={index * 0.05} key={facility.title}>
                <article className="h-full rounded-lg border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/18 text-primary">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-heading">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text">{facility.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
