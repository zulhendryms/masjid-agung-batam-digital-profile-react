import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, children, label = 'Modal' }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, open]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-heading/72 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
        >
          <button aria-label="Tutup" className="absolute inset-0 h-full w-full cursor-default" onClick={onClose} />
          <motion.div
            className="relative max-h-[88svh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-soft"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <button
              aria-label="Tutup"
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-heading shadow-soft transition hover:bg-white"
              data-testid="modal-close"
              onClick={onClose}
              title="Tutup"
              type="button"
            >
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
