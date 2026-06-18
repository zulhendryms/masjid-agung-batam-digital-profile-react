import Lenis from 'lenis';
import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    window.lenis = lenis;
    globalThis.lenis = lenis;
    let anchorFrame;

    const scrollToPosition = (targetTop) => {
      cancelAnimationFrame(anchorFrame);

      const startY = window.scrollY;
      const distance = targetTop - startY;
      const startTime = performance.now();
      const duration = 950;

      if (Math.abs(distance) < 2) return;

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        window.scrollTo({
          top: startY + distance * eased,
          behavior: 'auto'
        });

        if (progress < 1) {
          anchorFrame = requestAnimationFrame(animate);
        }
      };

      anchorFrame = requestAnimationFrame(animate);
    };

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor || event.defaultPrevented) return;
      if (event instanceof MouseEvent && event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const hash = anchor.getAttribute('href');
      const targetId = hash?.slice(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      const offset = targetId === 'hero' ? 0 : -86;
      const targetTop = target.getBoundingClientRect().top + window.scrollY + offset;

      scrollToPosition(targetTop);
      window.history.pushState(null, '', hash);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (window.lenis === lenis) {
        delete window.lenis;
      }
      if (globalThis.lenis === lenis) {
        delete globalThis.lenis;
      }
      cancelAnimationFrame(anchorFrame);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}
