import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 1500 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let frameId;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [duration, inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
