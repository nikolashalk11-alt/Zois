import { Phone, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-[#0A0B0E] border-t border-white/[0.07] text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info with Logo loaded from /logo.png */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[4px] overflow-hidden bg-neutral-900 border border-white/[0.08] flex items-center justify-center p-0.5">
                <img
                  src="/logo.png"
                  alt="Zois car service logo"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.endsWith('/logo.png')) {
                      img.src = '/logo.jpg';
                    }
                  }}
                  className="w-full h-full object-contain rounded-[4px]"
                />
              </div>
              <span className="font-editorial text-2xl font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-neutral-400 text-sm max-w-md font-sans-clean leading-relaxed">
              Εξειδικευμένο συνεργείο αυτοκινήτων στα Ιωάννινα. Υψηλή τεχνογνωσία, προηγμένα διαγνωστικά συστήματα και απόλυτη διαφάνεια σε κάθε εργασία.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider">
              Πλοήγηση
            </h4>
            <ul className="space-y-2 text-sm font-sans-clean">
              <li>
                <button
                  onClick={() => onScrollTo('hero')}
                  className="hover:text-white transition-colors"
                >
                  Αρχική
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('google-profile')}
                  className="hover:text-white transition-colors"
                >
                  Google Business
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services')}
                  className="hover:text-white transition-colors"
                >
                  Υπηρεσίες Συνεργείου
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('location')}
                  className="hover:text-white transition-colors"
                >
                  Τοποθεσία & Χάρτης
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info (strictly NO social media) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider">
              Στοιχεία Επικοινωνίας
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300 font-sans-clean">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A82025] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A82025] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-white hover:underline font-semibold text-white"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2 text-neutral-400">
                <Clock className="w-4 h-4 text-[#858994] shrink-0 mt-0.5" />
                <div>
                  <p>Δευτέρα – Παρασκευή: 09:00 – 17:00</p>
                  <p>Σάββατο & Κυριακή: Κλειστά</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Όλα τα δικαιώματα διατηρούνται.</p>
          <div className="text-neutral-400">
            <span>Λεωφ. Ιωνίας 1, Ιωάννινα</span>
            <span className="mx-2">·</span>
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
