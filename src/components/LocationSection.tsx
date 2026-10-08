import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getBusinessStatus } from '../data/businessInfo';

export default function LocationSection() {
  const status = getBusinessStatus();

  return (
    <section id="location" className="py-20 md:py-28 bg-[#0D0E11] border-t border-white/[0.07] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Balanced Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-2.5 text-xs text-[#858994] font-sans-clean">
            <span className="uppercase tracking-widest font-semibold">Τοποθεσία & Πρόσβαση</span>
            <span className="text-white/20">·</span>
            <span>Ιωάννινα</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white tracking-tight">
            Εύκολη πρόσβαση στη Λεωφόρο Ιωνίας 1.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 max-w-2xl font-sans-clean leading-relaxed">
            Κομβικό σημείο στα Ιωάννινα με άμεση πρόσβαση και άνετο χώρο στάθμευσης για την παράδοση και παραλαβή του οχήματός σας.
          </p>
        </div>

        {/* Balanced Symmetrical 2-Window Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Window 1: Direct Communication & Working Hours */}
          <div className="rounded-[4px] bg-[#141519] border border-white/[0.07] p-7 sm:p-9 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A82025] font-semibold font-sans-clean">
                  Τηλεφωνική Επικοινωνία
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mt-1">
                  Άμεση Εξυπηρέτηση
                </h3>
              </div>

              <div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold text-[#A82025] hover:text-white transition-colors tracking-tight tabular-nums"
                >
                  <Phone className="w-6 h-6 fill-current shrink-0" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs text-neutral-400 mt-2 font-sans-clean leading-relaxed">
                  Πατήστε για άμεση κλήση. Απαντάμε για προγραμματισμό ραντεβού και τεχνικές διευκρινίσεις.
                </p>
              </div>

              {/* Working Hours summary */}
              <div className="pt-4 border-t border-white/[0.07] space-y-2.5 text-xs sm:text-sm text-neutral-300 font-sans-clean">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#A82025] shrink-0" />
                  <span>Δευτέρα – Παρασκευή: 09:00 – 17:00</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-400">
                  <span className="w-4 inline-block text-center">·</span>
                  <span>Σάββατο & Κυριακή: Κλειστά</span>
                </div>
              </div>
            </div>

            {/* Live Status indicator */}
            <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between text-xs">
              <span className="text-neutral-400">Κατάσταση:</span>
              <span
                className={`inline-flex items-center gap-1.5 font-semibold px-2.5 py-1 rounded-[4px] ${
                  status.isOpen
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-white/[0.04] text-neutral-400 border border-white/[0.06]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500'
                  }`}
                />
                {status.statusText}
              </span>
            </div>
          </div>

          {/* Window 2: Physical Location & Driving Directions */}
          <div className="rounded-[4px] bg-[#141519] border border-white/[0.07] p-7 sm:p-9 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#858994] font-semibold font-sans-clean">
                  Διεύθυνση & Οδηγίες
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mt-1">
                  Συνεργείο στα Ιωάννινα
                </h3>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#A82025] shrink-0 mt-0.5" />
                <div>
                  <div className="text-lg font-semibold text-white">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-sans-clean">
                    Τ.Κ. {BUSINESS_INFO.postalCode}, Ιωάννινα
                  </div>
                </div>
              </div>

              {/* Arrival Advantages */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.07] text-xs sm:text-sm text-neutral-300 font-sans-clean">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Κομβικό σημείο με εύκολη είσοδο και έξοδο</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Άνετος χώρος στάθμευσης για παράδοση οχήματος</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Άμεση σύνδεση με την περιφερειακή οδό Ιωαννίνων</span>
                </div>
              </div>
            </div>

            {/* Google Directions Button */}
            <div className="pt-4 border-t border-white/[0.07]">
              <a
                href={BUSINESS_INFO.googleDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-[4px] bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm transition-all border border-white/[0.12] hover:border-white/[0.25] active:scale-95"
              >
                <Navigation className="w-4 h-4 text-[#A82025]" />
                <span>Οδηγίες Πλοήγησης στο Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
