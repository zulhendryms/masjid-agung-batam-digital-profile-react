export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light'
}) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isDark ? 'text-gold' : 'text-primary'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-semibold leading-tight md:text-5xl ${
          isDark ? 'text-white' : 'text-heading'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${isDark ? 'text-white/76' : 'text-text'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
