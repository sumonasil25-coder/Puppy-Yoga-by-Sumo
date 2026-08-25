import React, { useState, useMemo } from 'react';
import { EventItem, City, EventType } from '../../types';
import { EventCard } from './EventCard';
import { Search, Filter, Calendar, MapPin, Sparkles, Building2, SlidersHorizontal, RefreshCw } from 'lucide-react';

interface EventsViewProps {
  events: EventItem[];
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  onSelectEvent: (event: EventItem) => void;
  onBookEvent: (event: EventItem) => void;
  onJoinWaitlist: (event: EventItem) => void;
  onOpenCorporate: () => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  events,
  selectedCity,
  setSelectedCity,
  onSelectEvent,
  onBookEvent,
  onJoinWaitlist,
  onOpenCorporate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<EventType>('All');
  const [sortBy, setSortBy] = useState<'date' | 'priceAsc' | 'priceDesc'>('date');

  const cities: City[] = ['All', 'Bangalore', 'Mumbai', 'Delhi NCR', 'Pune', 'Hyderabad', 'Goa'];
  const eventTypes: EventType[] = ['All', 'Weekend Morning', 'Sunset Flow', 'Puppy Cuddle Special', 'Beginner Gentle'];

  const filteredEvents = useMemo(() => {
    return events
      .filter((item) => {
        // City match
        if (selectedCity !== 'All' && item.city !== selectedCity) return false;
        // Type match
        if (selectedType !== 'All' && item.type !== selectedType) return false;
        // Search match
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = item.title.toLowerCase().includes(q);
          const matchesLoc = item.locality.toLowerCase().includes(q);
          const matchesCity = item.city.toLowerCase().includes(q);
          const matchesShelter = item.shelterPartner.name.toLowerCase().includes(q);
          if (!matchesTitle && !matchesLoc && !matchesCity && !matchesShelter) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'priceAsc') return a.price - b.price;
        if (sortBy === 'priceDesc') return b.price - a.price;
        return a.rawDate.localeCompare(b.rawDate);
      });
  }, [events, selectedCity, selectedType, searchQuery, sortBy]);

  return (
    <div className="py-10 bg-[#FDF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Find & Book Your Experience</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]">
            Upcoming Puppy Yoga <span className="text-[#F97316]">Sessions</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Limited slots per session to guarantee low noise, gentle interaction, and maximum cuddles for you and our rescue puppies.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#FFF2E6] rounded-3xl p-5 sm:p-6 border border-[#FFE5D4] shadow-sm space-y-4">
          {/* Top Row: Search & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by locality (Indiranagar, Bandra, Hauz Khas), studio, or shelter..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs sm:text-sm text-[#1A1A2E] placeholder:text-gray-400 focus:outline-hidden focus:border-[#F97316]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gray-500 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl bg-white border border-[#FFE5D4] text-xs sm:text-sm text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316] cursor-pointer"
              >
                <option value="date">Sort: Upcoming Dates First</option>
                <option value="priceAsc">Sort: Price (Low to High)</option>
                <option value="priceDesc">Sort: Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* City Filter Pills */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Filter by City:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCity === city
                      ? 'bg-[#F97316] text-white shadow-xs scale-102'
                      : 'bg-white text-gray-700 hover:bg-[#FFE5D4] border border-[#FFE5D4]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Event Type Filter Pills */}
          <div className="pt-2 border-t border-[#FFE5D4]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              Filter by Session Style:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    selectedType === type
                      ? 'bg-[#1A1A2E] text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-white border border-[#FFE5D4]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-600 px-2">
          <span>
            Showing <strong className="text-[#1A1A2E]">{filteredEvents.length}</strong> upcoming puppy yoga events
            {selectedCity !== 'All' && ` in ${selectedCity}`}
          </span>
          {(selectedCity !== 'All' || selectedType !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCity('All');
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="text-[#F97316] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelectEvent={onSelectEvent}
                onQuickBook={onBookEvent}
                onJoinWaitlist={onJoinWaitlist}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#FFE5D4] max-w-lg mx-auto space-y-4">
            <div className="text-5xl">🐶</div>
            <h3 className="font-playfair text-xl font-bold text-[#1A1A2E]">
              No sessions found matching your filters
            </h3>
            <p className="text-xs text-gray-500">
              We frequently add new weekend slots! Try clearing your search query or selecting "All Cities".
            </p>
            <button
              onClick={() => {
                setSelectedCity('All');
                setSelectedType('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#F97316] text-white text-xs font-semibold cursor-pointer"
            >
              Show All Sessions
            </button>
          </div>
        )}

        {/* Corporate Private Event Banner */}
        <div className="bg-linear-to-tr from-[#1A1A2E] to-[#2E2E50] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-[#F97316]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FFB800] uppercase tracking-wider mb-0.5">
                <Sparkles className="w-3 h-3" />
                <span>Team Retreats & Private Celebrations</span>
              </div>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold">
                Looking to host a Private Puppy Yoga for your company or birthday?
              </h3>
              <p className="text-xs text-gray-300 mt-1 max-w-xl">
                We bring certified instructors, sanitized mats, and vetted shelter puppies to your office or private garden for 10–35 people.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCorporate}
            className="px-5 py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold whitespace-nowrap shadow-md transition-all cursor-pointer active:scale-95"
          >
            Inquire for Private Event
          </button>
        </div>
      </div>
    </div>
  );
};
