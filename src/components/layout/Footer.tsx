import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Youtube, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react';
import { City } from '../../types';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  setSelectedCity: (city: City) => void;
  onOpenCorporate: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  setSelectedCity,
  onOpenCorporate,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const cities: City[] = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Pune', 'Hyderabad', 'Goa'];

  return (
    <footer className="bg-[#1A1A2E] text-gray-300 pt-16 pb-12 border-t-4 border-[#F97316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Welfare Guarantee Banner */}
        <div className="bg-[#24243D] border border-white/10 rounded-2xl p-6 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#F97316]" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Our 100% Ethical & Vet-Supervised Pledge</h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Every puppy is from registered non-profit shelters, fully vaccinated, monitored by on-site veterinarians, and given mandatory rest shifts.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setActiveTab('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
          >
            Read Welfare Protocol →
          </button>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F97316] flex items-center justify-center text-lg">
                🐾
              </div>
              <span className="font-playfair text-2xl font-bold text-white tracking-tight">
                Puppy Yoga <span className="text-[#F97316]">Events</span>
              </span>
            </div>
            <p className="font-caveat text-lg text-[#FFE5D4]">
              "Where wellness meets puppy love."
            </p>
            <p className="text-xs text-gray-400 leading-relaxed pr-6">
              India's pioneer in animal-assisted wellness experiences. We combine gentle restorative yoga with puppy socialization in certified studios, creating joy, relieving urban stress, and fostering ethical shelter adoptions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#F97316] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#F97316] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Subscribe to YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#22C55E]/20 hover:bg-[#22C55E] text-[#22C55E] hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                aria-label="Chat on WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Upcoming Sessions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Our Brand Story & Shelters
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Photo & Video Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F97316] transition-colors cursor-pointer"
                >
                  Wellness & Adoption Blog
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCorporate}
                  className="hover:text-[#FFB800] text-[#FFB800]/90 font-medium transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Corporate & Team Days</span>
                  <Sparkles className="w-3 h-3 text-[#FFB800]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Indian Cities Directory */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Cities Active
            </h4>
            <ul className="space-y-2.5 text-xs">
              {cities.map((city) => (
                <li key={city}>
                  <button
                    onClick={() => {
                      setSelectedCity(city);
                      setActiveTab('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#F97316] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-[#F97316]" />
                    <span>{city} Sessions</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup Column */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">
              Stay in the Cuddle Loop
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Get notified first when new city weekend slots open and receive 10% off your first mat booking.
            </p>

            {isSubscribed ? (
              <div className="bg-[#22C55E]/10 border border-[#22C55E]/40 rounded-xl p-3 text-xs text-[#22C55E] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Welcome to the pack!</div>
                  <div className="text-[11px] text-gray-300 mt-0.5">
                    Use code <span className="font-mono font-bold text-[#FFB800]">PAWSOME10</span> for 10% off.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder:text-gray-500 focus:outline-hidden focus:border-[#F97316]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get 10% Off Code</span>
                </button>
              </form>
            )}

            {/* Emergency Rescue Helpline info */}
            <div className="mt-4 pt-4 border-t border-white/10 text-[11px] text-gray-400">
              <span className="text-gray-300 font-semibold block">Shelter & Emergency Helplines:</span>
              <span className="block mt-0.5">Bangalore: CARE (+91 94839 34329)</span>
              <span className="block">Mumbai: YODA (+91 98209 52339)</span>
              <span className="block">Delhi: Friendicoes (+91 11 2432 0707)</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Puppy Yoga Events India. Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF6B35] inline fill-[#FF6B35]" />
            <span>for wellness & rescue puppies.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Shelter Partnerships
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQ & Safety Charter
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Host a Studio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
