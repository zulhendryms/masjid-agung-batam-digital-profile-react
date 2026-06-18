import AnimatedCounter from './AnimatedCounter';

export default function StatCard({ item, tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <div
      className={`rounded-lg border p-6 transition duration-300 hover:-translate-y-1 ${
        isDark
          ? 'border-white/15 bg-white/10 text-white shadow-glow'
          : 'border-border bg-surface text-heading shadow-soft'
      }`}
    >
      <div className={`font-heading text-4xl font-semibold md:text-5xl ${isDark ? 'text-white' : 'text-primary'}`}>
        <AnimatedCounter value={item.value} suffix={item.suffix} />
      </div>
      <h3 className={`mt-4 text-lg font-semibold ${isDark ? 'text-white' : 'text-heading'}`}>{item.label}</h3>
      <p className={`mt-2 text-sm leading-6 ${isDark ? 'text-white/70' : 'text-text'}`}>{item.description}</p>
    </div>
  );
}
