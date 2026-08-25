import React, { useState } from 'react';
import { EventItem } from '../../types';
import { X, Bell, Check, Sparkles, Phone, Mail } from 'lucide-react';

interface WaitlistModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && phone) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-lg rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1A2E] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center text-[#F97316]">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-playfair text-lg font-bold">
                Join Priority Waitlist
              </h3>
              <p className="text-xs text-gray-300 line-clamp-1">
                {event.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center space-y-4 py-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-[#1A1A2E]">
                You're #{Math.floor(Math.random() * 5 + 3)} on the Priority Waitlist!
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                If an attendee reschedules or we open an additional afternoon slot, we will ping you on WhatsApp at <strong>+91 {phone}</strong> instantly.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#F97316] text-white text-xs font-semibold shadow-xs cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-gray-600 leading-relaxed">
                This session is currently at capacity. Enter your details to get first dibs on cancellations or newly released weekend slots in <strong>{event.city}</strong>.
              </p>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Kapoor"
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  WhatsApp Number (For Instant SMS/WhatsApp Ping)
                </label>
                <div className="flex gap-2">
                  <span className="px-3 py-2.5 rounded-xl bg-gray-100 text-xs font-medium text-gray-600 flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1A1A2E] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4 text-[#F97316]" />
                  <span>Notify Me When Slots Open</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
