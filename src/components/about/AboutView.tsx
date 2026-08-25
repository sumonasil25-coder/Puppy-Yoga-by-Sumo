import React from 'react';
import { SHELTERS, IMPACT_STATS } from '../../data/mockData';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Award, 
  Sparkles, 
  MapPin, 
  ExternalLink,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

interface AboutViewProps {
  onExploreEvents: () => void;
  onOpenShelterForm: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onExploreEvents,
  onOpenShelterForm,
}) => {
  const teamMembers = [
    {
      name: 'Priya Reddy',
      role: 'Founder & Head Yoga Director',
      bio: 'E-RYT 500 yoga teacher with 10+ years teaching across Mysore and Bangalore. Passionate indie foster parent.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Meera Iyer, BVSc',
      role: 'Chief Veterinary Officer',
      bio: 'Small animal veterinarian specializing in early puppy behavioral development and shelter rehabilitation protocols.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Aarav Mehta',
      role: 'Head of Operations & Shelter Liaison',
      bio: 'Former NGO coordinator who built our partner network with CARE, YODA, and Friendicoes across 6 Indian cities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Kavita Chawla',
      role: 'Senior Mindfulness Instructor',
      bio: 'Sound therapist and animal Reiki practitioner creating soothing acoustic playlists tailored for young puppies.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="py-12 bg-[#FDF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner / Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Mission</span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] leading-tight">
              How Two Rescued Indie Pups and a Yoga Mat Sparked a <span className="text-[#F97316]">Movement</span>
            </h1>

            <p className="text-base text-gray-700 leading-relaxed font-sans">
              In 2022, our founder Priya was fostering two orphaned puppies from CARE Bangalore while teaching private restorative yoga in her living room. During a quiet meditation, the puppies curled up directly across a student's ankles. The room erupted in joyful laughter, and that day’s deep stress evaporated instantly.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              We realized something profound: modern urban Indians are exhausted, burnt out, and disconnected. Simultaneously, overburdened animal shelters struggle to socialize rescue puppies and find them loving permanent homes. Puppy Yoga Events was born to solve both in one joyful, restorative experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onExploreEvents}
                className="px-6 py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
              >
                Join an Upcoming Session
              </button>
              <button
                onClick={onOpenShelterForm}
                className="px-5 py-3 rounded-xl bg-white hover:bg-[#FFE5D4] text-[#1A1A2E] text-xs sm:text-sm font-semibold border border-[#FFE5D4] shadow-xs transition-colors cursor-pointer"
              >
                Register Your Shelter
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="Puppy yoga origin"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Shelter Partners Network Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#F97316]" />
              <span>Our Non-Profit Partners</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Partner Shelters Across India
            </h2>
            <p className="text-sm text-gray-600 font-sans">
              We work exclusively with certified animal welfare non-profits. A portion of every single ticket is transferred directly to these shelters' emergency rescue and medical feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SHELTERS.map((shelter) => (
              <div
                key={shelter.id}
                className="bg-[#FFF2E6] hover:bg-white rounded-3xl p-6 border border-[#FFE5D4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <img
                      src={shelter.logo}
                      alt={shelter.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs group-hover:scale-105 transition-transform"
                    />
                    <span className="bg-white text-[#F97316] text-xs font-bold px-2.5 py-1 rounded-full border border-[#FFE5D4]">
                      📍 {shelter.city}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-playfair text-lg font-bold text-[#1A1A2E] group-hover:text-[#F97316] transition-colors">
                      {shelter.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {shelter.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#FFE5D4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">Adopted via Events</span>
                    <div className="text-sm font-bold text-[#22C55E]">
                      {shelter.adoptedCount}+ Pups
                    </div>
                  </div>

                  <a
                    href={shelter.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white hover:bg-[#F97316] text-gray-600 hover:text-white transition-colors"
                    aria-label={`Visit ${shelter.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Animal Welfare Manifesto */}
        <div className="bg-[#1A1A2E] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center mx-auto text-[#F97316]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold">
              Our 100% Ethical Welfare Promise
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              "We never view puppies as entertainment props. Every event is structured around positive reinforcement socialization principles. If a puppy chooses to nap during yoga, they nap undisturbed. If a puppy wants zoomies, they get zoomies. Our goal is happy, confident, healthy puppies that transition seamlessly into loving forever homes."
            </p>
            <div className="pt-2 text-xs font-semibold text-[#FFB800]">
              — The Puppy Yoga Events Advisory Board
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <Users className="w-3.5 h-3.5" />
              <span>Dedicated Caregivers</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
              Meet Our Team & Veterinarians
            </h2>
            <p className="text-sm text-gray-600 font-sans">
              Experienced yoga acharyas, veterinary doctors, and passionate animal rescue volunteers working together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-[#FFE5D4] shadow-xs text-left space-y-3 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-playfair text-base font-bold text-[#1A1A2E]">
                    {member.name}
                  </h4>
                  <div className="text-xs text-[#F97316] font-semibold">
                    {member.role}
                  </div>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
