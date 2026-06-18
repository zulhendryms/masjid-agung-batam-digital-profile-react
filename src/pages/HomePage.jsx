import AboutSection from '../features/AboutSection';
import ArchitectureSection from '../features/ArchitectureSection';
import FAQSection from '../features/FAQSection';
import FacilitiesSection from '../features/FacilitiesSection';
import GallerySection from '../features/GallerySection';
import HeroSection from '../features/HeroSection';
import LocationSection from '../features/LocationSection';
import NewsSection from '../features/NewsSection';
import StatsSection from '../features/StatsSection';
import TimelineSection from '../features/TimelineSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <ArchitectureSection />
      <FacilitiesSection />
      <GallerySection />
      <NewsSection />
      <LocationSection />
      <FAQSection />
    </>
  );
}
