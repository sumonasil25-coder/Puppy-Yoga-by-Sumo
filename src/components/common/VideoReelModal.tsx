import React from 'react';
import { X, Play, Heart, Volume2, Sparkles, MapPin } from 'lucide-react';

interface VideoReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreEvents: () => void;
}

export const VideoReelModal: React.FC<VideoReelModalProps> = ({
  isOpen,
  onClose,
  onExploreEvents,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#1A1A2E] text-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-left space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Video Simulation Canvas */}
        <div className="relative aspect-9/16 sm:aspect-4/5 w-full bg-black overflow-hidden flex items-center justify-center group">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
            alt="Puppy yoga reel preview"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Animated Overlay Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#F97316]/90 text-white flex items-center justify-center shadow-lg animate-pulse">
              <Play className="w-7 h-7 fill-white ml-1" />
            </div>
            <span className="text-xs font-semibold bg-black/60 px-3 py-1 rounded-full border border-white/20">
              Candid Reel • Indiranagar Bangalore
            </span>
          </div>

          {/* Floating Details */}
          <div className="absolute bottom-5 left-5 right-5 space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="bg-[#22C55E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                Serotonin Overload
              </span>
              <span className="text-xs text-gray-300">
                10-week-old rescue puppies playing during Savasana
              </span>
            </div>

            <p className="font-playfair text-lg font-bold">
              "The sweetest Saturday morning in Bangalore!" 🐾
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-5 pt-0 flex gap-3">
          <button
            onClick={() => {
              onClose();
              onExploreEvents();
            }}
            className="w-full py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center"
          >
            Find a Session Near You
          </button>
        </div>
      </div>
    </div>
  );
};
