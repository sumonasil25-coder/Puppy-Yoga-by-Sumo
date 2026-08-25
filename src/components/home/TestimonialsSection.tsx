import React, { useState } from 'react';
import { Testimonial } from '../../types';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FFE5D4]/20 border-y border-[#FFE5D4]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#F97316]" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            Over 8,500+ <span className="text-[#F97316]">Happy Yogis</span> & Counting
          </h2>
          <p className="text-sm text-gray-600 font-sans">
            Hear from people who found stress relief, joy, and forever four-legged companions at our puppy yoga sessions.
          </p>
        </div>

        {/* Featured Big Card Showcase */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#FFE5D4] relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-[#FFE5D4] opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Avatar / Photo with Pup */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#FFE5D4] shadow-md mb-3">
                <img
                  src={testimonials[currentIndex].photoWithPup || testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-1 text-[#FFB800] mb-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <div className="text-[11px] text-gray-500 font-medium">
                Verified Attendee
              </div>
            </div>

            {/* Quote content */}
            <div className="md:col-span-8 space-y-4 text-left">
              <p className="text-base sm:text-lg text-[#1A1A2E] leading-relaxed font-serif italic">
                "{testimonials[currentIndex].comment}"
              </p>

              <div>
                <h4 className="font-playfair text-lg font-bold text-[#1A1A2E]">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="text-xs text-[#F97316] font-semibold">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-[11px] text-gray-500 mt-1 flex items-center gap-2">
                  <span>📍 {testimonials[currentIndex].eventAttended}</span>
                  {testimonials[currentIndex].adoptedPuppy && (
                    <span className="bg-[#22C55E]/10 text-[#22C55E] px-2 py-0.5 rounded-full font-bold text-[10px] flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5 fill-[#22C55E]" />
                      {testimonials[currentIndex].adoptedPuppy}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#FFE5D4]">
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#F97316]' : 'bg-[#FFE5D4]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-[#FFF2E6] hover:bg-[#FFE5D4] text-[#1A1A2E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-[#FFF2E6] hover:bg-[#FFE5D4] text-[#1A1A2E] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
