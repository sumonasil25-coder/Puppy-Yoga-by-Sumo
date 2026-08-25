import React, { useState } from 'react';
import { EventItem, BookingDetails } from '../../types';
import { 
  X, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  Heart, 
  Tag, 
  IndianRupee, 
  Sparkles, 
  QrCode, 
  Download, 
  Check, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface BookingFlowModalProps {
  event: EventItem | null;
  onClose: () => void;
  onBookingComplete: (booking: BookingDetails) => void;
}

export const BookingFlowModal: React.FC<BookingFlowModalProps> = ({
  event,
  onClose,
  onBookingComplete,
}) => {
  if (!event) return null;

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [tickets, setTickets] = useState(1);
  const [donation, setDonation] = useState<number>(250);
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');

  // Form Fields
  const [primaryName, setPrimaryName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [attendeeNames, setAttendeeNames] = useState<string[]>(['']);
  const [paymentMethod, setPaymentMethod] = useState<'UPI / GooglePay / PhonePe' | 'Credit / Debit Card' | 'Net Banking'>('UPI / GooglePay / PhonePe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);

  // Price calculations
  const subtotal = event.price * tickets;
  const discountRate = appliedPromo === 'PAWSOME10' ? 0.10 : appliedPromo === 'PUPPYLOVE' ? 0.15 : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const totalAmount = subtotal - discountAmount + donation;

  const handleTicketChange = (val: number) => {
    setTickets(val);
    const newNames = Array(val).fill('').map((_, i) => attendeeNames[i] || '');
    setAttendeeNames(newNames);
  };

  const handleApplyPromo = () => {
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (code === 'PAWSOME10') {
      setAppliedPromo('PAWSOME10');
    } else if (code === 'PUPPYLOVE') {
      setAppliedPromo('PUPPYLOVE');
    } else {
      setPromoError('Invalid promo code. Try "PAWSOME10" for 10% off!');
    }
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryName || !email || !phone) return;
    setStep('payment');
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const bookingData: BookingDetails = {
        bookingId: `PYE-${Math.floor(100000 + Math.random() * 900000)}`,
        event,
        primaryName,
        email,
        phone,
        tickets,
        totalAmount,
        donationAmount: donation,
        discountAmount,
        promoCode: appliedPromo || undefined,
        attendees: attendeeNames.filter(n => n.trim().length > 0),
        bookedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        paymentMethod,
        status: 'Confirmed'
      };
      setConfirmedBooking(bookingData);
      setStep('confirmed');
      onBookingComplete(bookingData);
    }, 1200);
  };

  const downloadCalendarICS = () => {
    if (!confirmedBooking) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Puppy Yoga Events//India//EN
BEGIN:VEVENT
UID:${confirmedBooking.bookingId}@puppyyogaevents.in
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${event.title}
DESCRIPTION:Puppy Yoga session with ${event.shelterPartner.name}. Sanitized mats provided.
LOCATION:${event.venueAddress}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `PuppyYoga_${event.city}_Pass.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#1A1A2E] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-lg">
              🐾
            </div>
            <div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold">
                {step === 'confirmed' ? 'Mat Reserved!' : 'Reserve Your Mat'}
              </h3>
              <p className="text-xs text-gray-300">
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

        {/* STEP 1: Details & Selection */}
        {step === 'details' && (
          <form onSubmit={handleProceedToPayment} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Ticket Counter */}
            <div className="bg-white p-4 rounded-2xl border border-[#FFE5D4] flex items-center justify-between">
              <div>
                <label className="text-xs font-bold text-[#1A1A2E] uppercase block">
                  Number of Yogis / Mats
                </label>
                <span className="text-xs text-gray-500">
                  ₹{event.price} per mat (Sanitized cork mat included)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleTicketChange(Math.max(1, tickets - 1))}
                  className="w-8 h-8 rounded-lg bg-[#FFF2E6] hover:bg-[#FFE5D4] text-[#1A1A2E] font-bold text-sm flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-bold text-base px-2">{tickets}</span>
                <button
                  type="button"
                  onClick={() => handleTicketChange(Math.min(Math.min(5, event.availableSeats), tickets + 1))}
                  className="w-8 h-8 rounded-lg bg-[#FFF2E6] hover:bg-[#FFE5D4] text-[#1A1A2E] font-bold text-sm flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Attendee Info Inputs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Primary Contact Details (For Digital Pass)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={primaryName}
                    onChange={(e) => {
                      setPrimaryName(e.target.value);
                      const newNames = [...attendeeNames];
                      newNames[0] = e.target.value;
                      setAttendeeNames(newNames);
                    }}
                    placeholder="e.g. Nisha Sharma"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nisha@example.com"
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    WhatsApp Phone Number (For Instant Pass & Updates) *
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2 rounded-xl bg-gray-100 text-xs font-medium text-gray-600 flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Shelter Medical Fund Donation */}
            <div className="bg-[#FFF2E6] p-4 rounded-2xl border border-[#FFE5D4] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1A1A2E] flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#FF6B35] fill-[#FF6B35]" />
                  <span>Support {event.shelterPartner.shortName} Puppy Medical Fund</span>
                </span>
              </div>
              <p className="text-[11px] text-gray-600">
                100% of this donation goes directly to vaccinations and foster milk formulas for rescued puppies.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[0, 100, 250, 500, 1000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setDonation(amt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      donation === amt
                        ? 'bg-[#F97316] text-white shadow-xs'
                        : 'bg-white text-gray-700 hover:bg-[#FFE5D4] border border-[#FFE5D4]'
                    }`}
                  >
                    {amt === 0 ? 'No extra tip' : `+ ₹${amt}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-700">
                Have a Promo Code? (Try <span className="font-mono font-bold text-[#F97316]">PAWSOME10</span>)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs uppercase text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-4 py-2 rounded-xl bg-[#1A1A2E] hover:bg-gray-800 text-white text-xs font-semibold cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {appliedPromo && (
                <p className="text-xs text-[#22C55E] font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" /> Coupon applied: {appliedPromo} (10% off!)
                </p>
              )}
              {promoError && (
                <p className="text-xs text-red-500 font-medium">
                  {promoError}
                </p>
              )}
            </div>

            {/* Price Breakdown Summary */}
            <div className="bg-white p-4 rounded-2xl border border-[#FFE5D4] space-y-1.5 text-xs text-gray-700">
              <div className="flex justify-between">
                <span>Tickets ({tickets} × ₹{event.price})</span>
                <span className="font-semibold">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#22C55E]">
                  <span>Discount ({appliedPromo})</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}
              {donation > 0 && (
                <div className="flex justify-between text-[#FF6B35]">
                  <span>Shelter Medical Fund Donation</span>
                  <span>+ ₹{donation}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#FFE5D4] flex justify-between font-bold text-sm text-[#1A1A2E]">
                <span>Total Amount Payable</span>
                <span className="text-[#F97316] font-playfair text-lg">₹{totalAmount}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Continue to Payment (₹{totalAmount})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Payment Simulation */}
        {step === 'payment' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-[#FFF2E6] p-4 rounded-2xl border border-[#FFE5D4] flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 block">Total Amount to Pay</span>
                <span className="font-playfair text-2xl font-bold text-[#1A1A2E]">₹{totalAmount}</span>
              </div>
              <span className="text-xs font-semibold text-[#22C55E] bg-white px-2.5 py-1 rounded-full border border-[#22C55E]/30">
                100% Safe & Encrypted
              </span>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block">
                Select Indian Payment Gateway Mode
              </label>

              <div className="space-y-2">
                {[
                  { id: 'UPI / GooglePay / PhonePe', label: 'UPI / Google Pay / PhonePe / Paytm', icon: '📱', sub: 'Instant zero-fee payment' },
                  { id: 'Credit / Debit Card', label: 'Credit or Debit Card (Visa, Mastercard, RuPay)', icon: '💳', sub: 'Instant confirmation' },
                  { id: 'Net Banking', label: 'Net Banking (HDFC, ICICI, SBI, Axis, etc.)', icon: '🏦', sub: 'Direct bank transfer' }
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`w-full p-3.5 rounded-2xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                      paymentMethod === m.id
                        ? 'bg-white border-[#F97316] ring-2 ring-[#F97316]/20 shadow-xs'
                        : 'bg-white/60 hover:bg-white border-[#FFE5D4]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{m.icon}</span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#1A1A2E]">
                          {m.label}
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {m.sub}
                        </div>
                      </div>
                    </div>
                    {paymentMethod === m.id && (
                      <CheckCircle className="w-5 h-5 text-[#F97316]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="w-1/3 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1A1A2E] text-xs font-semibold transition-colors cursor-pointer"
              >
                Back
              </button>

              <button
                type="button"
                disabled={isProcessing}
                onClick={handleSimulatePayment}
                className="w-2/3 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Confirming Pass...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pay ₹{totalAmount} & Confirm Pass</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Confirmed Digital Pass */}
        {step === 'confirmed' && confirmedBooking && (
          <div className="p-6 sm:p-8 space-y-6 text-center max-h-[75vh] overflow-y-auto">
            {/* Success Icon */}
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center animate-in zoom-in-50">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                Booking Confirmed!
              </span>
              <h3 className="font-playfair text-2xl font-bold text-[#1A1A2E]">
                See You On The Mat, {confirmedBooking.primaryName.split(' ')[0]}! 🐾
              </h3>
              <p className="text-xs text-gray-600">
                A confirmation SMS & WhatsApp pass has been sent to <strong>+91 {confirmedBooking.phone}</strong>.
              </p>
            </div>

            {/* Digital Mat Pass Card */}
            <div className="bg-white p-5 rounded-3xl border-2 border-dashed border-[#F97316]/40 text-left shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-bold uppercase text-gray-400">Pass Number</span>
                  <div className="font-mono text-sm font-bold text-[#F97316]">{confirmedBooking.bookingId}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-gray-400">Mats Reserved</span>
                  <div className="text-sm font-bold text-[#1A1A2E]">{confirmedBooking.tickets} Spot(s)</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-[#1A1A2E]">{event.title}</div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{event.venueName}, {event.locality}</span>
                </div>
              </div>

              <div className="bg-[#FFF2E6] p-3 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-gray-500 block">Total Paid:</span>
                  <span className="font-bold text-[#1A1A2E]">₹{confirmedBooking.totalAmount}</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg p-1 border border-[#FFE5D4] flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-[#1A1A2E]" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadCalendarICS}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-[#FFE5D4] hover:bg-[#FFE5D4]/80 text-[#1A1A2E] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#F97316]" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-1/2 py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
