import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <ThemeProvider>
      <MainLayout>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}
