import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Clock, Target, CheckCircle, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackCaseStudyView } from "@/lib/analytics";

/**
 * Nexorwa Energies Case Study Page
 * Detailed breakdown of project challenges, solutions, and results
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/techsynergy-logo_d418b90e.png";

export default function CaseStudyNexorwa() {
  const [, navigate] = useLocation();

  useEffect(() => {
    trackCaseStudyView("Nexorwa Energies");
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
              Nexorwa Energies: Corporate Website Transformation
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              How we built a high-converting corporate website that increased lead generation by 45% and established market authority for a leading energy company.
            </p>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">45%</p>
                <p className="text-gray-600">Lead Increase</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">3.2x</p>
                <p className="text-gray-600">Website Traffic</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">62%</p>
                <p className="text-gray-600">Conversion Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-lime-600 mb-2">4 weeks</p>
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
                    <span className="text-gray-700">Outdated website that didn't reflect company's market position</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">Poor mobile experience losing 40% of potential clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">No lead capture mechanism or CTA strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold">×</span>
                    </span>
                    <span className="text-gray-700">Ranking poorly on Google for industry keywords</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Designed premium, modern website reflecting corporate authority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Mobile-first responsive design optimized for all devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Strategic CTAs and lead capture forms throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-lime-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Comprehensive SEO optimization for top rankings</span>
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
              {/* Design & UX */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Design & User Experience</h3>
                    <p className="text-gray-700">
                      Created a modern, professional design that communicates Nexorwa's expertise and market leadership. Implemented intuitive navigation, clear value propositions, and strategic CTAs. The design emphasizes trust through testimonials, certifications, and case studies.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Development */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Development & Integration</h3>
                    <p className="text-gray-700">
                      Built with modern, scalable technology stack. Integrated CRM system for automatic lead capture and nurturing. Added email notification system for instant alerts on new inquiries. Implemented analytics tracking to measure performance and optimize conversion paths.
                    </p>
                  </div>
                </div>
              </Card>

              {/* SEO */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SEO Optimization</h3>
                    <p className="text-gray-700">
                      Comprehensive keyword research and optimization for industry-specific terms. Implemented technical SEO best practices, structured data markup, and fast page load times. Created content strategy targeting high-intent keywords. Result: 1st page rankings for 12+ primary keywords within 3 months.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Performance */}
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Performance & Speed</h3>
                    <p className="text-gray-700">
                      Optimized for lightning-fast load times (under 2 seconds). Implemented CDN for global performance. Compressed images and assets without quality loss. Mobile performance score: 95/100. Desktop performance score: 98/100.
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
                <p className="text-5xl font-bold text-lime-600 mb-2">45%</p>
                <p className="text-gray-700 font-semibold mb-2">Increase in Leads</p>
                <p className="text-gray-600">First month after launch compared to previous 3-month average</p>
              </Card>

              <Card className="p-8 bg-white border-2 border-lime-400">
                <p className="text-5xl font-bold text-lime-600 mb-2">3.2x</p>
                <p className="text-gray-700 font-semibold mb-2">Traffic Growth</p>
                <p className="text-gray-600">Organic search traffic increased 3.2x within 6 months</p>
              </Card>

              <Card className="p-8 bg-white border-2 border-lime-400">
                <p className="text-5xl font-bold text-lime-600 mb-2">62%</p>
                <p className="text-gray-700 font-semibold mb-2">Conversion Rate</p>
                <p className="text-gray-600">Visitors completing inquiry forms or requesting quotes</p>
              </Card>
            </div>

            {/* Client Testimonial */}
            <Card className="p-8 bg-white border-2 border-gray-200">
              <p className="text-lg text-gray-700 italic mb-6">
                "TechSynergy didn't just build us a website—they built us a lead generation machine. Within the first month, we saw a 45% increase in qualified leads. The design is professional, the user experience is seamless, and our clients love it. I highly recommend them to any business serious about their online presence."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-100" />
                <div>
                  <p className="font-bold text-gray-900">Chioma Okafor</p>
                  <p className="text-gray-600">Marketing Director, Nexorwa Energies</p>
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
                { phase: "Week 1", title: "Discovery & Planning", desc: "Stakeholder meetings, requirements gathering, competitor analysis" },
                { phase: "Week 2", title: "Design & Prototyping", desc: "Wireframes, mockups, design system, client approval" },
                { phase: "Week 3", title: "Development", desc: "Frontend & backend development, CRM integration, testing" },
                { phase: "Week 4", title: "Launch & Optimization", desc: "Final QA, deployment, analytics setup, SEO optimization" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-lime-500 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    {idx < 3 && <div className="w-1 h-16 bg-lime-200 mt-2" />}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Let's discuss how we can build a high-converting website that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://nexorwaenergies.com"
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
