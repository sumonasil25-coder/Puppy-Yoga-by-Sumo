import React, { useState } from 'react';
import { X, Building2, Check, Sparkles, Users, Calendar, ShieldCheck, Mail } from 'lucide-react';

interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporateModal: React.FC<CorporateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [teamSize, setTeamSize] = useState('15-25 people');
  const [preferredCity, setPreferredCity] = useState('Bangalore');
  const [targetDate, setTargetDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName && contactName && workEmail) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-xl rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1A2E] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-lg">
              🏢
            </div>
            <div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold">
                Private & Corporate Puppy Yoga
              </h3>
              <p className="text-xs text-gray-300">
                Team Building • Offsites • Milestone Celebrations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-3 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                <Check className="w-10 h-10" />
              </div>
              <h4 className="font-playfair text-2xl font-bold text-[#1A1A2E]">
                Corporate Proposal Requested!
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{contactName}</strong>. Our Corporate Experience Lead will email a customized deck and pricing quote to <strong>{workEmail}</strong> within 4 business hours.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#F97316] text-white text-xs font-semibold shadow-xs cursor-pointer mt-4"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#FFF2E6] p-4 rounded-2xl border border-[#FFE5D4] space-y-1">
                <div className="text-xs font-bold text-[#1A1A2E] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>What We Provide For Companies:</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  Full studio booking OR on-site office setup, certified yoga instructor, on-site vet, 6-10 shelter puppies, sanitized mats, photographer, and refreshments.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Swiggy / Google / Zerodha"
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Priya Singh (HR Lead)"
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="priya@company.com"
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Estimated Team Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  >
                    <option value="10-15 people">Small Team (10-15 people)</option>
                    <option value="15-25 people">Mid Size (15-25 people)</option>
                    <option value="25-35 people">Large Group (25-35 people)</option>
                    <option value="35+ people">Multi-Shift Company Day (35+ people)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Target City
                  </label>
                  <select
                    value={preferredCity}
                    onChange={(e) => setPreferredCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  >
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Goa">Goa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Date / Month
                  </label>
                  <input
                    type="text"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    placeholder="e.g. Mid July 2025"
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Special Notes or Requirements
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. We would like on-site at our Koramangala office, or recommend an aesthetic studio."
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Request Custom Team Proposal</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
