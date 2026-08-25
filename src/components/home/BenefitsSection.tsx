import React from 'react';
import { Heart, Activity, Home, Users, Sparkles, Smile, ShieldCheck } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const pillars = [
    {
      icon: Activity,
      emoji: '🧘',
      title: 'Gentle Restorative Yoga',
      subtitle: 'Accessible for Absolute Beginners',
      description: 'Slow-paced Hatha & Vinyasa poses designed to release urban spine and shoulder tension. Zero performance pressure — stretch at your own natural pace.',
      highlight: 'Certified RYT-500 Teachers',
      color: 'from-[#FFE5D4] to-[#FFF2E6]',
      accentColor: '#F97316',
    },
    {
      icon: Heart,
      emoji: '🐾',
      title: 'Serotonin & Oxytocin Surge',
      subtitle: 'Clinically Proven Stress Relief',
      description: 'Cuddling warm, energetic puppies dramatically lowers cortisol stress levels while boosting dopamine. You leave floating on a cloud of happiness.',
      highlight: '35 mins Unstructured Play',
      color: 'from-[#FFF2E6] to-[#FFE5D4]',
      accentColor: '#FF6B35',
    },
    {
      icon: Home,
      emoji: '🏠',
      title: 'Ethical Shelter Adoptions',
      subtitle: '100% Non-Profit Rescue Pups',
      description: 'Every session supports partner shelters like CARE, YODA, and Friendicoes. Puppies receive crucial human socialization and direct adoption opportunities.',
      highlight: '420+ Pups Adopted',
      color: 'from-[#FFE5D4] to-[#FFF2E6]',
      accentColor: '#22C55E',
    },
    {
      icon: Users,
      emoji: '💚',
      title: 'Uplifting Community Space',
      subtitle: 'Make Friends & Unforgettable Memories',
      description: 'Whether coming solo, on a date, or with colleagues, connect with compassionate pet lovers in an environment filled with genuine laughter.',
      highlight: 'Free High-Res Event Photos',
      color: 'from-[#FFF2E6] to-[#FFE5D4]',
      accentColor: '#3B82F6',
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FDF8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Everyone Is Falling in Love With Puppy Yoga</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] tracking-tight">
            Four Pillars of Pure <span className="text-[#F97316]">Joy & Wellness</span>
          </h2>
          <p className="text-base text-gray-600 font-sans">
            We reimagined modern wellness by merging mindfulness with the unconditional warmth of shelter puppies.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FFF2E6] hover:bg-white rounded-3xl p-6 border border-[#FFE5D4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Emoji */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {pillar.emoji}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FFE5D4]/80 text-[#1A1A2E]">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="font-playfair text-xl font-bold text-[#1A1A2E] mb-1 group-hover:text-[#F97316] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#FF6B35] mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-[#FFE5D4]/60 flex items-center justify-between text-xs text-gray-500">
                <span className="font-caveat text-sm text-gray-700">Pillar 0{idx + 1}</span>
                <span className="text-[#F97316] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
