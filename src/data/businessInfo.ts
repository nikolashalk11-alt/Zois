import { Review, ServiceItem, DaySchedule } from '../types';

export const BUSINESS_INFO = {
  name: 'Zois car service',
  category: 'Συνεργείο αυτοκινήτων στην Ελλάδα',
  rating: 4.9,
  totalReviews: 27,
  phoneDisplay: '+30 694 377 1016',
  phoneRaw: '+306943771016',
  address: 'Λεωφ. Ιωνίας 1, Ιωάννινα 452 21, Ελλάδα',
  city: 'Ιωάννινα',
  postalCode: '452 21',
  googleMapsUrl: 'https://maps.google.com/?q=Zois+car+service+Λεωφ.+Ιωνίας+1+Ιωάννινα+452+21',
  googleDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=39.6586,20.8540',
  googleMapEmbedUrl: 'https://maps.google.com/maps?q=%CE%9B%CE%B5%CF%89%CF%86.+%CE%99%CF%89%CE%BD%CE%AF%CE%B1%CF%82+1,+%CE%99%CF%89%CE%AC%CE%BD%CE%BD%CE%B9%CE%BD%CE%B1+45221&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  { day: 'Κυριακή', hours: 'Κλειστά', isOpen: false, dayIndex: 0 },
  { day: 'Δευτέρα', hours: '9:00 π.μ. – 5:00 μ.μ.', isOpen: true, dayIndex: 1 },
  { day: 'Τρίτη', hours: '9:00 π.μ. – 5:00 μ.μ.', isOpen: true, dayIndex: 2 },
  { day: 'Τετάρτη', hours: '9:00 π.μ. – 5:00 μ.μ.', isOpen: true, dayIndex: 3 },
  { day: 'Πέμπτη', hours: '9:00 π.μ. – 5:00 μ.μ.', isOpen: true, dayIndex: 4 },
  { day: 'Παρασκευή', hours: '9:00 π.μ. – 5:00 μ.μ.', isOpen: true, dayIndex: 5 },
  { day: 'Σάββατο', hours: 'Κλειστά', isOpen: false, dayIndex: 6 },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Κωνσταντίνος Παπαδόπουλος',
    rating: 5,
    timeAgo: 'πριν 2 εβδομάδες',
    comment: 'Εξαιρετικός επαγγελματίας και απόλυτα καταρτισμένος. Εντόπισε άμεσα ηλεκτρονικό σφάλμα στον κινητήρα που σε δύο άλλα συνεργεία δεν έβρισκαν λύση. Τίμιες τιμές, ευγένεια και άμεση παράδοση του αυτοκινήτου.',
    carModel: 'Mercedes-Benz C200',
    category: 'diagnostics',
    isLocalGuide: true,
  },
  {
    id: 'rev-2',
    author: 'Νικόλαος Γεωργίου',
    rating: 5,
    timeAgo: 'πριν 1 μήνα',
    comment: 'Άψογη εξυπηρέτηση, καθαρός και οργανωμένος χώρος. Άλλαξα δισκόφρενα, τακάκια και έγινε πλήρες γενικό service. Μου εξήγησε με ειλικρίνεια τι χρειαζόταν άμεσα και τι μπορούσε να περιμένει. Από τα καλύτερα συνεργεία στα Ιωάννινα!',
    carModel: 'Audi A4 2.0 TDI',
    category: 'brakes',
    isLocalGuide: false,
  },
  {
    id: 'rev-3',
    author: 'Δημήτριος Βασιλείου',
    rating: 5,
    timeAgo: 'πριν 2 μήνες',
    comment: 'Πολύ καλή εμπειρία. Άμεση ανταπόκριση στο τηλέφωνο, με δέχτηκε την ίδια ημέρα για έλεγχο και επισκευή. Εξαιρετική δουλειά χωρίς κρυφά κόστη.',
    carModel: 'BMW 3 Series',
    category: 'service',
    isLocalGuide: true,
  },
  {
    id: 'rev-4',
    author: 'Αλέξανδρος Μάνθος',
    rating: 5,
    timeAgo: 'πριν 3 μήνες',
    comment: 'Επαγγελματισμός στο 100%. Προετοιμασία για ΚΤΕΟ και αλλαγή αμορτισέρ, πέρασε με την πρώτη χωρίς καμία παρατήρηση. Τον εμπιστεύομαι με κλειστά μάτια σε όλα τα οχήματα της οικογένειας.',
    carModel: 'Volkswagen Golf VII',
    category: 'general',
    isLocalGuide: false,
  },
  {
    id: 'rev-5',
    author: 'Χρήστος Σταύρου',
    rating: 5,
    timeAgo: 'πριν 4 μήνες',
    comment: 'Σύγχρονα διαγνωστικά μηχανήματα και εμπειρία σε καινούρια αυτοκίνητα. Καμία περιττή χρέωση. Τέτοιοι επαγγελματίες σπανίζουν στις μέρες μας.',
    carModel: 'Toyota RAV4',
    category: 'diagnostics',
    isLocalGuide: true,
  },
  {
    id: 'rev-6',
    author: 'Γεώργιος Οικονόμου',
    rating: 4,
    timeAgo: 'πριν 5 μήνες',
    comment: 'Πολύ προσεγμένη δουλειά και γρήγορος έλεγχος. Εύκολη πρόσβαση στη Λεωφόρο Ιωνίας.',
    carModel: 'Ford Focus',
    category: 'service',
    isLocalGuide: false,
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'general-service',
    index: '01',
    title: 'Γενικό Service & Προληπτική Συντήρηση',
    description: 'Ολοκληρωμένη συντήρηση κινητήρα σύμφωνα με τις προδιαγραφές του κατασκευαστή με λιπαντικά κορυφαίας ποιότητας και πιστοποιημένα φίλτρα.',
    features: ['Αλλαγή λαδιών & φίλτρου λαδιού', 'Φίλτρα αέρα, καμπίνας & καυσίμου', 'Έλεγχος στάθμης υγρών & μπαταρίας'],
  },
  {
    id: 'diagnostics',
    index: '02',
    title: 'Ηλεκτρονικός & Διαγνωστικός Έλεγχος',
    description: 'Εντοπισμός βλαβών σε πραγματικό χρόνο με σύγχρονο διαγνωστικό εξοπλισμό για ευρωπαϊκά, ασιατικά και αμερικανικά οχήματα.',
    features: ['Διάγνωση εγκεφάλων (ECU)', 'Έλεγχος αισθητήρων & Check Engine', 'Μέτρηση ηλεκτρικών κυκλωμάτων'],
  },
  {
    id: 'brakes-suspension',
    index: '03',
    title: 'Σύστημα Πέδησης & Αναρτήσεις',
    description: 'Απόλυτη ασφάλεια στο δρόμο. Έλεγχος και αντικατάσταση δισκόπλακων, τακακιών, αμορτισέρ και μερών του συστήματος διεύθυνσης.',
    features: ['Δίσκοι & τακάκια υψηλής αντοχής', 'Αμορτισέρ & ελατήρια ανάρτησης', 'Έλεγχος υγρών φρένων'],
  },
  {
    id: 'engine-transmission',
    index: '04',
    title: 'Μηχανολογικές Επισκευές & Μετάδοση',
    description: 'Αποκατάσταση μηχανικών βλαβών, ιμάντες χρονισμού, συμπλέκτες (δίσκος-πλατό) και συστήματα ψύξης κινητήρα.',
    features: ['Σετ χρονισμού & αντλίες νερού', 'Αντικατάσταση δίσκου-πλατό', 'Ψυγεία & θερμοστάτες'],
  },
  {
    id: 'kteo-prep',
    index: '05',
    title: 'Προετοιμασία & Προέλεγχος ΚΤΕΟ',
    description: 'Λεπτομερής τεχνικός προέλεγχος για να εξασφαλίσετε επιτυχή διέλευση από το ΚΤΕΟ χωρίς ταλαιπωρία και έξτρα επισκέψεις.',
    features: ['Έλεγχος φώτων & ρύθμιση δέσμης', 'Μέτρηση καυσαερίων & φρένων', 'Έλεγχος συστήματος διεύθυνσης'],
  },
  {
    id: 'climate-ac',
    index: '06',
    title: 'Σύστημα Κλιματισμού (A/C)',
    description: 'Συντήρηση και έλεγχος διαρροών στο κύκλωμα του κλιματισμού, αναπλήρωση ψυκτικού υγρού (φρέον) και αντιβακτηριδιακή απολύμανση.',
    features: ['Αναπλήρωση φρέον', 'Έλεγχος συμπιεστή & στεγανότητας', 'Καθαρισμός αεραγωγών'],
  },
];

