import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = window.localStorage.getItem('mab-theme');
  return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('mab-theme', theme);
  }, [isDark, theme]);

  const value = useMemo(
    () => ({
      theme,
      isDark,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }),
    [isDark, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}
