import React from 'react';
import { EventItem } from '../../types';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  User, 
  CheckCircle2, 
  Info,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onBook: (event: EventItem) => void;
  onJoinWaitlist: (event: EventItem) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onBook,
  onJoinWaitlist,
}) => {
  if (!event) return null;

  const isSoldOut = event.isSoldOut || event.availableSeats === 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Overlay */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1A1A2E] via-[#1A1A2E]/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                📍 {event.city} • {event.locality}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                🐾 {event.puppyCount} Adoptable Puppies ({event.puppyAgeRange})
              </span>
              <span className="bg-[#22C55E]/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                ✓ Vet Supervised
              </span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl font-bold leading-tight">
              {event.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          {/* Key Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FFF2E6] p-4 rounded-2xl border border-[#FFE5D4]">
            <div>
              <div className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Date</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1A1A2E] mt-0.5">
                {event.date}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Timing</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1A1A2E] mt-0.5">
                {event.time}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Venue</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1A1A2E] mt-0.5 line-clamp-1">
                {event.venueName}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Spots</span>
              </div>
              <div className={`text-xs sm:text-sm font-bold mt-0.5 ${isSoldOut ? 'text-red-500' : 'text-[#22C55E]'}`}>
                {isSoldOut ? 'Sold Out' : `${event.availableSeats} Available`}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-playfair text-xl font-bold text-[#1A1A2E]">
              About This Experience
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-sans">
              {event.description}
            </p>
          </div>

          {/* Detailed Schedule Timeline */}
          <div className="space-y-3">
            <h3 className="font-playfair text-xl font-bold text-[#1A1A2E]">
              75-Minute Session Schedule
            </h3>
            <div className="space-y-2.5">
              {event.schedule.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#FFE5D4]">
                  <span className="font-mono text-xs font-bold text-[#F97316] bg-[#FFE5D4]/60 px-2 py-1 rounded-lg shrink-0">
                    {item.time}
                  </span>
                  <div className="space-y-0.5">
                    <h5 className="text-xs sm:text-sm font-bold text-[#1A1A2E]">
                      {item.activity}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor & Shelter Partner 2-Col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instructor */}
            <div className="bg-white p-5 rounded-2xl border border-[#FFE5D4] space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Lead Yoga Guide
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={event.instructorPhoto}
                  alt={event.instructorName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FFE5D4]"
                />
                <div>
                  <h4 className="font-playfair text-base font-bold text-[#1A1A2E]">
                    {event.instructorName}
                  </h4>
                  <p className="text-xs text-[#F97316] font-medium">
                    {event.instructorTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Shelter Partner */}
            <div className="bg-white p-5 rounded-2xl border border-[#FFE5D4] space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Beneficiary Shelter Partner
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={event.shelterPartner.logo}
                  alt={event.shelterPartner.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#FFE5D4]"
                />
                <div>
                  <h4 className="font-playfair text-base font-bold text-[#1A1A2E]">
                    {event.shelterPartner.name}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {event.shelterPartner.adoptedCount}+ Pups Successfully Adopted
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included & What to Bring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFF2E6] p-5 rounded-2xl border border-[#FFE5D4] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A2E] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span>What's Included in Your Ticket</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {event.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#22C55E] font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#FFE5D4] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A2E] flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#3B82F6]" />
                <span>What to Bring</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {event.whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#F97316]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Venue & Location Address */}
          <div className="bg-white p-5 rounded-2xl border border-[#FFE5D4] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Venue & Address</span>
            </h4>
            <div className="text-sm font-semibold text-[#1A1A2E]">
              {event.venueName}
            </div>
            <p className="text-xs text-gray-600">
              {event.venueAddress}
            </p>
          </div>
        </div>

        {/* Modal Bottom Bar: Price & CTA */}
        <div className="bg-white p-6 border-t border-[#FFE5D4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[11px] text-gray-500 uppercase font-semibold">
              Total Ticket Price (All-Inclusive)
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-playfair text-2xl font-bold text-[#1A1A2E]">
                ₹{event.price}
              </span>
              <span className="text-xs text-gray-500">per participant</span>
              {event.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{event.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1A1A2E] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Back
            </button>

            {isSoldOut ? (
              <button
                onClick={() => {
                  onClose();
                  onJoinWaitlist(event);
                }}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-[#1A1A2E] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                Join Waitlist
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onBook(event);
                }}
                className="w-1/2 sm:w-auto px-7 py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                Book This Spot
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
