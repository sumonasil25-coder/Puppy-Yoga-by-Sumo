import React, { useState, useEffect } from 'react';
import { EventItem, BlogPost, FAQItem, ShelterPartner } from '../../types';
import { Search, X, Calendar, BookOpen, HelpCircle, MapPin, ArrowRight } from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: EventItem[];
  blogPosts: BlogPost[];
  faqs: FAQItem[];
  shelters: ShelterPartner[];
  onSelectEvent: (event: EventItem) => void;
  onSelectPost: (post: BlogPost) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  events,
  blogPosts,
  faqs,
  shelters,
  onSelectEvent,
  onSelectPost,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Handled in parent
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchingEvents = q 
    ? events.filter(e => e.title.toLowerCase().includes(q) || e.city.toLowerCase().includes(q) || e.locality.toLowerCase().includes(q))
    : events.slice(0, 3);

  const matchingBlogs = q
    ? blogPosts.filter(b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
    : blogPosts.slice(0, 2);

  const matchingFaqs = q
    ? faqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q))
    : [];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#FDF8F4] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden text-left space-y-4 p-5 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-[#F97316] absolute left-3.5" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, cities (Bangalore, Mumbai), yoga tips, adoption FAQs..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-[#FFE5D4] text-sm text-[#1A1A2E] placeholder:text-gray-400 focus:outline-hidden focus:border-[#F97316] shadow-xs"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 text-xs text-gray-400 hover:text-gray-600 p-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-5 pr-1">
          {/* Events Section */}
          {matchingEvents.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 px-1">
                <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Upcoming Sessions</span>
              </div>
              <div className="space-y-1.5">
                {matchingEvents.map((evt) => (
                  <button
                    key={evt.id}
                    onClick={() => {
                      onClose();
                      onSelectEvent(evt);
                    }}
                    className="w-full p-3 rounded-2xl bg-white hover:bg-[#FFF2E6] border border-[#FFE5D4] text-left flex items-center justify-between transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#F97316]">
                          {evt.title}
                        </div>
                        <div className="text-[11px] text-gray-500">
                          📍 {evt.city} ({evt.locality}) • {evt.date} • ₹{evt.price}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F97316]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Blogs Section */}
          {matchingBlogs.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 px-1">
                <BookOpen className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Articles & Guides</span>
              </div>
              <div className="space-y-1.5">
                {matchingBlogs.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onClose();
                      onSelectPost(b);
                    }}
                    className="w-full p-3 rounded-2xl bg-white hover:bg-[#FFF2E6] border border-[#FFE5D4] text-left flex items-center justify-between transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#F97316] line-clamp-1">
                          {b.title}
                        </div>
                        <div className="text-[11px] text-gray-500">
                          {b.category} • {b.readTime}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F97316]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {matchingFaqs.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 px-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Frequently Asked Questions</span>
              </div>
              <div className="space-y-1.5">
                {matchingFaqs.map((f) => (
                  <div
                    key={f.id}
                    className="p-3 rounded-2xl bg-white border border-[#FFE5D4] text-left space-y-1"
                  >
                    <div className="text-xs font-bold text-[#1A1A2E]">
                      {f.question}
                    </div>
                    <div className="text-xs text-gray-600 line-clamp-2">
                      {f.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="pt-2 border-t border-[#FFE5D4] flex items-center justify-between text-[11px] text-gray-400">
          <span>Tip: Press ESC or click outside to dismiss</span>
          <span className="text-[#F97316] font-semibold">Puppy Yoga Events 🐾</span>
        </div>
      </div>
    </div>
  );
};
