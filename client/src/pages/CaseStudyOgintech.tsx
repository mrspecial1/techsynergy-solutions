import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Zap, Users, BarChart3, CheckCircle, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackCaseStudyView } from "@/lib/analytics";

/**
 * Ogintech Services Case Study Page
 * Detailed breakdown of automation and booking system implementation
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/techsynergy-logo_d418b90e.png";

export default function CaseStudyOgintech() {
  const [, navigate] = useLocation();

  useEffect(() => {
    trackCaseStudyView("Ogintech Services");
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-lime-600 transition font-medium"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <img src={LOGO_URL} alt="TechSynergy Solutions" className="w-12 h-12" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-lime-50 to-white">
        <div className="container">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-bold mb-4">
              Case Study
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ogintech Services: Automation & Booking System
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              How we built an automated booking and payment system that reduced manual work by 80% and increased repeat bookings by 60%.
            </p>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">80%</p>
                <p className="text-gray-600">Manual Work Reduced</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">60%</p>
                <p className="text-gray-600">Repeat Bookings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">15+ hrs</p>
                <p className="text-gray-600">Saved Per Week</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">3 weeks</p>
                <p className="text-gray-600">Project Timeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Overview</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">Manual booking process consuming 20+ hours per week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">Scheduling conflicts and double bookings occurring frequently</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">No automated payment collection or invoicing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">Poor client communication and follow-up processes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Built custom booking system with real-time availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Integrated secure payment processing (Stripe/PayPal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Automated email confirmations and reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">CRM integration for client data and follow-ups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Implementation Details</h2>

            <div className="space-y-8">
              {/* Booking System */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Smart Booking System</h3>
                    <p className="text-gray-700">
                      Implemented a user-friendly booking calendar with real-time availability updates. Clients can book services 24/7 without staff intervention. Automatic conflict detection prevents double bookings. Integration with Google Calendar and Outlook for team synchronization.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Payment Processing */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment Integration</h3>
                    <p className="text-gray-700">
                      Integrated Stripe for secure payment processing. Clients pay at booking time, reducing no-shows by 35%. Automatic invoicing and receipts sent via email. Support for multiple payment methods (cards, digital wallets). Monthly financial reports and reconciliation.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Automation */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Automated Workflows</h3>
                    <p className="text-gray-700">
                      Set up automated email sequences: booking confirmation, 24-hour reminder, post-service follow-up, and feedback request. SMS reminders reduce no-shows. Automatic client segmentation for targeted marketing. Lead scoring and nurturing workflows.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Analytics */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Analytics & Reporting</h3>
                    <p className="text-gray-700">
                      Real-time dashboard showing bookings, revenue, and client metrics. Track booking trends, peak hours, and service performance. Identify top-performing services and clients. Export reports for business analysis and forecasting.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Results & Impact</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-white border-2 border-lime-400">
                <p className="text-5xl font-bold text-lime-600 mb-2">80%</p>
                <p className="text-gray-700 font-semibold mb-2">Manual Work Eliminated</p>
                <p className="text-gray-600">Freed up 15+ hours per week for team to focus on client service</p>
              </Card>

              <Card className="p-8 bg-white border-2 border-lime-400">
                <p className="text-5xl font-bold text-lime-600 mb-2">60%</p>
                <p className="text-gray-700 font-semibold mb-2">Repeat Bookings Increase</p>
                <p className="text-gray-600">Improved client experience led to more return customers</p>
              </Card>

              <Card className="p-8 bg-white border-2 border-lime-400">
                <p className="text-5xl font-bold text-lime-600 mb-2">35%</p>
                <p className="text-gray-700 font-semibold mb-2">No-Show Reduction</p>
                <p className="text-gray-600">Automated reminders and upfront payments reduced cancellations</p>
              </Card>
            </div>

            {/* Additional Results */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Revenue Growth</p>
                    <p className="text-gray-600">25% increase in monthly revenue due to reduced no-shows and increased capacity</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Client Satisfaction</p>
                    <p className="text-gray-600">NPS score improved from 42 to 78 due to seamless booking experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Scalability</p>
                    <p className="text-gray-600">Can now handle 3x more bookings without adding staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-lime-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Data Insights</p>
                    <p className="text-gray-600">Better understanding of client behavior and service performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <Card className="p-8 bg-white border-2 border-gray-200">
              <p className="text-lg text-gray-700 italic mb-6">
                "The booking system TechSynergy built has been transformational for our business. We've saved 15+ hours per week on administrative work, and our clients love the seamless booking experience. Our repeat bookings are up 60%, and we're handling 3x more volume without hiring additional staff. This was the best investment we made this year."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-100" />
                <div>
                  <p className="font-bold text-gray-900">Tunde Adeyemi</p>
                  <p className="text-gray-600">CEO, Ogintech Services</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Project Timeline</h2>

            <div className="space-y-6">
              {[
                { phase: "Week 1", title: "Requirements & Planning", desc: "Detailed process mapping, workflow analysis, system design" },
                { phase: "Week 2", title: "Development", desc: "Booking system, payment integration, automation setup" },
                { phase: "Week 3", title: "Testing & Launch", desc: "QA testing, staff training, go-live support" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    {idx < 2 && <div className="w-1 h-16 bg-lime-200 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="text-sm font-bold text-lime-600 mb-1">{item.phase}</p>
                    <p className="text-xl font-bold text-gray-900 mb-2">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-lime-500 to-lime-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Let's build custom automation and booking systems that save you time and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ogintechservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-900 text-lime-400 font-semibold rounded-lg hover:bg-gray-800 transition inline-flex items-center justify-center gap-2"
              >
                View Live Website
                <ExternalLink size={18} />
              </a>
              <Button className="px-8 py-3 bg-gray-900 text-lime-400 font-semibold rounded-lg hover:bg-gray-800">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
