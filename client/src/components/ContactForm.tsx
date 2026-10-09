import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, Loader2, X } from "lucide-react";

/**
 * ContactForm Component
 * Handles lead capture with EmailJS integration
 * Sends form data to admin email and auto-replies to user
 */

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-contact-form", handler);
    return () => window.removeEventListener("open-contact-form", handler);
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    currentProcess: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const initEmailJS = () => {
    if (emailjsPublicKey && !window.emailjsInitialized) {
      emailjs.init(emailjsPublicKey);
      window.emailjsInitialized = true;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_email: "info@techsynergyhq.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        current_process: formData.currentProcess,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        reply_to: formData.email,
      };

      if (emailjsPublicKey && emailjsServiceId && emailjsTemplateId) {
        initEmailJS();
        await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams);
        toast.success("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", company: "", currentProcess: "", budget: "", timeline: "", message: "" });
        setIsOpen(false);
      } else {
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nCompany: ${formData.company || "Not provided"}\nCurrent process: ${formData.currentProcess || "Not provided"}\nBudget range: ${formData.budget || "Not provided"}\nTimeline: ${formData.timeline || "Not provided"}\n\nProject details:\n${formData.message}`;
        window.location.href = `mailto:info@techsynergyhq.com?subject=${encodeURIComponent("New systems consultation enquiry")}&body=${encodeURIComponent(body)}`;
        toast.message("Your email app is opening with your enquiry.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send message. Please try again or contact us via WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-lime-500 to-lime-600 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">Discuss Your Project</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-900 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">What is happening today?</label>
                <textarea name="currentProcess" value={formData.currentProcess} onChange={handleChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none" placeholder="Describe the manual process or system gap" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold text-gray-900 mb-2">Budget range</label><select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg"><option value="">Select a range</option><option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$50,000</option><option>$50,000+</option><option>Need guidance</option></select></div>
                <div><label className="block text-sm font-semibold text-gray-900 mb-2">Target timeline</label><select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg"><option value="">Select a timeline</option><option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option><option>Planning ahead</option></select></div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="+234 (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
                  placeholder="What are your goals? What challenges are you facing?"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request a systems consultation"
                )}
              </Button>

              <p className="text-xs text-gray-600 text-center">
                We’ll use these details only to respond to your enquiry.
              </p>

              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-900 mb-3">Prefer to chat?</p>
                <a
                  href="https://wa.me/2348160357708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  <MessageCircle size={18} />
                  Message on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Contact Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-110"
      >
        <Mail size={20} />
        <span className="hidden sm:inline">Contact Us</span>
      </button>
    </>
  );
}

declare global {
  interface Window {
    emailjsInitialized?: boolean;
  }
}
