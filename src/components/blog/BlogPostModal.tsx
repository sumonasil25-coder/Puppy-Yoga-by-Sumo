import React from 'react';
import { BlogPost } from '../../types';
import { X, Calendar, Clock, User, Heart, Share2, Tag, CheckCircle2, Sparkles } from 'lucide-react';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onExploreEvents: () => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({
  post,
  onClose,
  onExploreEvents,
}) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDF8F4] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#FFE5D4] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Photo */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1A1A2E] via-[#1A1A2E]/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
              {post.category}
            </span>
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold leading-snug">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#FFE5D4] text-xs text-gray-600">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover border border-[#FFE5D4]"
              />
              <div>
                <div className="font-bold text-[#1A1A2E]">{post.author.name}</div>
                <div className="text-[11px] text-gray-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                <span>{post.readTime}</span>
              </span>
              <button
                onClick={handleShare}
                className="p-1.5 rounded-lg bg-[#FFE5D4]/60 hover:bg-[#FFE5D4] text-[#1A1A2E] cursor-pointer"
                title="Share article"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="bg-[#FFF2E6] p-5 rounded-2xl border border-[#FFE5D4] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F97316] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Takeaways</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {post.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formatted Content */}
          <div className="prose text-sm text-gray-700 leading-relaxed space-y-4 font-sans">
            {post.content.split('\n\n').map((para, i) => {
              if (para.startsWith('### ')) {
                return (
                  <h3 key={i} className="font-playfair text-lg font-bold text-[#1A1A2E] pt-3">
                    {para.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Embedded Next Step CTA */}
          <div className="bg-[#FFE5D4]/40 p-6 rounded-2xl border border-[#FFE5D4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-playfair text-base font-bold text-[#1A1A2E]">
                Ready to experience puppy therapy in person?
              </h4>
              <p className="text-xs text-gray-600">
                Weekend sessions are filling up fast in Bangalore, Mumbai, and Delhi.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onExploreEvents();
              }}
              className="px-5 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold whitespace-nowrap shadow-xs cursor-pointer"
            >
              Browse Weekend Slots
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
