import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import Footer from '../features/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
