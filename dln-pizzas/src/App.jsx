import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import Cart from './components/Cart';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (pizza) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === pizza.id);
      if (existing) {
        return prev.map((i) =>
          i.id === pizza.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...pizza, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateCart = (id, qty) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, qty } : i))
      );
    }
  };

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        <Hero
          onSearch={(q) => {
            setSearchQuery(q);
            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <Menu
          onAddToCart={addToCart}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <About />
        <Reviews />
        <Location />
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* Cart Drawer */}
      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onUpdate={updateCart}
          onRemove={(id) => setCartItems((prev) => prev.filter((i) => i.id !== id))}
        />
      )}
    </div>
  );
}
