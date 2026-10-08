import { Phone, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function ServicesSection() {
  const capabilities = [
    { num: '01', title: 'Ηλεκτρονική Διάγνωση', desc: 'Έλεγχος εγκεφάλων (ECU), αισθητήρων και σφαλμάτων σε πραγματικό χρόνο.' },
    { num: '02', title: 'Γενικό Service & Λιπαντικά', desc: 'Πλήρης συντήρηση κινητήρα σύμφωνα με τις προδιαγραφές κατασκευαστή.' },
    { num: '03', title: 'Σύστημα Πέδησης & Αναρτήσεις', desc: 'Αντικατάσταση δισκόπλακων, τακακιών, αμορτισέρ και έλεγχος διεύθυνσης.' },
    { num: '04', title: 'Μηχανολογικές Επισκευές', desc: 'Σετ χρονισμού, συμπλέκτες, αντλίες νερού και συστήματα ψύξης.' },
    { num: '05', title: 'Προετοιμασία ΚΤΕΟ', desc: 'Προληπτικός έλεγχος καυσαερίων, φώτων και φρένων για εγγυημένη έγκριση.' },
    { num: '06', title: 'Σύστημα Κλιματισμού (A/C)', desc: 'Αναπλήρωση φρέον, έλεγχος διαρροών και αντιβακτηριδιακός καθαρισμός.' },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0D0E11] border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Capabilities List */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2.5 text-xs text-[#858994] font-sans-clean">
                <span className="uppercase tracking-widest font-semibold">Υπηρεσίες & Τεχνογνωσία</span>
                <span className="text-white/20">·</span>
                <span>Ιωάννινα</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-white tracking-tight leading-[1.12]">
                Τεχνική υπεροχή για κάθε τύπο οχήματος.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-xl font-sans-clean leading-relaxed">
                Σύγχρονος εξοπλισμός διάγνωσης, πιστοποιημένα ανταλλακτικά OEM και απόλυτη διαφάνεια σε κάθε στάδιο εργασίας.
              </p>
            </div>

            {/* Quiet Editorial Capabilities Breakdown */}
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.07] pt-2 pb-2">
              {capabilities.map((item) => (
                <div key={item.num} className="py-4 flex items-start gap-4 group">
                  <span className="font-editorial text-lg font-bold text-[#858994] group-hover:text-[#A82025] transition-colors shrink-0 tabular-nums">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 font-sans-clean leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Balanced Diagnostic Consultation Window */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[4px] bg-[#141519] border border-white/[0.07] p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A82025] font-semibold font-sans-clean">
                  Άμεση Εξυπηρέτηση
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-1">
                  Προγραμματισμός Ελέγχου & Διάγνωσης
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-sans-clean leading-relaxed">
                  Επικοινωνήστε απευθείας με τον υπεύθυνο μηχανικό για να κλείσουμε την ώρα που σας εξυπηρετεί.
                </p>
              </div>

              {/* Key Trust Guarantees */}
              <div className="space-y-3 pt-4 border-t border-white/[0.07] text-xs sm:text-sm text-neutral-300 font-sans-clean">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A82025] shrink-0" />
                  <span>Άμεσος ηλεκτρονικός έλεγχος & διάγνωση</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A82025] shrink-0" />
                  <span>Πιστοποιημένα ανταλλακτικά και λιπαντικά</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A82025] shrink-0" />
                  <span>Εκτίμηση εργασίας χωρίς περιττά κόστη</span>
                </div>
              </div>

              {/* Call Action Button */}
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-[4px] bg-[#85161A] hover:bg-[#721216] text-white font-medium text-sm transition-all shadow-xl shadow-[#85161A]/20 border border-[#9E1B21]/40 active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse" />
                  <span>Κλήση: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              <div className="text-center pt-1">
                <span className="text-xs text-[#858994] font-sans-clean">
                  {BUSINESS_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
