export type City = 'All' | 'Bangalore' | 'Mumbai' | 'Delhi NCR' | 'Pune' | 'Hyderabad' | 'Goa';

export type EventType = 'All' | 'Weekend Morning' | 'Sunset Flow' | 'Puppy Cuddle Special' | 'Beginner Gentle' | 'Corporate Wellness';

export interface ShelterPartner {
  id: string;
  name: string;
  shortName: string;
  city: string;
  logo: string;
  website: string;
  description: string;
  adoptedCount: number;
  featuredPuppies: string[];
}

export interface PuppyInfo {
  id: string;
  name: string;
  ageWeeks: number;
  breed: string;
  temperament: string;
  shelterId: string;
  shelterName: string;
  photo: string;
  adoptionStatus: 'Available' | 'Adoption In Progress' | 'Adopted at Event';
  story: string;
  city: string;
}

export interface EventItem {
  id: string;
  title: string;
  city: City;
  locality: string;
  venueName: string;
  venueAddress: string;
  date: string; // e.g. "Sat, 14 Jun 2025"
  rawDate: string; // YYYY-MM-DD
  time: string; // e.g. "9:00 AM - 10:15 AM"
  price: number; // in INR e.g. 1500
  originalPrice?: number;
  totalSeats: number;
  availableSeats: number;
  type: EventType;
  image: string;
  instructorName: string;
  instructorTitle: string;
  instructorPhoto: string;
  shelterPartner: ShelterPartner;
  puppyCount: number;
  puppyAgeRange: string;
  description: string;
  schedule: { time: string; activity: string; details: string }[];
  includes: string[];
  whatToBring: string[];
  isSoldOut?: boolean;
  isFeatured?: boolean;
  featuredPuppies: PuppyInfo[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  comment: string;
  eventAttended: string;
  date: string;
  adoptedPuppy?: string;
  photoWithPup?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Wellness' | 'Mental Health' | 'Adoption' | 'Yoga Tips' | 'Shelter Stories';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
  keyTakeaways: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  city: string;
  date: string;
  imageUrl: string;
  category: 'Cuddle Moments' | 'Yoga Poses' | 'Adoption Days' | 'BTS & Vet Care';
  caption: string;
  likes: number;
  videoUrl?: string;
  isVideo?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Booking & Pricing' | 'Puppy Welfare' | 'Yoga & Experience' | 'Adoption & Shelters';
  question: string;
  answer: string;
}

export interface BookingDetails {
  bookingId: string;
  event: EventItem;
  primaryName: string;
  email: string;
  phone: string;
  tickets: number;
  totalAmount: number;
  donationAmount: number;
  discountAmount: number;
  promoCode?: string;
  attendees: string[];
  bookedAt: string;
  paymentMethod: 'UPI / GooglePay / PhonePe' | 'Credit / Debit Card' | 'Net Banking';
  status: 'Confirmed' | 'Waitlisted';
}
