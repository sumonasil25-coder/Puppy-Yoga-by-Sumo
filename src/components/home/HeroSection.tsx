import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Star,
  Users,
  Play
} from 'lucide-react';
import { City } from '../../types';

interface HeroSectionProps {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  onExploreEvents: () => void;
  onOpenQuiz: () => void;
  onOpenVideoReel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedCity,
  setSelectedCity,
  onExploreEvents,
  onOpenQuiz,
  onOpenVideoReel,
}) => {
  const cities: City[] = ['All', 'Bangalore', 'Mumbai', 'Delhi NCR', 'Pune', 'Hyderabad', 'Goa'];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-linear-to-b from-[#FFE5D4]/40 via-[#FDF8F4] to-[#FDF8F4]">
      {/* Decorative background paw prints */}
      <div className="absolute top-10 right-8 text-8xl opacity-5 select-none pointer-events-none rotate-12">
        🐾
      </div>
      <div className="absolute bottom-12 left-4 text-7xl opacity-5 select-none pointer-events-none -rotate-12">
        🐾
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE5D4] border border-[#F97316]/30 text-[#F97316] text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-[#F97316] animate-ping"></span>
              <span className="font-sans">India's First Ethical Puppy Yoga Platform</span>
              <span className="text-[#FF6B35]">✨</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A2E] leading-[1.15]">
                Stretch. Snuggle. <br />
                <span className="text-[#F97316] inline-block">Smile.</span>
              </h1>
              <p className="font-caveat text-2xl sm:text-3xl text-[#FF6B35] font-semibold -rotate-1 transform">
                Where restorative wellness meets unconditional puppy love!
              </p>
            </div>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed font-sans">
              Escape everyday stress with 75 minutes of gentle yoga surrounded by rescued shelter puppies. De-stress, boost oxytocin, and help foster puppies find forever loving homes across India.
            </p>

            {/* Quick City Selector Filter */}
            <div className="bg-[#FFF2E6] p-3.5 rounded-2xl border border-[#FFE5D4] shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600 font-medium px-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Choose your city to see upcoming weekend sessions:</span>
                </span>
                <span className="text-[11px] font-bold text-[#F97316]">
                  {selectedCity === 'All' ? 'All Hubs' : `${selectedCity} Active`}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedCity === city
                        ? 'bg-[#F97316] text-white shadow-xs scale-102 font-semibold'
                        : 'bg-white text-gray-700 hover:bg-[#FFE5D4] hover:text-[#1A1A2E]'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onExploreEvents}
                className="px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-sm font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>View {selectedCity === 'All' ? '' : selectedCity} Sessions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#FFF2E6] text-[#1A1A2E] text-sm font-semibold border border-[#FFE5D4] shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Find My Puppy Vibe Quiz</span>
              </button>

              <button
                onClick={onOpenVideoReel}
                className="px-4 py-3.5 rounded-xl text-gray-700 hover:text-[#F97316] text-sm font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-[#FFE5D4] flex items-center justify-center text-[#F97316]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Reel</span>
              </button>
            </div>

            {/* Trust Checklist Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#FFE5D4]">
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Vet on Site</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Heart className="w-4 h-4 text-[#FF6B35] shrink-0 fill-[#FF6B35]/20" />
                <span>100% Shelter Pups</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Star className="w-4 h-4 text-[#FFB800] shrink-0 fill-[#FFB800]" />
                <span>4.95★ Rated (8k+)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Users className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span>Zero Experience Req.</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                  alt="Joyful participant smiling with a cute puppy during yoga class"
                  className="w-full h-80 sm:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Overlay Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#FFE5D4]">
                      Live Session Moments
                    </div>
                    <div className="font-playfair text-lg font-bold">
                      Indiranagar Studio, Bangalore
                    </div>
                    <p className="text-xs text-gray-200">
                      Partnered with CARE Animal Rescue
                    </p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#22C55E]/90 text-white text-xs font-bold shadow-xs">
                    6 Pups Playing
                  </div>
                </div>
              </div>

              {/* Floating Adoption Success Pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-[#FFE5D4] flex items-center gap-3 animate-float max-w-xs">
                <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-[#FFE5D4]">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=120&q=80"
                    alt="Adopted Biscuit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#F97316] uppercase">
                    🎉 Adoption Match!
                  </div>
                  <div className="text-xs font-semibold text-[#1A1A2E]">
                    Biscuit found his forever home!
                  </div>
                  <div className="text-[10px] text-gray-500">
                    428+ shelter puppies adopted to date
                  </div>
                </div>
              </div>

              {/* Floating Rating Pill */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#FFE5D4] flex items-center gap-2">
                <div className="flex text-[#FFB800]">
                  {'★'.repeat(5)}
                </div>
                <span className="text-xs font-bold text-[#1A1A2E]">4.95 / 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
