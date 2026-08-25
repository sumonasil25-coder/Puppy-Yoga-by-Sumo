import React, { useState, useEffect } from 'react';
import { City } from '../../types';
import { 
  Heart, 
  MapPin, 
  Search, 
  Calendar, 
  Menu, 
  X, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  onOpenBookingFromNav: () => void;
  onOpenSearch: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCity,
  setSelectedCity,
  onOpenBookingFromNav,
  onOpenSearch,
  onOpenQuiz,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const cities: City[] = ['All', 'Bangalore', 'Mumbai', 'Delhi NCR', 'Pune', 'Hyderabad', 'Goa'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#1A1A2E] text-[#FFE5D4] text-xs py-1.5 px-4 text-center flex items-center justify-center gap-3 transition-colors duration-200">
        <span className="inline-flex items-center gap-1 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          Weekend slots open for Bangalore, Mumbai & Delhi NCR!
        </span>
        <button 
          onClick={onOpenQuiz}
          className="hidden sm:inline-flex items-center gap-1 underline text-[#FFB800] hover:text-white font-medium cursor-pointer transition-colors"
        >
          <Sparkles className="w-3 h-3 text-[#FFB800]" />
          Take 30s Vibe Quiz (Get 10% Off)
        </button>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDF8F4]/95 backdrop-blur-md shadow-xs border-b border-[#FFE5D4]/80 py-3'
            : 'bg-[#FDF8F4] border-b border-[#FFE5D4]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Icon */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus-visible:outline-[#F97316]"
            >
              <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-[#F97316] to-[#FF6B35] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                <span className="text-xl">🐾</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A2E] leading-none">
                  Puppy Yoga <span className="text-[#F97316]">Events</span>
                </span>
                <span className="text-[11px] font-caveat text-[#FF6B35] font-semibold tracking-wide">
                  Stretch. Snuggle. Smile.
                </span>
              </div>
            </button>

            {/* City Selector Pill (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE5D4]/70 hover:bg-[#FFE5D4] text-[#1A1A2E] text-xs font-medium border border-[#F97316]/20 transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{selectedCity === 'All' ? 'All Cities' : selectedCity}</span>
                <span className="text-[10px] text-[#F97316]">▼</span>
              </button>

              {isCityDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-[#FFE5D4] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setIsCityDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Select Your City
                  </div>
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between hover:bg-[#FFF2E6] transition-colors cursor-pointer ${
                        selectedCity === city ? 'font-bold text-[#F97316] bg-[#FFF2E6]/60' : 'text-[#1A1A2E]'
                      }`}
                    >
                      <span>{city}</span>
                      {selectedCity === city && <span className="text-xs text-[#F97316]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === link.id
                    ? 'text-[#F97316] font-semibold bg-[#FFE5D4]/50'
                    : 'text-[#1A1A2E]/80 hover:text-[#1A1A2E] hover:bg-[#FFE5D4]/20'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search events, cities, and blogs"
              className="p-2 rounded-xl text-gray-600 hover:text-[#1A1A2E] hover:bg-[#FFE5D4]/50 transition-colors cursor-pointer"
              title="Search (Ctrl + K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Book Now Primary Button */}
            <button
              onClick={onOpenBookingFromNav}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Spot</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-[#FFE5D4]/50 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#FFE5D4] bg-[#FDF8F4] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {/* City Selector for Mobile */}
            <div className="mb-4 pt-2">
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                Filter by City
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-center border transition-colors cursor-pointer ${
                      selectedCity === city
                        ? 'bg-[#F97316] text-white border-[#F97316]'
                        : 'bg-[#FFF2E6] text-[#1A1A2E] border-[#FFE5D4]'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav List */}
            <div className="space-y-1 py-2 border-y border-[#FFE5D4]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between cursor-pointer ${
                    activeTab === link.id
                      ? 'bg-[#FFE5D4] text-[#F97316] font-semibold'
                      : 'text-[#1A1A2E] hover:bg-[#FFE5D4]/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-gray-400">→</span>
                </button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingFromNav();
                }}
                className="w-full py-3 rounded-xl bg-[#F97316] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Upcoming Event</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full py-2.5 rounded-xl bg-[#FFE5D4] text-[#1A1A2E] text-xs font-semibold flex items-center justify-center gap-2 border border-[#F97316]/30 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                <span>Take 30s Puppy Yoga Vibe Quiz</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
