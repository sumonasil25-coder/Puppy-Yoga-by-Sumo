import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface BlogViewProps {
  posts: BlogPost[];
  onSelectPost: (post: BlogPost) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ posts, onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Wellness', 'Mental Health', 'Adoption', 'Yoga Tips'];

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = post.title.toLowerCase().includes(q);
      const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchesTags = post.tags.some(t => t.toLowerCase().includes(q));
      if (!matchesTitle && !matchesExcerpt && !matchesTags) return false;
    }
    return true;
  });

  return (
    <div className="py-12 bg-[#FDF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE5D4] text-[#F97316] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Wellness, Science & Adoption Stories</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E]">
            The Puppy Yoga <span className="text-[#F97316]">Journal</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-sans">
            Explore articles on somatic wellness, canine-assisted therapy research, adoption memoirs, and beginner yoga tips.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#FFF2E6] rounded-3xl p-5 border border-[#FFE5D4] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#F97316] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-[#FFE5D4] border border-[#FFE5D4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#FFE5D4] text-xs text-[#1A1A2E] placeholder:text-gray-400 focus:outline-hidden focus:border-[#F97316]"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-[#FFF2E6] hover:bg-white rounded-3xl overflow-hidden border border-[#FFE5D4] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group text-left"
            >
              <div>
                <div className="relative aspect-16/9 overflow-hidden bg-gray-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#F97316] shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-[#1A1A2E] group-hover:text-[#F97316] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#FFE5D4]/60 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
                </div>

                <span className="text-xs font-semibold text-[#F97316] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
