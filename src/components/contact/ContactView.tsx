import React, { useState } from 'react';
import { FAQS } from '../../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Check, 
  HelpCircle, 
  Search,
  Building2,
  Heart
} from 'lucide-react';

export const ContactView: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bangalore');
  const [purpose, setPurpose] = useState('General Question');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqCategories = ['All', 'Puppy Welfare', 'Booking & Pricing', 'Yoga & Experience', 'Adoption & Shelters'];

  const filteredFaqs = FAQS.filter((faq) => {
    if (faqCategory !== 'All' && faq.category !== faqCategory) return false;
    if (faqSearch.trim()) {
      const q = faqSearch.toLowerCase();
      const matchQ = faq.question.toLowerCase().includes(q);
      const matchA = faq.answer.toLowerCase().includes(q);
      if (!matchQ && !matchA) return false;
    }
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="py-12 bg-[#FDF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>We're Here to Help</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]">
            Get in Touch & <span className="text-[#F97316]">Support</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Have questions about session safety, corporate wellness bookings, studio hosting, or shelter adoption? We’d love to connect!
          </p>
        </div>

        {/* Contact Grid: Form + Quick Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#FFE5D4] text-left">
            <h3 className="font-playfair text-2xl font-bold text-[#1A1A2E] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Our team typically replies within 2–4 hours during business days.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-3 animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-playfair text-2xl font-bold text-[#1A1A2E]">
                  Message Received, {name.split(' ')[0]}!
                </h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  We've sent a confirmation email to <strong>{email}</strong>. Our city coordinator will reach out shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-[#F97316] text-white text-xs font-semibold cursor-pointer mt-2"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Nisha Sharma"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nisha@example.com"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      City of Interest
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                    >
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Goa">Goa</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    What is this regarding?
                  </label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  >
                    <option value="General Question">General Event & Ticket Query</option>
                    <option value="Corporate / Team Session">Corporate Team Wellness Retreat (10-35 pax)</option>
                    <option value="Shelter Partnership">Animal Rescue / Shelter Partnership</option>
                    <option value="Host as Studio Partner">Yoga Studio / Venue Partnership</option>
                    <option value="Adoption Query">Puppy Adoption Counseling</option>
                    <option value="Press & Media">Press, Influencer & Media Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us more about what you need..."
                    className="w-full px-3 py-2.5 rounded-xl bg-[#FDF8F4] border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Quick Direct Support & Helplines */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* WhatsApp Quick Connect */}
            <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-white flex items-center justify-center text-xl font-bold">
                  💬
                </div>
                <div>
                  <h4 className="font-playfair text-base font-bold text-[#1A1A2E]">
                    Instant WhatsApp Support
                  </h4>
                  <p className="text-xs text-gray-600">
                    Get answers within 10 minutes on WhatsApp.
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <button
                  onClick={() => openWhatsApp("Hi! I have a question regarding upcoming puppy yoga sessions.")}
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-gray-50 border border-[#22C55E]/30 text-xs font-semibold text-[#1A1A2E] text-left flex items-center justify-between cursor-pointer"
                >
                  <span>"Ask about weekend slots in my city"</span>
                  <span className="text-[#22C55E]">→</span>
                </button>
                <button
                  onClick={() => openWhatsApp("Hi! I'd like to inquire about hosting a private corporate puppy yoga event.")}
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-gray-50 border border-[#22C55E]/30 text-xs font-semibold text-[#1A1A2E] text-left flex items-center justify-between cursor-pointer"
                >
                  <span>"Inquire about corporate team session"</span>
                  <span className="text-[#22C55E]">→</span>
                </button>
              </div>
            </div>

            {/* Email & Studio Info */}
            <div className="bg-white rounded-3xl p-6 border border-[#FFE5D4] shadow-xs space-y-4">
              <h4 className="font-playfair text-lg font-bold text-[#1A1A2E]">
                Direct Contacts
              </h4>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2E6] flex items-center justify-center text-[#F97316]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">General Support</span>
                    <a href="mailto:woof@puppyyogaevents.in" className="text-[#F97316] hover:underline">
                      woof@puppyyogaevents.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2E6] flex items-center justify-center text-[#F97316]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Corporate & Brand Partnerships</span>
                    <a href="mailto:partners@puppyyogaevents.in" className="text-[#F97316] hover:underline">
                      partners@puppyyogaevents.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF2E6] flex items-center justify-center text-[#F97316]">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">Shelter & Vet Welfare Desk</span>
                    <a href="mailto:welfare@puppyyogaevents.in" className="text-[#F97316] hover:underline">
                      welfare@puppyyogaevents.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Question Interactive FAQ Section */}
        <div className="space-y-8 pt-6 border-t border-[#FFE5D4]">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions? We’ve Got Answers</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Frequently Asked <span className="text-[#F97316]">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Everything you need to know about puppy health, hygiene, yoga experience level, and tickets.
            </p>
          </div>

          {/* Search + Category Filter for FAQs */}
          <div className="bg-[#FFF2E6] rounded-3xl p-5 border border-[#FFE5D4] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFaqCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    faqCategory === cat
                      ? 'bg-[#F97316] text-white shadow-xs'
                      : 'bg-white text-gray-700 hover:bg-[#FFE5D4] border border-[#FFE5D4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] focus:outline-hidden focus:border-[#F97316]"
              />
            </div>
          </div>

          {/* Accordion FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-3 text-left">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#FFE5D4] shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FFF2E6]/30 transition-colors cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block">
                        {faq.category}
                      </span>
                      <h4 className="font-playfair text-base sm:text-lg font-bold text-[#1A1A2E]">
                        {faq.question}
                      </h4>
                    </div>

                    <div className={`p-1.5 rounded-full bg-[#FFF2E6] text-[#F97316] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans border-t border-[#FFE5D4]/40 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