/**
 * Calculates whether the workshop is currently open based on Greek timezone
 */
export function getBusinessStatus(): { isOpen: boolean; statusText: string; nextOpenText: string } {
  try {
    // Format current time in Europe/Athens timezone
    const now = new Date();
    const athensDateStr = now.toLocaleString('en-US', { timeZone: 'Europe/Athens' });
    const athensDate = new Date(athensDateStr);
    const day = athensDate.getDay(); // 0 = Sunday, 1 = Mon, ..., 5 = Fri, 6 = Sat
    const hour = athensDate.getHours();
    const minutes = athensDate.getMinutes();
    const timeInHours = hour + minutes / 60;

    // Working days: Monday (1) to Friday (5), 9:00 (9.0) to 17:00 (17.0)
    const isWeekday = day >= 1 && day <= 5;
    const isWorkingHours = timeInHours >= 9.0 && timeInHours < 17.0;

    if (isWeekday && isWorkingHours) {
      return {
        isOpen: true,
        statusText: 'Ανοιχτά τώρα',
        nextOpenText: 'Κλείνει σήμερα στις 5:00 μ.μ.',
      };
    }

    if (isWeekday && timeInHours < 9.0) {
      return {
        isOpen: false,
        statusText: 'Κλειστά τώρα',
        nextOpenText: 'Ανοίγει σήμερα στις 9:00 π.μ.',
      };
    }

    if (day === 5 && timeInHours >= 17.0) {
      return {
        isOpen: false,
        statusText: 'Κλειστά τώρα',
        nextOpenText: 'Ανοίγει Δευτέρα στις 9:00 π.μ.',
      };
    }

    if (day === 6) {
      return {
        isOpen: false,
        statusText: 'Κλειστά σήμερα (Σάββατο)',
        nextOpenText: 'Ανοίγει Δευτέρα στις 9:00 π.μ.',
      };
    }

    if (day === 0) {
      return {
        isOpen: false,
        statusText: 'Κλειστά σήμερα (Κυριακή)',
        nextOpenText: 'Ανοίγει Δευτέρα στις 9:00 π.μ.',
      };
    }

    return {
      isOpen: false,
      statusText: 'Κλειστά τώρα',
      nextOpenText: 'Ανοίγει αύριο στις 9:00 π.μ.',
    };
  } catch {
    return {
      isOpen: false,
      statusText: 'Δευτέρα – Παρασκευή 9:00 π.μ. – 5:00 μ.μ.',
      nextOpenText: '+30 694 377 1016',
    };
  }
}
