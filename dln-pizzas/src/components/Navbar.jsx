import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Pizza } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-blur border-b border-[#2A2A2A]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-brand-red to-brand-orange rounded-full flex items-center justify-center 
                            group-hover:shadow-[0_0_20px_rgba(232,25,44,0.5)] transition-all duration-300">
              <Pizza size={18} className="text-white" />
            </div>
            <div className="leading-none">
              <span className="font-display font-bold text-xl text-white">DLN</span>
              <span className="font-display font-bold text-xl gradient-text"> Pizzas</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 
                           hover:text-brand-red relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 
                         text-white px-4 py-2 rounded-full hover:bg-brand-red/20 transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(232,25,44,0.3)]"
            >
              <ShoppingCart size={18} />
              <span className="text-sm font-medium hidden sm:block">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs font-bold 
                                 w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-[#2A2A2A] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-brand-red font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919392779349"
            className="flex items-center gap-2 bg-green-600/20 border border-green-600/40 
                       text-green-400 px-4 py-2 rounded-full text-sm font-medium mt-2"
          >
            📱 Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
