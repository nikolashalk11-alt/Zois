import { BUSINESS_INFO } from '../data/businessInfo';

interface HeroSectionProps {
  onScrollTo?: (sectionId: string) => void;
}

export default function HeroSection({}: HeroSectionProps = {}) {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Hero Image with atmospheric Mercedes-style luxury scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Zois Car Service Workshop"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.12]"
        />
        {/* Radial and gradient overlays to ensure text legibility and rich dark grey tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-[#0D0E11]/75 to-[#0D0E11]/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D0E11]/40 to-[#0D0E11]" />
        {/* Subtle luxury dark red glow in upper right */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#85161A]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        {/* Editorial Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08] max-w-4xl text-balance">
          Great things come to those who act.
        </h1>
        <p className="font-editorial text-2xl sm:text-3xl text-neutral-300 font-light italic mt-3">
          Απόλυτη μηχανική ακρίβεια & αξιοπιστία για το όχημά σας.
        </p>

        {/* Subtitle / Value Proposition */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl font-sans-clean">
          Εξειδικευμένη συντήρηση, προηγμένος ηλεκτρονικός έλεγχος και μηχανολογικές επισκευές υψηλής ποιότητας στα Ιωάννινα. Χωρίς περιττά κόστη, με ειλικρίνεια και άμεση τηλεφωνική εξυπηρέτηση.
        </p>

        {/* Proof & Quick Credibility Markers - Cleanly repositioned and balanced */}
        <div className="mt-16 pt-8 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-left">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#858994] font-medium mb-1.5 font-sans-clean">
              Βαθμολογία Google
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-editorial text-2xl sm:text-3xl font-bold text-white tabular-nums">4.9</span>
              <div className="flex text-[#A82025] text-xs">
                {'★'.repeat(5)}
              </div>
              <span className="text-xs text-neutral-400 font-sans-clean">/ 5.0</span>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#858994] font-medium mb-1.5 font-sans-clean">
              Κριτικές Οδηγών
            </div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-white tabular-nums">
              27 <span className="text-xs font-sans-clean font-normal text-neutral-400">αξιολογήσεις</span>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#858994] font-medium mb-1.5 font-sans-clean">
              Άμεση Επικοινωνία
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="font-sans-clean text-base sm:text-lg font-semibold text-[#A82025] hover:text-white transition-colors"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#858994] font-medium mb-1.5 font-sans-clean">
              Τοποθεσία Συνεργείου
            </div>
            <div className="font-sans-clean text-sm font-medium text-neutral-200 truncate">
              {BUSINESS_INFO.address.split(',')[0]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
