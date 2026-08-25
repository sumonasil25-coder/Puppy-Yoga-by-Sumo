import React, { useState } from 'react';
import { PuppyInfo, City } from '../../types';
import { Heart, MapPin, Sparkles, Info, CheckCircle } from 'lucide-react';

interface AdoptableSpotlightSectionProps {
  puppies: PuppyInfo[];
  selectedCity: City;
  onInquirePuppy: (pup: PuppyInfo) => void;
  onViewAllAdoptions: () => void;
}

export const AdoptableSpotlightSection: React.FC<AdoptableSpotlightSectionProps> = ({
  puppies,
  selectedCity,
  onInquirePuppy,
  onViewAllAdoptions,
}) => {
  const filteredPuppies = selectedCity === 'All' 
    ? puppies 
    : puppies.filter(p => p.city.toLowerCase().includes(selectedCity.toLowerCase()));

  const displayList = filteredPuppies.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-[#FDF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#F97316]" />
              <span>Looking for Forever Families</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Meet Our Adoptable <span className="text-[#F97316]">Puppy Stars</span>
            </h2>
            <p className="text-sm text-gray-600 font-sans max-w-xl">
              These lovable puppies attend our yoga sessions to socialize, play, and meet loving adoptive humans. You can meet them in person at upcoming events!
            </p>
          </div>

          <button
            onClick={onViewAllAdoptions}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-white hover:bg-[#FFE5D4] text-[#1A1A2E] text-xs sm:text-sm font-semibold border border-[#FFE5D4] shadow-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <span>View All Adoptable Pups ({puppies.length})</span>
            <span className="text-[#F97316]">→</span>
          </button>
        </div>

        {/* Puppy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayList.map((pup) => (
            <div
              key={pup.id}
              className="bg-[#FFF2E6] hover:bg-white rounded-3xl overflow-hidden border border-[#FFE5D4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                <img
                  src={pup.photo}
                  alt={pup.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#1A1A2E] flex items-center gap-1 shadow-xs">
                  <MapPin className="w-3 h-3 text-[#F97316]" />
                  <span>{pup.city}</span>
                </div>

                <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs ${
                  pup.adoptionStatus === 'Available'
                    ? 'bg-[#22C55E] text-white'
                    : 'bg-[#FFB800] text-[#1A1A2E]'
                }`}>
                  {pup.adoptionStatus}
                </div>
              </div>

              {/* Puppy Information */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-playfair text-lg font-bold text-[#1A1A2E] group-hover:text-[#F97316] transition-colors">
                      {pup.name}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium font-sans">
                      {pup.ageWeeks} weeks
                    </span>
                  </div>

                  <div className="text-xs text-[#FF6B35] font-semibold mb-2">
                    {pup.breed}
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    "{pup.story}"
                  </p>
                </div>

                <div className="pt-2 border-t border-[#FFE5D4]/80 space-y-2">
                  <div className="text-[11px] text-gray-500 flex items-center gap-1">
                    <span className="font-medium text-gray-700">Shelter:</span> {pup.shelterName}
                  </div>

                  <button
                    onClick={() => onInquirePuppy(pup)}
                    className="w-full py-2 px-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Meet {pup.name} / Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
