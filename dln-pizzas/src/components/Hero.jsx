import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 60%, rgba(232,25,44,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(255,107,43,0.08) 0%, transparent 40%),
          linear-gradient(to bottom, #0D0D0D, #120404 50%, #0D0D0D)
        `
      }}
    >
      {/* Background pizza images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop"
          alt=""
          className="absolute -top-10 -right-20 w-80 md:w-[500px] opacity-10 rounded-3xl rotate-12 animate-float"
          style={{ filter: 'blur(1px)' }}
          loading="lazy"
        />
        <img
          src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=400&fit=crop"
          alt=""
          className="absolute -bottom-20 -left-10 w-64 md:w-80 opacity-8 rounded-3xl -rotate-12"
          style={{ filter: 'blur(2px)', opacity: 0.07 }}
          loading="lazy"
        />
        {/* Floating glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 
                        text-brand-red text-xs font-semibold px-4 py-2 rounded-full mb-6 
                        animate-fade-in-up">
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
          Now Open in Dharmavaram
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Taste the</span>
          <br />
          <span className="gradient-text">Fire 🔥</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up"
           style={{ animationDelay: '0.2s' }}>
          Premium wood-fired pizzas crafted with love in{' '}
          <span className="text-white font-medium">Dharmavaram, AP</span>.
          Hot, fresh, delivered to your door.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-2 
                     max-w-xl mx-auto mb-8 hover:border-brand-red/40 transition-all duration-300 
                     focus-within:border-brand-red/60 focus-within:shadow-[0_0_20px_rgba(232,25,44,0.15)]
                     animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Search size={20} className="text-gray-500 ml-2 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pizzas... (e.g. Chicken, Paneer)"
            className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm outline-none py-2"
          />
          <button
            type="submit"
            className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap"
          >
            Search
          </button>
        </form>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-center animate-fade-in-up"
             style={{ animationDelay: '0.4s' }}>
          {[
            { value: '50+', label: 'Pizza Varieties' },
            { value: '2k+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-2xl md:text-3xl gradient-text">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up"
             style={{ animationDelay: '0.5s' }}>
          <a href="#menu" className="btn-primary text-base px-8 py-3.5">
            🍕 View Full Menu
          </a>
          <a
            href="https://wa.me/919392779349?text=Hi! I want to order pizza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-3.5"
          >
            📱 Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#menu" className="absolute bottom-8 text-gray-600 hover:text-brand-red transition-colors animate-bounce">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
