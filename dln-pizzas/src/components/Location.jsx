import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  const WHATSAPP = 'https://wa.me/919392779349?text=Hi! I want to place an order';
  const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30697.81!2d77.8960!3d14.4139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b!2sDharmavaram!5e0!3m2!1sen!2sin!4v1700000000000';
  // Replace above embed URL with your actual Google Maps embed link

  return (
    <section id="location" className="py-20 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">Find Us</p>
          <h2 className="section-title mb-4">
            Visit <span className="gradient-text">DLN Pizzas Shop</span>
          </h2>
          <p className="text-gray-500">Come in, sit down, and taste the fire.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] h-80 md:h-full min-h-[300px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DLN Pizzas Shop Location"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-brand-red/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    DLN Pizzas Shop<br />
                    Dharmavaram,<br />
                    Sri Sathya Sai District,<br />
                    Andhra Pradesh – 515672
                  </p>
                  <a
                    href="https://maps.google.com/?q=Dharmavaram+Andhra+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-red text-xs mt-2 hover:underline"
                  >
                    <Navigation size={12} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-brand-red/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-brand-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Opening Hours</h3>
                  {[
                    { day: 'Monday – Friday', time: '10:00 AM – 10:00 PM' },
                    { day: 'Saturday – Sunday', time: '9:00 AM – 11:00 PM' },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{h.day}</span>
                      <span className="text-white font-medium">{h.time}</span>
                    </div>
                  ))}
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 
                                  text-green-400 text-xs px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Open Now
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-brand-red/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Contact</h3>
                  <p className="text-gray-400 text-sm">📞 +91 93927 79349</p>
                  <p className="text-gray-400 text-sm">📧 durgalakshminarasimha009@gmail.com</p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex items-center gap-2 text-sm mt-3 px-5 py-2.5"
                  >
                    📱 WhatsApp Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
