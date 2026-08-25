import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, ArrowRight, Copy } from 'lucide-react';
import { City, EventItem } from '../../types';

interface PuppyVibeQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: EventItem[];
  onSelectEvent: (event: EventItem) => void;
  setSelectedCity: (city: City) => void;
}

export const PuppyVibeQuizModal: React.FC<PuppyVibeQuizModalProps> = ({
  isOpen,
  onClose,
  events,
  onSelectEvent,
  setSelectedCity,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    goal: '',
    timePreference: '',
    city: 'Bangalore' as City,
  });
  const [copied, setCopied] = useState(false);

  const questions = [
    {
      title: 'What is your primary wellness goal?',
      subtitle: 'Pick the vibe you need most this week:',
      field: 'goal',
      options: [
        { label: 'Deep Stress Relief & Serotonin Boost', emoji: '😌', sub: 'Melt away burnout with gentle stretching & lap cuddles' },
        { label: 'Puppy Socialization & Possible Adoption', emoji: '🏠', sub: 'Connect with shelter rescue litters and learn about adoption' },
        { label: 'Fun Date Night / Outing with Friends', emoji: '✨', sub: 'Laughter, selfies, and aesthetic golden hour memories' },
        { label: 'Beginner-Friendly Gentle Yoga', emoji: '🧘', sub: 'Zero pressure stretching in a supportive, judgment-free space' }
      ]
    },
    {
      title: 'When do you feel most relaxed?',
      subtitle: 'Choose your ideal weekend flow timing:',
      field: 'timePreference',
      options: [
        { label: 'Fresh Morning Sun (8:30 AM - 10:00 AM)', emoji: '🌅', sub: 'Kickstart your weekend feeling energized and light' },
        { label: 'Mid-Morning Brunch Flow (10:30 AM - 11:45 AM)', emoji: '☕', sub: 'Sleep in a little, stretch, and grab iced tea after' },
        { label: 'Golden Hour Sunset Stretch (5:00 PM - 6:15 PM)', emoji: '🌇', sub: 'Unwind as the sun goes down with soothing ambient tunes' }
      ]
    },
    {
      title: 'Which city are you looking to attend in?',
      subtitle: 'We have certified studio sessions across Indian metro hubs:',
      field: 'city',
      options: [
        { label: 'Bangalore (Indiranagar / Koramangala)', emoji: '🌳', value: 'Bangalore' },
        { label: 'Mumbai (Bandra West / Pali Hill)', emoji: '🌊', value: 'Mumbai' },
        { label: 'Delhi NCR (Hauz Khas Village / Deer Park)', emoji: '🏛️', value: 'Delhi NCR' },
        { label: 'Pune (Koregaon Park)', emoji: '🌿', value: 'Pune' },
        { label: 'Hyderabad (Jubilee Hills)', emoji: '💎', value: 'Hyderabad' },
        { label: 'Goa (Assagao Tropical Shala)', emoji: '🌴', value: 'Goa' }
      ]
    }
  ];

  const handleSelectOption = (value: any) => {
    const currentQ = questions[step];
    setAnswers({ ...answers, [currentQ.field]: value });

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Result screen
    }
  };

  const getRecommendedEvent = (): EventItem => {
    const matchingCityEvents = events.filter(e => e.city === answers.city);
    if (matchingCityEvents.length > 0) {
      return matchingCityEvents[0];
    }
    return events[0];
  };

  const copyCode = () => {
    navigator.clipboard.writeText('PAWSOME10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isResult = step >= questions.length;
  const recommended = getRecommendedEvent();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-lg rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A1A2E] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#F97316] flex items-center justify-center text-sm">
              ✨
            </div>
            <div>
              <h3 className="font-playfair text-base font-bold">
                Puppy Yoga Vibe Matcher
              </h3>
              <p className="text-[11px] text-gray-300">
                {isResult ? 'Your Personalized Match' : `Question ${step + 1} of ${questions.length}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Progress Bar */}
        {!isResult && (
          <div className="w-full h-1 bg-[#FFE5D4]">
            <div 
              className="h-full bg-[#F97316] transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {!isResult ? (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h4 className="font-playfair text-xl font-bold text-[#1A1A2E]">
                  {questions[step].title}
                </h4>
                <p className="text-xs text-gray-600">
                  {questions[step].subtitle}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption((opt as any).value || opt.label)}
                    className="w-full p-3.5 rounded-2xl bg-white hover:bg-[#FFF2E6] border border-[#FFE5D4] text-left flex items-center gap-3 transition-all cursor-pointer hover:border-[#F97316] group"
                  >
                    <span className="text-2xl shrink-0">{opt.emoji}</span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-[#1A1A2E] group-hover:text-[#F97316] transition-colors">
                        {opt.label}
                      </div>
                      {(opt as any).sub && (
                        <div className="text-[11px] text-gray-500">
                          {(opt as any).sub}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-5 animate-in zoom-in-95 text-center">
              <div className="w-14 h-14 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center text-2xl">
                🐶
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                  Perfect Match Found!
                </span>
                <h3 className="font-playfair text-2xl font-bold text-[#1A1A2E]">
                  The "{answers.goal.split(' ')[0] || 'Joyful'}" Puppy Flow in {answers.city}
                </h3>
              </div>

              {/* Recommended Event Card Preview */}
              <div className="bg-white p-4 rounded-2xl border border-[#FFE5D4] text-left flex gap-3 items-center shadow-sm">
                <img
                  src={recommended.image}
                  alt={recommended.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#1A1A2E] line-clamp-1">
                    {recommended.title}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    📍 {recommended.locality} • ₹{recommended.price}
                  </div>
                  <div className="text-[10px] text-[#22C55E] font-semibold">
                    ✓ {recommended.availableSeats} spots open • {recommended.puppyCount} Pups
                  </div>
                </div>
              </div>

              {/* Promo code unlock */}
              <div className="bg-[#FFF2E6] p-3.5 rounded-2xl border border-[#FFE5D4] space-y-2">
                <span className="text-[11px] font-bold text-gray-700 block">
                  🎉 We unlocked an exclusive 10% coupon code for you:
                </span>
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-[#FFE5D4]">
                  <span className="font-mono text-sm font-bold text-[#F97316]">PAWSOME10</span>
                  <button
                    onClick={copyCode}
                    className="px-2.5 py-1 rounded-lg bg-[#F97316] text-white text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-2.5 pt-1">
                <button
                  onClick={() => {
                    setSelectedCity(answers.city);
                    onSelectEvent(recommended);
                    onClose();
                  }}
                  className="w-full py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book This Mat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
