import React from 'react';
import { Pizza, Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#080808]">
      {/* WhatsApp Banner */}
      <div className="bg-gradient-to-r from-green-900/40 via-green-800/20 to-green-900/40 border-y border-green-800/30">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Ready to order? 🍕</p>
            <p className="text-gray-400 text-sm">WhatsApp us your order — hot delivery in 30 mins!</p>
          </div>
          <a
            href="https://wa.me/919392779349?text=Hi! I want to place an order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp whitespace-nowrap"
          >
            📱 +91 93927 79349
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-red to-brand-orange rounded-full 
                              flex items-center justify-center">
                <Pizza size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">DLN Pizzas</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-5">
              Premium handcrafted pizzas made with love in Dharmavaram, Andhra Pradesh. 
              Fresh ingredients, bold flavours, every single day.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center justify-center 
                             text-gray-500 hover:text-brand-red hover:border-brand-red/40 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Menu', 'About Us', 'Reviews', 'Location', 'Order Now'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 text-sm hover:text-brand-red transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📍 Dharmavaram, Sri Sathya Sai Dist.</p>
              <p>Andhra Pradesh – 515672</p>
              <p className="pt-1">📞 +91 93927 79349</p>
              <p>📧 durgalakshminarasimha009@gmail.com</p>
              <p className="pt-1">⏰ Mon–Fri: 10AM–10PM</p>
              <p>Sat–Sun: 9AM–11PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            © 2024 DLN Pizzas Shop. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-red fill-brand-red" /> in Dharmavaram, AP
          </p>
        </div>
      </div>
    </footer>
  );
}
