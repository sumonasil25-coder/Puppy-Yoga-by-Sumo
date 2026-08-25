import React, { useState } from 'react';
import { GalleryItem } from '../../types';
import { 
  Heart, 
  MapPin, 
  Sparkles, 
  Camera, 
  Share2, 
  X, 
  Check, 
  Upload,
  Calendar
} from 'lucide-react';

interface GalleryViewProps {
  items: GalleryItem[];
}

export const GalleryView: React.FC<GalleryViewProps> = ({ items: initialItems }) => {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Submit photo form state
  const [authorName, setAuthorName] = useState('');
  const [authorCity, setAuthorCity] = useState('Bangalore');
  const [caption, setCaption] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['All', 'Cuddle Moments', 'Yoga Poses', 'Adoption Days', 'BTS & Vet Care'];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = likedMap[id];
    setLikedMap(prev => ({ ...prev, [id]: !isLiked }));
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, likes: isLiked ? item.likes - 1 : item.likes + 1 };
      }
      return item;
    }));
  };

  const handlePhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !caption) return;

    const newItem: GalleryItem = {
      id: `user-upload-${Date.now()}`,
      title: `${authorName}'s Puppy Moment`,
      city: authorCity,
      date: 'Just now',
      imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
      category: 'Cuddle Moments',
      caption: `"${caption}" — Shared by ${authorName}`,
      likes: 1,
    };

    setItems([newItem, ...items]);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitModalOpen(false);
      setAuthorName('');
      setCaption('');
    }, 2000);
  };

  return (
    <div className="py-12 bg-[#FDF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>Event Photo Memories</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]">
              Joy, Cuddles & <span className="text-[#F97316]">Happy Paws</span>
            </h1>
            <p className="text-sm text-gray-600 font-sans max-w-xl">
              Candid, unposed moments captured during our puppy yoga sessions across India. Real smiles, sleepy puppy piles, and heartwarming adoption celebrations.
            </p>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            <span>Share Your Event Photo</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1A1A2E] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-[#FFE5D4] border border-[#FFE5D4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#FFE5D4] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* City Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#1A1A2E] flex items-center gap-1 shadow-xs">
                  <MapPin className="w-3 h-3 text-[#F97316]" />
                  <span>{item.city}</span>
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => handleLike(item.id, e)}
                  aria-label="Like photo"
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform active:scale-75 cursor-pointer ${
                    likedMap[item.id]
                      ? 'bg-[#F97316] text-white'
                      : 'bg-white/80 text-gray-700 hover:text-[#F97316]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${likedMap[item.id] ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Photo Caption */}
              <div className="p-4 text-left space-y-1">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="text-[10px] font-bold uppercase text-[#F97316]">
                    {item.category}
                  </span>
                  <span>{item.likes} likes</span>
                </div>
                <h4 className="font-playfair text-sm font-bold text-[#1A1A2E] line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-16/10 sm:aspect-16/9 bg-gray-900">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F97316] uppercase">
                    📍 {selectedPhoto.city} • {selectedPhoto.date}
                  </span>
                  <button
                    onClick={(e) => handleLike(selectedPhoto.id, e)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF2E6] text-[#1A1A2E] text-xs font-semibold hover:bg-[#FFE5D4] cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 text-[#F97316] ${likedMap[selectedPhoto.id] ? 'fill-[#F97316]' : ''}`} />
                    <span>{selectedPhoto.likes} Likes</span>
                  </button>
                </div>

                <h3 className="font-playfair text-xl font-bold text-[#1A1A2E]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-sans">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Photo Modal */}
        {isSubmitModalOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setIsSubmitModalOpen(false)}
          >
            <div 
              className="bg-[#FDF8F4] max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#FFE5D4] text-left space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-playfair text-xl font-bold text-[#1A1A2E]">
                  Submit Your Puppy Photo
                </h3>
                <button
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-[#1A1A2E]">Photo Added to Community Feed!</h4>
                  <p className="text-xs text-gray-500">Thank you for sharing your cuddle memory.</p>
                </div>
              ) : (
                <form onSubmit={handlePhotoSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder="e.g. Nisha Sharma"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs focus:outline-hidden focus:border-[#F97316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">City of Session</label>
                    <select
                      value={authorCity}
                      onChange={(e) => setAuthorCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs focus:outline-hidden focus:border-[#F97316]"
                    >
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Goa">Goa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Photo Caption & Moment</label>
                    <textarea
                      required
                      rows={3}
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="Tell us what made this moment special..."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs focus:outline-hidden focus:border-[#F97316]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#F97316] hover:bg-[#FF6B35] text-white text-xs font-semibold shadow-xs cursor-pointer"
                  >
                    Upload & Publish to Gallery
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
