import React, { useState } from 'react';
import { Mail, Sparkles, Check, Copy, Heart } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSuccess(true);
    }
  };

  const copyCoupon = () => {
    navigator.clipboard.writeText('PAWSOME10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 sm:py-20 bg-linear-to-b from-[#FDF8F4] to-[#FFE5D4]/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-tr from-[#1A1A2E] to-[#2B2B48] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-left border border-white/10">
          {/* Background Decorative Emojis */}
          <div className="absolute top-4 right-6 text-6xl opacity-10 select-none pointer-events-none">
            🐾
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316]/30 text-[#FFE5D4] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Special Welcome Incentive</span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Get 10% Off Your First <span className="text-[#F97316]">Puppy Mat</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                Join 12,000+ wellness lovers across India. Receive weekly slot drops, exclusive shelter adoption stories, and secret discount codes before anyone else.
              </p>
            </div>

            <div className="md:col-span-5">
              {isSuccess ? (
                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-[#22C55E]/40 space-y-3 animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-2 text-[#22C55E] text-xs font-bold">
                    <Check className="w-4 h-4" />
                    <span>You're Subscribed! Here is your code:</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/40 px-3.5 py-2.5 rounded-xl border border-white/10 font-mono text-sm font-bold text-[#FFB800]">
                    <span>PAWSOME10</span>
                    <button
                      onClick={copyCoupon}
                      className="px-2.5 py-1 rounded-lg bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-sans font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="text-[11px] text-gray-300">
                    Apply this code during checkout for 10% off any upcoming city event!
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder:text-gray-400 focus:outline-hidden focus:border-[#F97316] focus:bg-white/15"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Unlock 10% Off My Ticket</span>
                  </button>
                  <p className="text-[10px] text-gray-400 text-center">
                    No spam ever. Unsubscribe anytime in 1 click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
