import React, { useState } from 'react';
import { Calendar, Smile, Camera, Heart, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Book Your Mat Online',
      subtitle: 'Pick Your City & Slot',
      icon: Calendar,
      description: 'Choose your preferred weekend slot in Bangalore, Mumbai, Delhi, Pune, Hyderabad, or Goa. We prepare sanitized cork yoga mats, props, and refreshing drinks for you.',
      tag: '5-Minute Booking',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
      tips: ['All skill levels welcome', 'Sanitized mats provided', 'Small intimate groups (15-22 max)']
    },
    {
      num: '02',
      title: '40-Min Gentle Yoga Flow',
      subtitle: 'Stretch & Unwind with Pups Around',
      icon: Smile,
      description: 'Our certified RYT-500 instructors guide you through slow-paced restorative stretching and breathwork. Puppies roam freely, investigating mats, shoes, and offering playful greetings.',
      tag: 'Zero Pressure Flow',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      tips: ['Gentle poses safe for puppies', 'Veterinarian on-site', 'Organic puppy treats available']
    },
    {
      num: '03',
      title: '35-Min Dedicated Puppy Snuggles',
      subtitle: 'Cuddles, Photos & Pure Serotonin',
      icon: Camera,
      description: 'The yoga mats become a giant cuddle lounge! Enjoy quality one-on-one time with the puppies, take aesthetic photos, and have our photographer capture candid high-res action shots.',
      tag: 'Unlimited Belly Rubs',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      tips: ['Free digital photo album', 'Tummy rubs & toys', 'Polaroid souvenirs']
    },
    {
      num: '04',
      title: 'Adopt or Carry the Glow Home',
      subtitle: 'Support Ethical Rescue Care',
      icon: Heart,
      description: 'Did a puppy steal your heart? Chat with our shelter foster counselors to initiate an adoption. Even if you don’t adopt, your ticket directly funded shelter food and veterinary medication.',
      tag: 'Forever Impact',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
      tips: ['Direct shelter counselor chat', '420+ successful adoptions', '₹250 donation per ticket']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FFE5D4]/30 border-y border-[#FFE5D4]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-caveat text-xl text-[#F97316] font-bold block mb-1">
            Easy, Safe & Unforgettable
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            How a Puppy Yoga Session Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            From stepping into the studio to that warm post-cuddle glow — here’s what your 75-minute journey looks like.
          </p>
        </div>

        {/* Interactive Step Switcher for Mobile & Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-[#F97316] shadow-md ring-2 ring-[#F97316]/20'
                  : 'bg-white/60 hover:bg-white border-[#FFE5D4]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${activeStep === idx ? 'text-[#F97316]' : 'text-gray-400'}`}>
                  STEP {step.num}
                </span>
                <step.icon className={`w-4 h-4 ${activeStep === idx ? 'text-[#F97316]' : 'text-gray-400'}`} />
              </div>
              <h4 className="font-playfair text-sm sm:text-base font-bold text-[#1A1A2E] line-clamp-1">
                {step.title}
              </h4>
              <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                {step.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#FFE5D4] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Information */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <span>{steps[activeStep].tag}</span>
            </div>

            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
              {steps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
              {steps[activeStep].description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Session Highlights:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {steps[activeStep].tips.map((tip, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-[#1A1A2E] bg-[#FFF2E6] px-2.5 py-1.5 rounded-lg border border-[#FFE5D4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onBookNow}
                className="px-5 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                Book This Experience
              </button>
              <span className="font-caveat text-sm text-[#FF6B35]">
                Spots fill up 3–5 days in advance!
              </span>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 sm:aspect-16/10">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                ✨ Step {steps[activeStep].num} in Action
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
