import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * ComparisonChart Component
 * Displays detailed feature comparison between TechSynergy and competitors
 * Helps visitors understand why TechSynergy is the best choice
 */

const comparisonData = [
  {
    category: "Website Design",
    features: [
      {
        name: "Custom Design",
        techsynergy: true,
        competitor1: false,
        competitor2: true,
        description: "Unique, branded design tailored to your business",
      },
      {
        name: "Mobile Responsive",
        techsynergy: true,
        competitor1: true,
        competitor2: true,
        description: "Optimized for all devices and screen sizes",
      },
      {
        name: "SEO Optimization",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Built-in SEO best practices and optimization",
      },
      {
        name: "Fast Loading Speed",
        techsynergy: true,
        competitor1: false,
        competitor2: true,
        description: "Optimized for speed (under 2 seconds)",
      },
    ],
  },
  {
    category: "Lead Generation",
    features: [
      {
        name: "Contact Forms",
        techsynergy: true,
        competitor1: true,
        competitor2: true,
        description: "Multiple form types for different CTAs",
      },
      {
        name: "Lead Magnet Setup",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Pre-built lead magnet with email capture",
      },
      {
        name: "CTA Optimization",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Strategic CTA placement for maximum conversions",
      },
      {
        name: "Analytics Tracking",
        techsynergy: true,
        competitor1: true,
        competitor2: true,
        description: "Track all user interactions and conversions",
      },
    ],
  },
  {
    category: "Automation & Integration",
    features: [
      {
        name: "Booking System",
        techsynergy: true,
        competitor1: false,
        competitor2: true,
        description: "Automated 24/7 booking for clients",
      },
      {
        name: "Payment Processing",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Integrated Stripe/PayPal for automatic payments",
      },
      {
        name: "Email Automation",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Automated email sequences and follow-ups",
      },
      {
        name: "CRM Integration",
        techsynergy: true,
        competitor1: true,
        competitor2: false,
        description: "Connect with your CRM for lead management",
      },
    ],
  },
  {
    category: "Support & Service",
    features: [
      {
        name: "Live Chat Support",
        techsynergy: true,
        competitor1: false,
        competitor2: true,
        description: "Real-time support for questions and issues",
      },
      {
        name: "Free Revisions (3 months)",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Unlimited revisions during support period",
      },
      {
        name: "Training & Documentation",
        techsynergy: true,
        competitor1: false,
        competitor2: true,
        description: "Comprehensive guides and video training",
      },
      {
        name: "Ongoing Optimization",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Continuous improvements and A/B testing",
      },
    ],
  },
  {
    category: "Pricing & Value",
    features: [
      {
        name: "Transparent Pricing",
        techsynergy: true,
        competitor1: true,
        competitor2: false,
        description: "No hidden fees or surprise charges",
      },
      {
        name: "Flexible Packages",
        techsynergy: true,
        competitor1: false,
        competitor2: true,
        description: "Starter, Growth, and Premium options",
      },
      {
        name: "Money-Back Guarantee",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "30-day satisfaction guarantee",
      },
      {
        name: "ROI Focused",
        techsynergy: true,
        competitor1: false,
        competitor2: false,
        description: "Designed to generate leads and revenue",
      },
    ],
  },
];

export default function ComparisonChart() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose TechSynergy Solutions?
          </h2>
          <p className="text-xl text-gray-700">
            See how we compare to other digital agencies. We offer more features, better support, and guaranteed results.
          </p>
        </div>

        {/* Comparison Sections */}
        <div className="space-y-16">
          {comparisonData.map((section, idx) => (
            <div key={idx}>
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-lime-500">
                {section.category}
              </h3>

              {/* Features Grid */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-bold text-gray-900 w-1/3">Feature</th>
                      <th className="text-center py-4 px-4 font-bold text-lime-600">
                        TechSynergy
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-gray-600">
                        Competitor A
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-gray-600">
                        Competitor B
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.features.map((feature, featureIdx) => (
                      <tr
                        key={featureIdx}
                        className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                          featureIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold text-gray-900">{feature.name}</p>
                            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          {feature.techsynergy ? (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                                <Check className="text-lime-600" size={20} />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <X className="text-gray-400" size={20} />
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {feature.competitor1 ? (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <Check className="text-gray-400" size={20} />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <X className="text-gray-400" size={20} />
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {feature.competitor2 ? (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <Check className="text-gray-400" size={20} />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <X className="text-gray-400" size={20} />
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="p-8 bg-gradient-to-br from-lime-50 to-white border-2 border-lime-400">
            <p className="text-4xl font-bold text-lime-600 mb-2">45%</p>
            <p className="text-gray-700 font-semibold mb-2">Average Lead Increase</p>
            <p className="text-gray-600 text-sm">Our clients see 45% more leads within the first month</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-lime-50 to-white border-2 border-lime-400">
            <p className="text-4xl font-bold text-lime-600 mb-2">80%</p>
            <p className="text-gray-700 font-semibold mb-2">Manual Work Reduced</p>
            <p className="text-gray-600 text-sm">Automation saves 15+ hours per week on average</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-lime-50 to-white border-2 border-lime-400">
            <p className="text-4xl font-bold text-lime-600 mb-2">100%</p>
            <p className="text-gray-700 font-semibold mb-2">Satisfaction Guarantee</p>
            <p className="text-gray-600 text-sm">30-day money-back guarantee if not satisfied</p>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to see the difference? Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.dispatchEvent(new Event("open-contact-form"))} className="px-8 py-3 bg-lime-500 text-gray-900 font-semibold rounded-lg hover:bg-lime-600 transition">
              Get Started Today
            </button>
            <a
              href="/blog"
              className="px-8 py-3 bg-white text-lime-600 font-semibold rounded-lg border-2 border-lime-500 hover:bg-lime-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
