import React from 'react';
import { EventItem } from '../../types';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Heart, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface EventCardProps {
  event: EventItem;
  onSelectEvent: (event: EventItem) => void;
  onQuickBook: (event: EventItem) => void;
  onJoinWaitlist: (event: EventItem) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onSelectEvent,
  onQuickBook,
  onJoinWaitlist,
}) => {
  const isAlmostFull = event.availableSeats > 0 && event.availableSeats <= 5;
  const isSoldOut = event.isSoldOut || event.availableSeats === 0;

  return (
    <div className="bg-[#FFF2E6] hover:bg-white rounded-3xl overflow-hidden border border-[#FFE5D4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Top Media Container */}
      <div>
        <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

          {/* City Badge Top Left */}
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#1A1A2E] flex items-center gap-1 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{event.city}</span>
          </div>

          {/* Event Type Badge Top Right */}
          <div className="absolute top-3 right-3 bg-[#1A1A2E]/80 backdrop-blur-xs text-[#FFE5D4] text-[11px] font-semibold px-2.5 py-1 rounded-full">
            {event.type}
          </div>

          {/* Overlay Bottom Details */}
          <div className="absolute bottom-3 left-3 right-3 text-white flex items-end justify-between">
            <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg text-xs">
              <Calendar className="w-3.5 h-3.5 text-[#FFE5D4]" />
              <span className="font-medium">{event.date}</span>
            </div>

            <div className="bg-[#F97316] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-xs">
              <span>🐾 {event.puppyCount} Pups</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 text-left space-y-3">
          {/* Locality & Timing */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            <span className="line-clamp-1 font-semibold text-gray-700">
              📍 {event.locality}
            </span>
            <span className="flex items-center gap-1 shrink-0">
              <Clock className="w-3 h-3 text-[#F97316]" />
              <span>{event.time}</span>
            </span>
          </div>

          {/* Event Title */}
          <h3 
            onClick={() => onSelectEvent(event)}
            className="font-playfair text-lg sm:text-xl font-bold text-[#1A1A2E] group-hover:text-[#F97316] transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {event.title}
          </h3>

          {/* Shelter Partner Pill */}
          <div className="flex items-center gap-2 py-1 px-2.5 rounded-xl bg-white/80 border border-[#FFE5D4]">
            <img
              src={event.shelterPartner.logo}
              alt={event.shelterPartner.shortName}
              className="w-5 h-5 rounded-full object-cover"
            />
            <div className="text-[11px] text-gray-600 line-clamp-1">
              Benefiting: <span className="font-semibold text-[#1A1A2E]">{event.shelterPartner.shortName}</span>
            </div>
          </div>

          {/* Seats Availability Bar */}
          <div className="pt-1">
            <div className="flex items-center justify-between text-xs font-semibold mb-1">
              <span className="text-gray-600">Availability:</span>
              {isSoldOut ? (
                <span className="text-red-500 font-bold">Sold Out</span>
              ) : isAlmostFull ? (
                <span className="text-[#FF6B35] font-bold animate-pulse">
                  Only {event.availableSeats} spots left!
                </span>
              ) : (
                <span className="text-[#22C55E]">
                  {event.availableSeats} / {event.totalSeats} spots open
                </span>
              )}
            </div>

            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isSoldOut
                    ? 'bg-red-400 w-full'
                    : isAlmostFull
                    ? 'bg-[#FF6B35]'
                    : 'bg-[#22C55E]'
                }`}
                style={{
                  width: `${isSoldOut ? 100 : Math.round(((event.totalSeats - event.availableSeats) / event.totalSeats) * 100)}%`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Actions */}
      <div className="p-5 pt-0 border-t border-[#FFE5D4]/60 mt-2 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] text-gray-500 uppercase font-semibold">Per Yogi</div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-playfair text-xl font-bold text-[#1A1A2E]">
              ₹{event.price}
            </span>
            {event.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{event.originalPrice}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectEvent(event)}
            className="px-3 py-2 rounded-xl bg-white hover:bg-[#FFE5D4] text-[#1A1A2E] text-xs font-semibold border border-[#FFE5D4] transition-colors cursor-pointer"
          >
            Details
          </button>

          {isSoldOut ? (
            <button
              onClick={() => onJoinWaitlist(event)}
              className="px-4 py-2 rounded-xl bg-[#1A1A2E] hover:bg-gray-800 text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
            >
              Waitlist
            </button>
          ) : (
            <button
              onClick={() => onQuickBook(event)}
              className="px-4 py-2 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1"
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
