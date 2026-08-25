import React from 'react';
import { Heart, Users, IndianRupee, Sparkles, Building2, MapPin } from 'lucide-react';
import { IMPACT_STATS } from '../../data/mockData';

export const ImpactCounter: React.FC = () => {
  const stats = [
    {
      icon: Heart,
      value: `${IMPACT_STATS.puppiesAdopted}+`,
      label: 'Rescue Puppies Adopted',
      sublabel: 'Found permanent loving homes',
      color: '#F97316',
    },
    {
      icon: Users,
      value: `${IMPACT_STATS.happyYogis.toLocaleString('en-IN')}+`,
      label: 'Stretched & Smiled',
      sublabel: 'Urban attendees recharged',
      color: '#FF6B35',
    },
    {
      icon: IndianRupee,
      value: IMPACT_STATS.shelterFundsRaisedINR,
      label: 'Direct Shelter Medical Aid',
      sublabel: 'Trauma care & vaccinations funded',
      color: '#22C55E',
    },
    {
      icon: Building2,
      value: `${IMPACT_STATS.soldOutEvents}+`,
      label: 'Sold-out Sessions Hosted',
      sublabel: 'Across 6 Indian metro cities',
      color: '#3B82F6',
    }
  ];

  return (
    <section className="py-14 bg-[#1A1A2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center sm:text-left p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-1"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}25`, color: stat.color }}
                >
                  <stat.icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  Impact Metric
                </span>
              </div>

              <div className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#FFE5D4]">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
