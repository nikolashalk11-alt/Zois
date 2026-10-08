import { Clock, Star, MapPin, Phone, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, WEEKLY_SCHEDULE, getBusinessStatus } from '../data/businessInfo';

interface GoogleCardSectionProps {
  onOpenReviewModal?: () => void;
  reviewCount?: number;
}

export default function GoogleCardSection({
  reviewCount = 27,
}: GoogleCardSectionProps) {
  const status = getBusinessStatus();
  const todayIndex = new Date().getDay();

  return (
    <section id="google-profile" className="py-20 md:py-28 bg-[#0D0E11] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Balanced Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-2.5 text-xs text-[#858994] font-sans-clean">
            <span className="uppercase tracking-widest font-semibold">Google Business Profile</span>
            <span className="text-white/20">·</span>
            <span>Ιωάννινα</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white tracking-tight">
            Επαληθευμένη παρουσία & στοιχεία λειτουργίας.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 font-sans-clean leading-relaxed">
            Πραγματικές αξιολογήσεις οδηγών, επίσημο εβδομαδιαίο ωράριο και άμεση επικοινωνία με τους τεχνικούς μας.
          </p>
        </div>

        {/* The Balanced Google Profile Window */}
        <div className="rounded-[4px] bg-[#141519] border border-white/[0.07] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Workshop Identity, Rating & Core Contact */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </h3>
                <div className="text-sm text-neutral-400 mt-1 font-sans-clean">
                  {BUSINESS_INFO.category}
                </div>

                {/* Rating & Review Count */}
                <div className="flex items-center gap-2.5 mt-3 flex-wrap">
                  <span className="text-xl font-bold text-white tabular-nums">
                    {BUSINESS_INFO.rating.toString().replace('.', ',')}
                  </span>
                  <div className="flex items-center text-[#A82025] shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A82025] text-[#A82025]" />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-300 font-medium whitespace-nowrap">
                    {reviewCount} αξιολογήσεις
                  </span>
                </div>
              </div>

              {/* Direct Details Stack */}
              <div className="pt-4 border-t border-white/[0.07] space-y-4 text-sm font-sans-clean">
                {/* Διεύθυνση */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A82025] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-[#858994] mb-0.5">Διεύθυνση</div>
                    <a
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-200 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
                    >
                      <span>{BUSINESS_INFO.address}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Τηλέφωνο */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A82025] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs text-[#858994] mb-0.5">Τηλέφωνο Επικοινωνίας</div>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-[#A82025] font-bold text-lg hover:underline tracking-wide tabular-nums"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="p-3 rounded-[4px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-neutral-400">Κατάσταση συνεργείου:</span>
                <span
                  className={`inline-flex items-center gap-1.5 font-semibold ${
                    status.isOpen ? 'text-emerald-400' : 'text-neutral-400'
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

            {/* Right Column: Weekly Schedule Window */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#858994]" />
                  <span>Εβδομαδιαίο Πρόγραμμα Λειτουργίας</span>
                </span>
              </div>

              <div className="bg-[#0F1014] rounded-[4px] p-4 border border-white/[0.06] divide-y divide-white/[0.05] font-mono text-xs sm:text-sm">
                {WEEKLY_SCHEDULE.map((item) => {
                  const isCurrentDay = item.dayIndex === todayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-[4px] transition-colors ${
                        isCurrentDay && item.isOpen
                          ? 'bg-white/[0.07] font-semibold text-white'
                          : isCurrentDay
                          ? 'bg-white/[0.04] text-neutral-400'
                          : 'text-neutral-400'
                      }`}
                    >
                      <span className="font-sans-clean text-xs sm:text-sm">
                        {item.day}
                      </span>
                      <span
                        className={
                          item.isOpen
                            ? isCurrentDay
                              ? 'text-white'
                              : 'text-neutral-300'
                            : 'text-neutral-500'
                        }
                      >
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
