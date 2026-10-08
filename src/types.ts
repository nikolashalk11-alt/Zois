export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  carModel?: string;
  category?: 'service' | 'diagnostics' | 'brakes' | 'general';
  isLocalGuide?: boolean;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  features: string[];
}

export interface DaySchedule {
  day: string;
  hours: string;
  isOpen: boolean;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ...
}
