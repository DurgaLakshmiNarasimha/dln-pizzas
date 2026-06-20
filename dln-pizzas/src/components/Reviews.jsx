import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../data/pizzas';

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-700'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">Reviews</p>
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-brand-yellow fill-brand-yellow" />)}
            </div>
            <span className="font-bold text-white">4.9</span>
            <span>· 2,000+ reviews</span>
          </div>
        </div>

        {/* Mobile: Carousel | Desktop: Grid */}
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((r) => (
            <div key={r.id} className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 
                                       hover:border-brand-red/30 hover:shadow-[0_4px_20px_rgba(232,25,44,0.1)] 
                                       transition-all duration-300 relative">
              <Quote size={28} className="text-brand-red/20 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-brand-red to-brand-orange rounded-full 
                                flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-gray-600 text-xs">{r.location} · {r.date}</div>
                </div>
              </div>
              <StarRow count={r.rating} />
              <p className="text-gray-400 text-sm leading-relaxed mt-3">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 relative">
            <Quote size={28} className="text-brand-red/20 absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-brand-red to-brand-orange rounded-full 
                              flex items-center justify-center font-bold text-white text-sm">
                {reviews[active].avatar}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{reviews[active].name}</div>
                <div className="text-gray-600 text-xs">{reviews[active].location} · {reviews[active].date}</div>
              </div>
            </div>
            <StarRow count={reviews[active].rating} />
            <p className="text-gray-400 text-sm leading-relaxed mt-3">{reviews[active].text}</p>

            {/* Controls */}
            <div className="flex items-center justify-between mt-6">
              <button onClick={prev} className="p-2 bg-[#2A2A2A] rounded-full hover:bg-brand-red/20 transition-colors">
                <ChevronLeft size={18} className="text-white" />
              </button>
              <div className="flex gap-1.5">
                {reviews.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === active ? 'bg-brand-red w-4' : 'bg-gray-600'
                  }`} />
                ))}
              </div>
              <button onClick={next} className="p-2 bg-[#2A2A2A] rounded-full hover:bg-brand-red/20 transition-colors">
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://g.page/r/dln-pizzas-dharmavaram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red text-sm font-medium hover:underline"
          >
            ⭐ Leave a Google Review →
          </a>
        </div>
      </div>
    </section>
  );
}
