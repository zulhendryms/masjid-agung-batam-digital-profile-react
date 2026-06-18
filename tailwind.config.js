/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0C0A71',
          hover: '#1B189B'
        },
        gold: '#D4AF37',
        accent: '#4F9CF9',
        background: '#FAFAFC',
        surface: '#FFFFFF',
        border: '#E5E7EB',
        heading: '#111827',
        text: '#4B5563',
        success: '#10B981'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(17, 24, 39, 0.10)',
        glow: '0 24px 80px rgba(79, 156, 249, 0.22)'
      },
      maxWidth: {
        content: '1180px'
      }
    }
  },
  plugins: []
};
