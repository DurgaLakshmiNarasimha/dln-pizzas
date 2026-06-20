import React, { useState } from 'react';
import { ShoppingCart, Star, Flame } from 'lucide-react';

export default function PizzaCard({ pizza, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAdd = () => {
    onAddToCart(pizza);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const spicyDots = Array.from({ length: 5 }, (_, i) => i < pizza.spicy);

  return (
    <div className="card-pizza flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-44 sm:h-48 bg-[#0D0D0D]">
        {!imgLoaded && <div className="absolute inset-0 shimmer" />}
        <img
          src={pizza.image}
          alt={pizza.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />

        {/* Tag */}
        {pizza.tag && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${pizza.tagColor}`}>
            {pizza.tag}
          </span>
        )}

        {/* Category badge */}
        <span className="absolute top-3 right-3 bg-black/60 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-white/10">
          {pizza.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-lg leading-tight mb-1">
          {pizza.name}
        </h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2 flex-1">{pizza.description}</p>

        {/* Rating & Spicy */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star size={13} className="text-brand-yellow fill-brand-yellow" />
            <span className="text-white text-xs font-semibold">{pizza.rating}</span>
            <span className="text-gray-600 text-xs">({pizza.reviews})</span>
          </div>
          <div className="flex items-center gap-0.5" title={`Spice level: ${pizza.spicy}/5`}>
            {spicyDots.map((hot, i) => (
              <Flame
                key={i}
                size={12}
                className={hot ? 'text-brand-orange' : 'text-gray-700'}
                fill={hot ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 text-xs">from</span>
            <div className="font-display font-bold text-xl text-white">
              ₹{pizza.price}
            </div>
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold 
                       transition-all duration-300 active:scale-95 ${
              added
                ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                : 'bg-brand-red text-white hover:bg-red-700 hover:shadow-[0_0_15px_rgba(232,25,44,0.4)]'
            }`}
          >
            {added ? (
              <>✓ Added</>
            ) : (
              <>
                <ShoppingCart size={14} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
