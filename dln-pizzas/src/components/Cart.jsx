import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Cart({ items, onClose, onUpdate, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const buildWhatsAppMsg = () => {
    const lines = items.map(i => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join('\n');
    const msg = `Hello DLN Pizzas! 🍕\n\nMy Order:\n${lines}\n\nTotal: ₹${total}\n\nPlease confirm availability and delivery time. Thank you!`;
    return encodeURIComponent(msg);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#111] border-l border-[#2A2A2A] 
                      z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-brand-red" />
            <h2 className="font-display font-bold text-white text-lg">Your Cart</h2>
            {items.length > 0 && (
              <span className="bg-brand-red text-white text-xs font-bold w-5 h-5 rounded-full 
                               flex items-center justify-center">
                {items.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-600">
              <div className="text-5xl mb-4">🍕</div>
              <p className="text-base font-medium text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-700 mt-1">Add some delicious pizzas!</p>
              <button
                onClick={onClose}
                className="mt-6 btn-primary text-sm px-6 py-2.5"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-[#1A1A1A] rounded-xl p-3 border border-[#2A2A2A]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{item.name}</p>
                  <p className="text-brand-orange text-sm font-bold mt-0.5">₹{item.price * item.qty}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdate(item.id, item.qty - 1)}
                    className="w-7 h-7 bg-[#2A2A2A] rounded-full flex items-center justify-center 
                               hover:bg-brand-red/20 transition-colors"
                  >
                    <Minus size={13} className="text-white" />
                  </button>
                  <span className="text-white text-sm font-bold w-4 text-center">{item.qty}</span>
                  <button
                    onClick={() => onUpdate(item.id, item.qty + 1)}
                    className="w-7 h-7 bg-[#2A2A2A] rounded-full flex items-center justify-center 
                               hover:bg-brand-red/20 transition-colors"
                  >
                    <Plus size={13} className="text-white" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-[#2A2A2A] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white font-display font-bold text-xl">₹{total}</span>
            </div>
            <p className="text-gray-600 text-xs">Delivery charges may apply. Confirm via WhatsApp.</p>
            <a
              href={`https://wa.me/919392779349?text=${buildWhatsAppMsg()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-center py-3.5 text-base flex items-center justify-center gap-2"
            >
              📱 Order via WhatsApp — ₹{total}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
