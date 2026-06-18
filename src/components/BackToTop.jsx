import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 600);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <button
      aria-label="Kembali ke atas"
      className={`fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-soft transition duration-300 hover:bg-primary-hover ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Kembali ke atas"
      type="button"
    >
      <ArrowUp size={20} />
    </button>
  );
}
