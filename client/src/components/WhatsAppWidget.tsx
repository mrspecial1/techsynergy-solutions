import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

/**
 * WhatsApp Widget Component
 * Floating widget for real-time visitor engagement via WhatsApp
 * Phone: +2348160357708
 */

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_NUMBER = "2348160357708"; // Nigeria country code + number
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hi TechSynergy! I'm interested in learning more about your services. Can we discuss how you can help my business?"
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-40">
        {/* Chat Bubble */}
        {isOpen && (
          <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl p-4 w-72 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-gray-900">Chat with us on WhatsApp</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              We typically reply within minutes during business hours. Ask us anything about our services!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={18} />
              Open WhatsApp
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-pulse"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Alternative: Direct WhatsApp Link (can be used instead of button) */}
      {/* <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a> */}
    </>
  );
}
