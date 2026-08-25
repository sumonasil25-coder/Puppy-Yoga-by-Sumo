/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  EVENTS, 
  SHELTERS, 
  PUPPIES, 
  TESTIMONIALS, 
  BLOG_POSTS, 
  GALLERY_ITEMS, 
  FAQS 
} from './data/mockData';
import { City, EventItem, BlogPost, PuppyInfo, BookingDetails } from './types';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Home Sections
import { HeroSection } from './components/home/HeroSection';
import { BenefitsSection } from './components/home/BenefitsSection';
import { HowItWorksSection } from './components/home/HowItWorksSection';
import { WelfareCharterSection } from './components/home/WelfareCharterSection';
import { AdoptableSpotlightSection } from './components/home/AdoptableSpotlightSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { ImpactCounter } from './components/home/ImpactCounter';
import { NewsletterSection } from './components/home/NewsletterSection';
import { EventCard } from './components/events/EventCard';

// Page Views
import { EventsView } from './components/events/EventsView';
import { AboutView } from './components/about/AboutView';
import { GalleryView } from './components/gallery/GalleryView';
import { BlogView } from './components/blog/BlogView';
import { ContactView } from './components/contact/ContactView';

// Modals
import { EventDetailModal } from './components/events/EventDetailModal';
import { BookingFlowModal } from './components/events/BookingFlowModal';
import { WaitlistModal } from './components/events/WaitlistModal';
import { BlogPostModal } from './components/blog/BlogPostModal';
import { PuppyProfileModal } from './components/adoption/PuppyProfileModal';
import { PuppyVibeQuizModal } from './components/quiz/PuppyVibeQuizModal';
import { CorporateModal } from './components/corporate/CorporateModal';
import { GlobalSearchModal } from './components/search/GlobalSearchModal';
import { VideoReelModal } from './components/common/VideoReelModal';

import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export default function App() {
  // Navigation & City Filter
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCity, setSelectedCity] = useState<City>('All');

  // Modals state
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);
  const [waitlistEvent, setWaitlistEvent] = useState<EventItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedPuppy, setSelectedPuppy] = useState<PuppyInfo | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoReelOpen, setIsVideoReelOpen] = useState(false);

  // Global hotkey Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBookingComplete = (booking: BookingDetails) => {
    // Booking registered successfully
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi!%20I%20have%20a%20question%20about%20Puppy%20Yoga%20Events', '_blank');
  };

  // Home page featured events
  const homeFeaturedEvents = selectedCity === 'All'
    ? EVENTS.slice(0, 3)
    : EVENTS.filter(e => e.city === selectedCity).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F4] text-[#1A1A2E] selection:bg-[#FFE5D4] selection:text-[#F97316]">
      {/* Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onOpenBookingFromNav={() => {
          setActiveTab('events');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* Hero Section */}
            <HeroSection
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              onExploreEvents={() => {
                setActiveTab('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuiz={() => setIsQuizOpen(true)}
              onOpenVideoReel={() => setIsVideoReelOpen(true)}
            />

            {/* 4 Brand Pillars */}
            <BenefitsSection />

            {/* Featured Events Section */}
            <section className="py-16 sm:py-20 bg-[#FDF8F4] relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="text-left space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>This Month's Schedule</span>
                    </div>
                    <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                      Featured Puppy Yoga <span className="text-[#F97316]">Sessions</span>
                    </h2>
                    <p className="text-sm text-gray-600 font-sans max-w-xl">
                      Experience gentle stretches with playful shelter puppies in certified aesthetic studios. Limited to 20 mats per session for comfort and safety.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-white hover:bg-[#FFE5D4] text-[#1A1A2E] text-xs sm:text-sm font-semibold border border-[#FFE5D4] shadow-xs transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>View All {EVENTS.length} Sessions</span>
                    <ArrowRight className="w-4 h-4 text-[#F97316]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {homeFeaturedEvents.map((evt) => (
                    <EventCard
                      key={evt.id}
                      event={evt}
                      onSelectEvent={(e) => setSelectedEvent(e)}
                      onQuickBook={(e) => setBookingEvent(e)}
                      onJoinWaitlist={(e) => setWaitlistEvent(e)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works Interactive Section */}
            <HowItWorksSection 
              onBookNow={() => {
                setActiveTab('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Strict Animal Welfare & Vet Charter */}
            <WelfareCharterSection />

            {/* Adoptable Puppies Spotlight */}
            <AdoptableSpotlightSection
              puppies={PUPPIES}
              selectedCity={selectedCity}
              onInquirePuppy={(pup) => setSelectedPuppy(pup)}
              onViewAllAdoptions={() => {
                setActiveTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Testimonials */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* Impact Metrics */}
            <ImpactCounter />

            {/* Newsletter & Promo Code */}
            <NewsletterSection />
          </div>
        )}

        {activeTab === 'events' && (
          <EventsView
            events={EVENTS}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            onSelectEvent={(e) => setSelectedEvent(e)}
            onBookEvent={(e) => setBookingEvent(e)}
            onJoinWaitlist={(e) => setWaitlistEvent(e)}
            onOpenCorporate={() => setIsCorporateOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutView
            onExploreEvents={() => {
              setActiveTab('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenShelterForm={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryView items={GALLERY_ITEMS} />
        )}

        {activeTab === 'blog' && (
          <BlogView
            posts={BLOG_POSTS}
            onSelectPost={(post) => setSelectedPost(post)}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        setSelectedCity={setSelectedCity}
        onOpenCorporate={() => setIsCorporateOpen(true)}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <button
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#22C55E] hover:bg-[#16A34A] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center group"
        title="Chat on WhatsApp (+91 98765 43210)"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          WhatsApp Us
        </span>
      </button>

      {/* Modals Container */}
      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onBook={(e) => setBookingEvent(e)}
        onJoinWaitlist={(e) => setWaitlistEvent(e)}
      />

      <BookingFlowModal
        event={bookingEvent}
        onClose={() => setBookingEvent(null)}
        onBookingComplete={handleBookingComplete}
      />

      <WaitlistModal
        event={waitlistEvent}
        onClose={() => setWaitlistEvent(null)}
      />

      <BlogPostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onExploreEvents={() => {
          setSelectedPost(null);
          setActiveTab('events');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <PuppyProfileModal
        puppy={selectedPuppy}
        onClose={() => setSelectedPuppy(null)}
        onExploreEvents={() => {
          setSelectedPuppy(null);
          setActiveTab('events');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <PuppyVibeQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        events={EVENTS}
        onSelectEvent={(e) => setBookingEvent(e)}
        setSelectedCity={setSelectedCity}
      />

      <CorporateModal
        isOpen={isCorporateOpen}
        onClose={() => setIsCorporateOpen(false)}
      />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        events={EVENTS}
        blogPosts={BLOG_POSTS}
        faqs={FAQS}
        shelters={SHELTERS}
        onSelectEvent={(e) => setSelectedEvent(e)}
        onSelectPost={(post) => setSelectedPost(post)}
      />

      <VideoReelModal
        isOpen={isVideoReelOpen}
        onClose={() => setIsVideoReelOpen(false)}
        onExploreEvents={() => {
          setIsVideoReelOpen(false);
          setActiveTab('events');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
