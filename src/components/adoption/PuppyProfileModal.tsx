import React, { useState } from 'react';
import { PuppyInfo } from '../../types';
import { X, Heart, MapPin, Check, ShieldCheck, Home, Phone, User, Mail } from 'lucide-react';

interface PuppyProfileModalProps {
  puppy: PuppyInfo | null;
  onClose: () => void;
  onExploreEvents: () => void;
}

export const PuppyProfileModal: React.FC<PuppyProfileModalProps> = ({
  puppy,
  onClose,
  onExploreEvents,
}) => {
  if (!puppy) return null;

  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [experience, setExperience] = useState('First-time dog parent');
  const [houseType, setHouseType] = useState('Apartment with balcony');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail && applicantPhone) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Photo */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900">
          <img
            src={puppy.photo}
            alt={puppy.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1A1A2E] via-[#1A1A2E]/40 to-transparent"></div>

          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#22C55E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {puppy.adoptionStatus}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-0.5 rounded-full">
                📍 {puppy.city}
              </span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold">
              Meet {puppy.name}
            </h2>
            <p className="text-xs text-gray-200">
              {puppy.breed} • {puppy.ageWeeks} weeks old • In care of {puppy.shelterName}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Rescue Story & Personality */}
          <div className="space-y-2">
            <h4 className="font-playfair text-lg font-bold text-[#1A1A2E]">
              {puppy.name}'s Story & Personality
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              "{puppy.story}"
            </p>
            <div className="bg-[#FFF2E6] p-3.5 rounded-2xl border border-[#FFE5D4] text-xs text-[#1A1A2E]">
              <strong>Temperament:</strong> {puppy.temperament}
            </div>
          </div>

          {/* Adoption Form or Success State */}
          {isSubmitted ? (
            <div className="bg-white p-6 rounded-2xl border border-[#22C55E]/40 text-center space-y-3 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-[#1A1A2E]">
                Adoption Inquiry Forwarded!
              </h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                We've shared your profile with the adoption coordinator at <strong>{puppy.shelterName}</strong>. They will contact you via WhatsApp at +91 {applicantPhone}.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onExploreEvents();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#F97316] text-white text-xs font-semibold cursor-pointer shadow-xs"
                >
                  Book a Yoga Mat to Meet {puppy.name}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4 bg-white p-5 rounded-2xl border border-[#FFE5D4]">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-1.5">
                  <Home className="w-4 h-4" />
                  <span>Submit Adoption Expression of Interest</span>
                </h4>
                <span className="text-[11px] text-gray-500">100% Free Service</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Nisha Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="nisha@example.com"
                    className="w-full px-3 py-2 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="98765 43210"
                    className="w-full px-3 py-2 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Living Situation</label>
                  <select
                    value={houseType}
                    onChange={(e) => setHouseType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  >
                    <option value="Apartment with balcony">Apartment with balcony</option>
                    <option value="Independent house / Villa">Independent house / Villa</option>
                    <option value="Gated community with dog park">Gated community with dog park</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Submit Adoption Inquiry for {puppy.name}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
