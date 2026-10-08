import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GoogleCardSection from './components/GoogleCardSection';
import ServicesSection from './components/ServicesSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for top bar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'google-profile', 'services', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0E11] text-[#E5E7EB] selection:bg-[#85161A]/40 selection:text-white">
      {/* Top Bar Navigation */}
      <Header onNavigate={handleScrollTo} activeSection={activeSection} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section styled after Mercedes-Benz editorial typography & CTAs */}
        <HeroSection onScrollTo={handleScrollTo} />

        {/* Google Business Profile Card matching Image 2 */}
        <GoogleCardSection />

        {/* Core Workshop Services (Clean, professional, without online shopping) */}
        <ServicesSection />

        {/* Exact Location & Google Maps Navigation */}
        <LocationSection />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
