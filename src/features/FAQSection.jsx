import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { faqs } from '../data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Pertanyaan yang sering muncul."
            description="Ringkasan jawaban tentang lokasi, sejarah, fungsi, dan arah pengembangan website."
          />
        </Reveal>

        <div className="mt-12 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal delay={index * 0.04} key={faq.question}>
                <div className="rounded-lg border border-border bg-background">
                  <button
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="text-base font-bold text-heading">{faq.question}</span>
                    <ChevronDown
                      className={`shrink-0 text-primary transition ${isOpen ? 'rotate-180' : ''}`}
                      size={21}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
