import React from 'react';
import { ShieldCheck, Heart, Stethoscope, Clock, Sparkles, Check } from 'lucide-react';

export const WelfareCharterSection: React.FC = () => {
  const charterPoints = [
    {
      icon: Stethoscope,
      title: 'Licensed Veterinarian on Duty',
      desc: 'A registered veterinary physician conducts pre-session health checks, temperature monitoring, and remains in the studio throughout the entire event.'
    },
    {
      icon: Clock,
      title: 'Strict 30-40 Min Play Cap',
      desc: 'Puppies are never overworked. Litters participate in short, playful shifts with mandatory hydration pauses, quiet cuddle time, and climate-controlled resting playpens.'
    },
    {
      icon: Heart,
      title: '100% Shelter-Sourced & Rescue Pups',
      desc: 'We strictly partner with vetted non-profit animal charities (CARE, YODA, Friendicoes, RESQ). We never purchase from or endorse commercial breeding mills.'
    },
    {
      icon: Sparkles,
      title: 'Hospital-Grade Pet-Safe Sanitization',
      desc: 'Studio floors, cork yoga mats, and attendee hands are sanitized with 100% organic, non-toxic veterinary-approved disinfectant before puppies enter.'
    },
    {
      icon: ShieldCheck,
      title: 'Vaccinated, Dewormed & Microchipped',
      desc: 'All litters are age-appropriate vaccinated (DHPPi), dewormed, and vetted for temperament to ensure healthy, safe human socialization.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#1A1A2E] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Manifesto */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97316]/20 border border-[#F97316]/40 text-[#FFE5D4] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Safety & Ethics First</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Our 5-Star <br />
              <span className="text-[#F97316]">Puppy Welfare</span> Charter
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              We believe wellness must be mutual. Our events are meticulously designed around the biological rhythm, comfort, and emotional well-being of rescue puppies.
            </p>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFB800]">
                Veterinary Advisory Statement
              </div>
              <p className="text-xs text-gray-300 italic font-serif">
                "Early ethical socialization in peaceful, controlled settings dramatically reduces fear aggression and elevates puppy adoption success rates across Indian metro shelters."
              </p>
              <div className="text-[11px] text-[#FFE5D4] font-medium pt-1">
                — Dr. Meera Iyer, BVSc & Animal Behaviorist
              </div>
            </div>
          </div>

          {/* Right Column: 5 Charter Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {charterPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F97316]/40 rounded-2xl p-4 sm:p-4.5 transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 border border-[#F97316]/30 flex items-center justify-center shrink-0 text-[#F97316]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="text-left space-y-0.5">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>{item.title}</span>
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
