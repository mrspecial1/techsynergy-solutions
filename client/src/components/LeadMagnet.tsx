import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Download, X, CheckCircle, Loader2 } from "lucide-react";

/**
 * LeadMagnet Component
 * Displays a modal offering free "Website Conversion Audit Checklist"
 * Captures email for lead generation
 */

export default function LeadMagnet() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  // Show modal after 15 seconds or on exit intent
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isSubmitted && !localStorage.getItem("leadMagnetShown")) {
        setIsOpen(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isOpen && !isSubmitted && !localStorage.getItem("leadMagnetShown")) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isOpen, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call (in production, send to your backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Check your email for the Website Conversion Audit Checklist!");
      setIsSubmitted(true);
      localStorage.setItem("leadMagnetShown", "true");

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("leadMagnetShown", "true");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-lime-500 to-lime-600 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Free Resource</h3>
              <button
                onClick={handleClose}
                className="text-gray-900 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-lime-100 rounded-xl flex items-center justify-center mb-4">
                      <Download className="text-lime-600" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      Website Conversion Audit Checklist
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Get our proven 30-point checklist to identify what's stopping your website from converting visitors into paying clients.
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-lime-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Identify conversion bottlenecks</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-lime-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Quick wins you can implement today</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-lime-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Industry best practices</span>
                      </li>
                    </ul>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="your@email.com"
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
                        <>
                          <Download size={18} />
                          Get Free Checklist
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-600 text-center">
                      We'll send the checklist + weekly conversion tips. No spam, unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-lime-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Success!</h4>
                  <p className="text-gray-600 mb-4">
                    Check your email for the Website Conversion Audit Checklist. It should arrive in the next few minutes.
                  </p>
                  <p className="text-sm text-gray-500">
                    Also, watch out for our weekly conversion tips!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
