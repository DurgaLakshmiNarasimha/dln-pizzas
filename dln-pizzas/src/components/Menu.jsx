import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import PizzaCard from './PizzaCard';
import { categories, pizzas as allPizzas } from '../data/pizzas';

const PAGE_SIZE = 6;

export default function Menu({ onAddToCart, searchQuery, onSearchChange }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  const filtered = allPizzas.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Infinite scroll via IntersectionObserver
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((c) => c + PAGE_SIZE);
      setLoading(false);
    }, 600);
  }, [loading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore(); },
      { threshold: 0.5 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  // Reset visible when filter/search changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">Our Menu</p>
        <h2 className="section-title mb-4">
          Every Slice, <span className="gradient-text">Perfected</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          From classic Margherita to our signature DLN Special — fresh ingredients, bold flavours.
        </p>
      </div>

      {/* Search & Filter Row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 flex-1
                        focus-within:border-brand-red/40">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search menu..."
            className="bg-transparent text-white placeholder-gray-600 text-sm outline-none flex-1"
          />
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm bg-[#1A1A1A] border border-[#2A2A2A] 
                        rounded-xl px-4 py-3">
          <SlidersHorizontal size={16} />
          <span>{filtered.length} items</span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex-shrink-0 ${
              activeCategory === cat
                ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(232,25,44,0.4)]'
                : 'bg-[#1A1A1A] border border-[#2A2A2A] text-gray-400 hover:border-brand-red/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pizza Grid */}
      {visible.length === 0 ? (
        <div className="text-center py-20 text-gray-600">
          <div className="text-5xl mb-4">🍕</div>
          <p className="text-lg">No pizzas found for "{searchQuery}"</p>
          <button
            onClick={() => { onSearchChange(''); setActiveCategory('All'); }}
            className="mt-4 text-brand-red text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((pizza, i) => (
            <div
              key={pizza.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(i % PAGE_SIZE) * 0.07}s` }}
            >
              <PizzaCard pizza={pizza} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      )}

      {/* Infinite Scroll Loader */}
      <div ref={loaderRef} className="mt-10 flex justify-center">
        {loading && (
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <div className="w-5 h-5 border-2 border-brand-red/30 border-t-brand-red rounded-full animate-spin" />
            Loading more pizzas...
          </div>
        )}
        {!hasMore && visible.length > 0 && (
          <p className="text-gray-700 text-sm">— All pizzas loaded —</p>
        )}
      </div>
    </section>
  );
}
