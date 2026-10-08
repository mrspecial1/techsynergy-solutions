import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Smartphone, Cog, TrendingUp, ExternalLink, MessageCircle, Mail, Phone, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import LeadMagnet from "@/components/LeadMagnet";
import WhatsAppWidget from "@/components/WhatsAppWidget";

/**
 * TechSynergy Solutions - Custom Software & Web Systems
 * Design: Modern Premium Corporate with Lime Green & Dark Charcoal palette
 * Brand Colors: #B8E986 (Lime Green), #1A1A1A (Dark Charcoal)
 * Focus: Lead generation and client conversion
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/techsynergy-logo_d418b90e.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const openContactForm = () => window.dispatchEvent(new Event("open-contact-form"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Conversion Widgets */}
      <ContactForm />
      <WhatsAppWidget />
      <LeadMagnet />
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="TechSynergy Solutions" className="w-12 h-12 md:w-14 md:h-14" />
            <span className="font-bold text-lg md:text-xl hidden sm:inline text-gray-900">TechSynergy</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#services" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm md:text-base">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm md:text-base">
              Portfolio
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm md:text-base">
              Engagement
            </a>
            <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg px-4 md:px-6 py-2 text-sm md:text-base transition-all hover:shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/hero-background-jLzVKRuEcukMN8VdXkfvE7.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-0" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Custom software and web systems built around how your business works
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              We design and engineer websites, client portals, internal platforms, and workflow automation for businesses that need more than a brochure site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg px-8 py-3 text-lg flex items-center gap-2 transition-all hover:shadow-lg hover:scale-105">
                Discuss Your Project
                <ArrowRight size={20} />
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-300 text-gray-900 rounded-lg px-8 py-3 text-lg font-semibold hover:bg-gray-50 hover:border-lime-500">
                <a href="#services">
                See What We Build
                </a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-xl border border-gray-200 bg-white/80 p-4">
                <p className="font-semibold text-gray-900">Custom builds</p>
                <p className="text-sm text-gray-600 mt-1">Designed around your workflow</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/80 p-4">
                <p className="font-semibold text-gray-900">Web systems</p>
                <p className="text-sm text-gray-600 mt-1">Portals, platforms & automation</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/80 p-4">
                <p className="font-semibold text-gray-900">Engineering-led</p>
                <p className="text-sm text-gray-600 mt-1">Built for maintainability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Problem Most Businesses Face
            </h2>
            <p className="text-lg text-gray-700">
              Many service-based businesses struggle with outdated websites, lost leads, and manual processes that drain time and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Websites That Don't Convert</h3>
              <p className="text-gray-600">
                Outdated designs and poor user experience mean visitors leave without taking action.
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lost Leads & Revenue</h3>
              <p className="text-gray-600">
                No automated follow-up systems mean potential clients slip away to competitors.
              </p>
            </Card>

            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Cog className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Operations</h3>
              <p className="text-gray-600">
                Repetitive tasks consume hours daily, preventing growth and scaling.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-gray-700">
              We combine stunning web design with powerful automation systems to attract clients and reduce manual work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/services-illustration-auxeY9LjU9jriPtr5YLNJj.webp"
                alt="Services Illustration"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">High-Converting Websites</h3>
                    <p className="text-gray-600">
                      Custom-designed, mobile-responsive sites that showcase your expertise and turn visitors into leads.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Web Apps & Client Portals</h3>
                    <p className="text-gray-600">
                      Optimized landing pages with integrated booking and payment systems for seamless client onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-lime-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Automation</h3>
                    <p className="text-gray-600">
                      Automated workflows that handle follow-ups, scheduling, and operations—freeing you to focus on growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions designed to accelerate your business growth and client acquisition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border border-gray-200 hover:shadow-xl hover:border-lime-400 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-lime-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-lime-200 transition-all">
                <Globe className="text-lime-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Websites & Development</h3>
              <p className="text-gray-600 mb-6">
                Custom-built websites that reflect your brand, engage visitors, and drive conversions with modern design principles.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Responsive & Mobile-First
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Search-ready foundations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Fast Loading Times
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg">
                Learn More
              </Button>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 hover:shadow-xl hover:border-lime-400 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-lime-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-lime-200 transition-all">
                <Smartphone className="text-lime-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Web Apps</h3>
              <p className="text-gray-600 mb-6">
                High-converting landing pages designed specifically to capture leads and drive action with compelling copy and design.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Workflow-specific interfaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Lead Capture Forms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Role-based user journeys
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg">
                Learn More
              </Button>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 hover:shadow-xl hover:border-lime-400 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-lime-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-lime-200 transition-all">
                <Cog className="text-lime-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking & Payment Systems</h3>
              <p className="text-gray-600 mb-6">
                Integrated booking and payment solutions that streamline client scheduling and reduce manual administrative work.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Calendar Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Payment options where appropriate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Clear confirmation flows
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg">
                Learn More
              </Button>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 hover:shadow-xl hover:border-lime-400 transition-all group md:col-span-3 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-lime-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-lime-200 transition-all">
                <Zap className="text-lime-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Automation</h3>
              <p className="text-gray-600 mb-6">
                Custom workflows and automation that handle repetitive tasks, saving time and reducing human error.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Email Workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  Lead Nurturing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-600 rounded-full" />
                  CRM Integration
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-700">
              See how we've helped businesses like yours establish strong online presence and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-2xl transition-all group">
              <div className="relative h-64 bg-gradient-to-br from-lime-500 to-lime-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/automation-concept-f9tkgPfZFDHnjgSBecWyVy.webp"
                  alt="Nexorwa Energies"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nexorwa Energies</h3>
                <p className="text-gray-600 mb-4">
                  Corporate website redesign focused on a clearer service narrative and straightforward enquiry paths.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Web Design</span>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">SEO</span>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Enquiry Flow</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://nexorwaenergies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold"
                  >
                    View Website
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="https://nexorwaenergies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold text-sm"
                  >
                    Visit Live Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-2xl transition-all group">
              <div className="relative h-64 bg-gradient-to-br from-lime-500 to-lime-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/conversion-metrics-EYZeFay6NshivZjdXEfKeo.webp"
                  alt="Ogintech Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ogintech Services</h3>
                <p className="text-gray-600 mb-4">
                  Business website and booking workflow designed to make client scheduling easier to manage.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Web Development</span>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Booking System</span>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Automation</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://ogintechservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold"
                  >
                    View Website
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="https://ogintechservices.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-semibold text-sm"
                  >
                    Visit Live Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-2xl transition-all group">
              <div className="relative h-64 bg-gradient-to-br from-lime-500 to-lime-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                <div className="w-full h-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex flex-col items-center justify-center text-white">
                  <div className="rounded-2xl bg-white/15 p-5 shadow-lg">
                    <Heart size={54} fill="currentColor" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-3xl font-bold"><span className="text-emerald-200">Go</span>Give <span className="text-amber-300">Africa</span></p>
                  <p className="mt-2 text-sm text-emerald-100">Fundraising platform</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">GoGive Africa</h3>
                <p className="text-gray-600 mb-4">
                  A fundraising platform with campaign management, account workflows, payment-related operations, and administrative tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Platform Development</span>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Campaign Workflows</span>
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Admin Tools</span>
                </div>
                <a
                  href="https://gogiveafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold"
                >
                  Visit GoGive Africa
                  <ExternalLink size={18} />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Engagement
            </h2>
            <p className="text-lg text-gray-700">
              Choose the package that fits your business needs. All plans include ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-400 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Scoped to your project</span>
                <p className="text-gray-600 mt-2">One-time investment</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Professional Website</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Mobile Responsive</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Contact Forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Basic SEO</span>
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-lg font-semibold">
                Get Started
              </Button>
            </Card>

            {/* Growth - Featured */}
            <Card className="p-8 bg-gradient-to-br from-lime-500 to-lime-600 text-gray-900 border-2 border-lime-500 shadow-xl relative">
              <div className="absolute top-0 right-0 bg-gray-900 text-lime-400 px-4 py-1 rounded-bl-lg text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-gray-800 mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Scoped to your project</span>
                <span className="text-gray-800 ml-2">- $1,500</span>
                <p className="text-gray-800 mt-2">One-time investment</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-400 text-xs">✓</span>
                  </span>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-400 text-xs">✓</span>
                  </span>
                  <span>Custom Web Apps</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-400 text-xs">✓</span>
                  </span>
                  <span>Booking System</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-400 text-xs">✓</span>
                  </span>
                  <span>Basic Automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-400 text-xs">✓</span>
                  </span>
                  <span>Analytics Dashboard</span>
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-gray-900 text-lime-400 hover:bg-gray-800 rounded-lg font-semibold">
                Get Started
              </Button>
            </Card>

            {/* Premium */}
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-400 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">For enterprise needs</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom proposal</span>
                <span className="text-gray-600 ml-2">+</span>
                <p className="text-gray-600 mt-2">Custom pricing</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Everything in Growth</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Advanced Automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Payment Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Custom Features</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Priority Support</span>
                </li>
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold rounded-lg">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-gray-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/cta-gradient-N2GqWa32Jayrb8QgBZj4Qw.webp')",
            backgroundSize: "cover",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8">
              Let's discuss how we can help you build a high-converting online presence and automate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openContactForm} className="bg-gray-900 text-lime-400 hover:bg-gray-800 rounded-lg px-8 py-3 text-lg font-semibold flex items-center justify-center gap-2">
                Book a Free Consultation
                <ArrowRight size={20} />
              </Button>
              <Button onClick={openContactForm} variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900/10 rounded-lg px-8 py-3 text-lg font-semibold">
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="TechSynergy Solutions" className="w-10 h-10" />
                <span className="font-bold text-lg text-white">TechSynergy</span>
              </div>
              <p className="text-gray-400">
                Building custom software and web systems around real business workflows.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-lime-400 transition">
                    Corporate Websites
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-lime-400 transition">
                    Custom Web Apps
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-lime-400 transition">
                    Client Portals
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-lime-400 transition">
                    Automation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-lime-400 transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-lime-400 transition">
                    Engagement
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-lime-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-lime-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a href="https://wa.me/2348160357708" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition">
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a href="mailto:hello@techsynergyhq.com" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition">
                  <Mail size={18} />
                  Email
                </a>
                <a href="tel:+2348160357708" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition">
                  <Phone size={18} />
                  Call
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2026 TechSynergy Solutions. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="mailto:hello@techsynergyhq.com?subject=Privacy%20enquiry" className="text-gray-400 hover:text-lime-400 transition text-sm">Privacy</a>
                <a href="mailto:hello@techsynergyhq.com?subject=Terms%20enquiry" className="text-gray-400 hover:text-lime-400 transition text-sm">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
