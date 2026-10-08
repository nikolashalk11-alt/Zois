import { useState, useEffect } from 'react';
import { Phone, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export default function Header({ onNavigate, activeSection = 'hero' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/logo.png');
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const navLinks = [
    { id: 'hero', label: 'Αρχική' },
    { id: 'google-profile', label: 'Google Profile' },
    { id: 'services', label: 'Υπηρεσίες' },
    { id: 'location', label: 'Τοποθεσία & Ωράριο' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0E11]/95 backdrop-blur-md border-b border-white/[0.07] shadow-2xl shadow-black/80 py-2.5 sm:py-3'
          : 'bg-gradient-to-b from-[#0D0E11]/95 via-[#0D0E11]/85 to-transparent py-3.5 sm:py-4 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* 1. Brand Zone: Logo + Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-white/40 rounded-[4px] p-0.5 shrink-0"
            aria-label="Αρχική Zois Car Service"
          >
            <div className="h-10 sm:h-11 w-auto flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src={logoSrc}
                alt="Zois car service"
                onError={() => {
                  if (logoSrc === '/logo.png') {
                    setLogoSrc('/logo.jpg');
                  }
                }}
                className="h-10 sm:h-11 w-auto max-h-11 object-contain rounded-[4px] drop-shadow-md"
              />
            </div>
            <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors hidden xs:inline">
              Zois Car Service
            </span>
          </a>

          {/* 2. Navigation Links: Quiet, clean typography with subtle active indicator */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors duration-200 py-1 text-sm tracking-wide relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#85161A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Action Zone: Direct Call / Phone Copy button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#85161A] hover:bg-[#721216] text-white font-medium text-xs sm:text-sm rounded-[4px] border border-[#9E1B21]/40 shadow-sm shadow-[#85161A]/25 transition-all duration-200 active:scale-95 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#85161A]"
              aria-label={`Αντιγραφή αριθμού ${BUSINESS_INFO.phoneDisplay}`}
              title="Πατήστε για αντιγραφή αριθμού"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 shrink-0 text-white animate-scale-in" />
                  <span className="tracking-wide">Αντιγράφηκε</span>
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 shrink-0 fill-current" />
                  <span className="tracking-wide">{BUSINESS_INFO.phoneDisplay}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
