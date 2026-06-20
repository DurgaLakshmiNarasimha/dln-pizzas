import React from 'react';
import ownerImg from '../assets/owner.jpeg';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, #0D0D0D, #110202 50%, #0D0D0D)'
      }} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                        bg-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Owner Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-red via-brand-orange to-brand-yellow 
                              opacity-30 blur-sm animate-pulse-glow" />
              <div className="absolute -inset-3 rounded-3xl border border-brand-red/20" />

              {/* Photo */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-brand-red/30">
                <img
                  src={ownerImg}
                  alt="DLN Pizzas Shop Owner"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-brand-red/90 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    👑 Founder & Owner
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-brand-yellow font-display font-bold text-2xl">4.9★</div>
                <div className="text-gray-500 text-xs">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
              Crafted with <span className="gradient-text">Passion</span>
              <br />& Andhra Soul
            </h2>

            <p className="text-gray-400 text-base leading-relaxed mb-5">
              Welcome to <span className="text-white font-semibold">DLN Pizzas Shop</span> — Dharmavaram's 
              premier destination for handcrafted pizzas. Born from a love for bold flavours and the warm 
              spirit of Andhra hospitality, every pizza we make carries the heart of this town.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We believe great pizza starts with great ingredients — fresh dough, real mozzarella, and 
              locally sourced toppings. From our signature <span className="text-brand-orange">Andhra Spicy Chicken</span> to 
              the crowd-favourite <span className="text-brand-yellow">Cheese Burst</span>, every slice is made 
              to order with love.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🍕', label: 'Fresh Daily Dough' },
                { icon: '🧀', label: 'Real Mozzarella' },
                { icon: '🔥', label: 'Wood-Fired Style' },
                { icon: '🛵', label: 'Fast Delivery' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-[#1A1A1A] border border-[#2A2A2A] 
                                              rounded-xl px-4 py-3 hover:border-brand-red/30 transition-all">
                  <span className="text-xl">{f.icon}</span>
                  <span className="text-gray-300 text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919392779349?text=Hi! I want to know more about DLN Pizzas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2"
            >
              📱 Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
