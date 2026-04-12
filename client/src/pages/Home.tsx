import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Smartphone, Cog, TrendingUp, ExternalLink, MessageCircle, Mail, Phone, CheckCircle, AlertTriangle, Clock, Star, DollarSign, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FAQ from "@/components/FAQ";
import ComparisonChart from "@/components/ComparisonChart";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/techsynergy-logo_d418b90e.png";

export default function Home() {
  const openContactForm = () => window.dispatchEvent(new Event("open-contact-form"));
  const [isScrolled, setIsScrolled] = useState(false);
  const slotsLeft = 3;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ContactForm />
      <WhatsAppWidget />
      <LeadMagnet />

      {/* Urgency Banner */}
      <div className="bg-gray-900 text-lime-400 text-center py-2 px-4 text-sm font-semibold z-50 relative">
        Only <span className="text-white font-bold">{slotsLeft} client spots</span> available this month —{" "}
        <button onClick={openContactForm} className="underline hover:text-white transition">Claim yours now →</button>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-8 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg !top-0" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between py-4 md:py-5">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="TechSynergy Solutions" className="w-11 h-11" />
            <span className="font-bold text-lg md:text-xl hidden sm:inline text-gray-900">TechSynergy</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#results" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm hidden md:inline">Results</a>
            <a href="#services" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm hidden md:inline">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm hidden md:inline">Pricing</a>
            <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg px-4 md:px-6 py-2 text-sm transition-all hover:shadow-lg">
              Get More Clients →
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/hero-background-jLzVKRuEcukMN8VdXkfvE7.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/97 to-white/60 z-0" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-lime-50 border border-lime-200 rounded-full px-4 py-2 mb-8">
              <span className="text-base">🇺🇸🇬🇧🇨🇦</span>
              <span className="text-sm font-semibold text-gray-700">Trusted by 50+ service businesses in the US &amp; UK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              We Help Service Businesses Get{" "}
              <span className="text-lime-600">2–5x More Clients</span>{" "}
              With Websites That Actually Convert
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We build high-converting websites and lead generation systems for construction companies, local service providers, and real estate firms — so your website stops being a brochure and starts being your #1 salesperson.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg px-8 py-4 text-lg flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all">
                Book Your Free Website Audit <ArrowRight size={20} />
              </Button>
              <Button onClick={openContactForm} variant="outline" className="border-2 border-gray-300 text-gray-700 rounded-lg px-8 py-4 text-lg font-semibold hover:border-lime-500">
                See Our Results ↓
              </Button>
            </div>
            <div className="flex flex-wrap gap-8">
              {[{ num: "50+", label: "Clients Served" }, { num: "98%", label: "Client Satisfaction" }, { num: "3x", label: "Avg. Lead Increase" }, { num: "5 Yrs", label: "Experience" }].map((s) => (
                <div key={s.num}>
                  <p className="text-2xl md:text-3xl font-black text-lime-600">{s.num}</p>
                  <p className="text-sm text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="container">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Businesses we have helped grow</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {["Nexorwa Energies", "Ogintech Services", "Local Builders Co.", "Premier Realty", "SwiftFix Plumbing"].map((name) => (
              <span key={name} className="text-gray-500 font-bold text-sm md:text-base">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Sound Familiar?</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Your Website Is Costing You Clients Every Single Day</h2>
            <p className="text-lg text-gray-600">While you are busy running your business, potential clients are landing on your website — and leaving to call your competitor instead.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <AlertTriangle className="text-red-500" size={28} />, bg: "bg-red-50", title: '"I have a website but no one calls"', body: "You invested money in a website but it looks like every other contractor. Visitors cannot tell why they should choose you — so they do not." },
              { icon: <TrendingUp className="text-orange-500" size={28} />, bg: "bg-orange-50", title: '"My competitors keep stealing my leads"', body: "While your website sits there doing nothing, competitors with fast, professional sites are scooping up clients that should have been yours." },
              { icon: <Clock className="text-yellow-600" size={28} />, bg: "bg-yellow-50", title: '"I am too busy to chase every enquiry"', body: "You miss calls, forget follow-ups, and lose jobs because you are on the tools all day. You need a system that works while you work." },
            ].map((item) => (
              <Card key={item.title} className="p-8 border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 italic">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </Card>
            ))}
          </div>
          <div className="max-w-2xl mx-auto text-center bg-gray-900 text-white rounded-2xl p-10">
            <p className="text-xl md:text-2xl font-bold leading-relaxed">Every day your website fails to convert is another day your competitor wins a client that should have been yours.</p>
            <p className="text-gray-400 mt-4 text-lg">That ends today.</p>
            <Button onClick={openContactForm} className="mt-8 bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold px-8 py-3 rounded-lg text-lg">Fix My Website Now →</Button>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">A Website That Works as Hard as You Do — 24/7</h2>
            <p className="text-lg text-gray-600">We do not just build websites. We build client-generating machines that capture leads, book appointments, and follow up automatically — even when you are on the job.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <TrendingUp size={20} />, title: "Turn visitors into paying clients", body: "Every page is engineered with one goal: get the visitor to contact you. Clear messaging, trust signals, and strategic CTAs guide them straight to your phone." },
              { icon: <Zap size={20} />, title: "Capture leads automatically — even at 2am", body: "Your lead capture system works around the clock. Forms, callbacks, and integrations ensure no enquiry slips through the cracks." },
              { icon: <Smartphone size={20} />, title: "Look more professional than any competitor", body: "A modern, fast, mobile-perfect website instantly positions you as the premium choice in your area." },
              { icon: <Cog size={20} />, title: "Stop chasing leads — let automation do it", body: "Automated follow-up sequences keep you top-of-mind with every lead. Fewer no-shows, faster conversions, more revenue." },
              { icon: <Globe size={20} />, title: "Rank higher on Google, get found first", body: "Our sites are built SEO-first so you show up when local customers search for your services. Free traffic, forever." },
              { icon: <DollarSign size={20} />, title: "A real ROI — not just a pretty site", body: "We track what matters: leads, calls, bookings, and revenue. You will know exactly what your website is earning you." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-lime-200 transition-all">
                <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center flex-shrink-0 text-lime-600">{item.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Three Ways We Get You More Clients</h2>
            <p className="text-lg text-gray-600">Each service is designed with one goal: more leads, more bookings, more revenue.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="text-lime-600" size={32} />, tag: "Most Popular", pitch: "Your 24/7 sales machine", title: "High-Converting Website", body: "A custom-built website that does not just look good — it generates leads. Every element is designed to build trust fast and push visitors to contact you.", features: ["Mobile-first design", "Fast page speed", "Conversion-optimised layout", "Local SEO built-in", "Lead capture forms"], cta: "Get My Website →" },
              { icon: <Smartphone className="text-lime-600" size={32} />, tag: null, pitch: "Never miss an enquiry again", title: "Lead Generation System", body: "Landing pages, booking systems, and automated follow-ups that capture every lead and turn them into booked appointments — on autopilot.", features: ["High-converting landing pages", "Online booking system", "Automated email follow-ups", "CRM integration", "Lead tracking dashboard"], cta: "Start Generating Leads →" },
              { icon: <Zap className="text-lime-600" size={32} />, tag: null, pitch: "Work less, earn more", title: "Business Automation", body: "We automate the repetitive admin stealing hours from your day — so you can focus on the work that actually makes you money.", features: ["Automated quote follow-ups", "Review collection system", "Appointment reminders", "Client onboarding workflows", "Payment integrations"], cta: "Automate My Business →" },
            ].map((s) => (
              <Card key={s.title} className="p-8 border-2 border-gray-100 hover:border-lime-400 hover:shadow-xl transition-all group relative overflow-hidden">
                {s.tag && <div className="absolute top-0 right-0 bg-lime-500 text-gray-900 text-xs font-black px-3 py-1 rounded-bl-lg uppercase">{s.tag}</div>}
                <div className="w-16 h-16 bg-lime-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-100 transition-all">{s.icon}</div>
                <p className="text-lime-600 text-xs font-bold uppercase tracking-wide mb-1">{s.pitch}</p>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{s.body}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle size={15} className="text-lime-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg">{s.cta}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="results" className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-lime-500/20 text-lime-400 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Real Results</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">We Do Not Promise Results. We Prove Them.</h2>
            <p className="text-lg text-gray-400">Real businesses. Real numbers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/automation-concept-f9tkgPfZFDHnjgSBecWyVy.webp", tag: "Energy Sector", name: "Nexorwa Energies", sub: "Corporate website redesign + lead generation system", problem: "Outdated website losing B2B clients to competitors with stronger online presence.", solution: "Full corporate redesign with conversion-optimised pages, trust signals, and strategic lead capture.", result: "45% increase in qualified enquiries within 60 days of launch.", stats: [{ n: "+45%", l: "More Leads" }, { n: "60", l: "Days to Results" }, { n: "3x", l: "More Page Views" }], caseHref: "/case-study/nexorwa", liveHref: "https://nexorwaenergies.com" },
              { img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/conversion-metrics-EYZeFay6NshivZjdXEfKeo.webp", tag: "Service Business", name: "Ogintech Services", sub: "Website + booking system + automation", problem: "Owner spending 3+ hours daily on manual scheduling, missed calls, and chasing unpaid invoices.", solution: "New professional website with online booking, automated appointment reminders, and invoice workflows.", result: "80% reduction in manual admin. Owner reclaimed 15+ hours per week.", stats: [{ n: "80%", l: "Less Admin" }, { n: "15hrs", l: "Saved Per Week" }, { n: "2x", l: "More Bookings" }], caseHref: "/case-study/ogintech", liveHref: "https://ogintechservices.com" },
            ].map((c) => (
              <div key={c.name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                  <div className="absolute top-4 left-4 bg-lime-500 text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase">{c.tag}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-1">{c.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{c.sub}</p>
                  <div className="space-y-3 mb-6">
                    {[{ label: "Problem", color: "text-red-400", text: c.problem }, { label: "Solution", color: "text-blue-400", text: c.solution }, { label: "Result", color: "text-lime-400", text: c.result }].map((row) => (
                      <div key={row.label} className="flex gap-3">
                        <span className={`${row.color} font-bold text-xs w-16 flex-shrink-0 mt-0.5`}>{row.label}:</span>
                        <span className="text-gray-300 text-sm">{row.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 mb-6">
                    {c.stats.map((st) => (
                      <div key={st.l} className="text-center">
                        <p className="text-2xl font-black text-lime-400">{st.n}</p>
                        <p className="text-gray-500 text-xs">{st.l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={c.caseHref} className="inline-flex items-center gap-1 text-lime-400 hover:text-lime-300 font-semibold text-sm">Full Case Study <ExternalLink size={13} /></a>
                    <a href={c.liveHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-200 font-semibold text-sm">Live Site <ExternalLink size={13} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Want results like these?</p>
            <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold px-10 py-4 rounded-lg text-lg">Get My Free Website Audit →</Button>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <ComparisonChart />

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Invest in Your Business — Not Just a Website</h2>
            <p className="text-lg text-gray-600">Every package is a complete client-getting system. One-time investment. Lifetime results.</p>
          </div>
          <div className="max-w-xl mx-auto mb-12 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-amber-800 font-semibold text-sm">We only take on <strong>{slotsLeft} new clients per month</strong> to guarantee quality. Currently <strong>{slotsLeft} spots</strong> available.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-300 transition-all">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Starter</p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">Launch Package</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for businesses that need a professional online presence fast</p>
              <div className="mb-8"><span className="text-5xl font-black text-gray-900">$500</span><p className="text-gray-400 mt-1 text-sm">One-time · No hidden fees</p></div>
              <ul className="space-y-3 mb-8">
                {["5-page professional website", "Mobile responsive design", "Contact & lead capture forms", "Basic on-page SEO", "Google Analytics setup", "30-day post-launch support"].map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle size={15} className="text-lime-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{f}</span></li>
                ))}
              </ul>
              <Button onClick={openContactForm} className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg font-bold py-3">Claim My Spot →</Button>
            </Card>

            <Card className="p-8 bg-gray-900 text-white border-2 border-lime-500 shadow-2xl relative scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-gray-900 px-5 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap">⭐ Most Popular</div>
              <p className="text-xs font-bold text-lime-400 uppercase tracking-wide mb-2">Growth</p>
              <h3 className="text-2xl font-black text-white mb-1">Lead Machine Package</h3>
              <p className="text-gray-400 text-sm mb-6">For businesses serious about getting more leads consistently</p>
              <div className="mb-8"><span className="text-5xl font-black text-white">$1,200</span><span className="text-gray-400 ml-2 text-sm">– $1,500</span><p className="text-gray-400 mt-1 text-sm">One-time · No hidden fees</p></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Launch", "High-converting landing pages", "Online booking system", "Automated lead follow-up", "Local SEO optimisation", "Google Business Profile setup", "Analytics & conversion tracking", "60-day post-launch support"].map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle size={15} className="text-lime-400 flex-shrink-0 mt-0.5" /><span className="text-gray-200 text-sm">{f}</span></li>
                ))}
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-400 text-gray-900 font-black rounded-lg py-3 text-base">Get More Clients Now →</Button>
              <p className="text-center text-gray-500 text-xs mt-3">Most clients recover this cost in their first 1–2 new jobs</p>
            </Card>

            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-300 transition-all">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Premium</p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">Domination Package</h3>
              <p className="text-gray-500 text-sm mb-6">For established businesses ready to dominate their local market</p>
              <div className="mb-8"><span className="text-5xl font-black text-gray-900">$2,000</span><span className="text-gray-500 ml-1 text-sm">+</span><p className="text-gray-400 mt-1 text-sm">Custom quote · Bespoke solution</p></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Lead Machine", "Full business automation suite", "Payment & invoicing system", "Custom CRM integration", "Reputation management system", "Multi-location support", "Priority support & SLA", "Quarterly strategy reviews"].map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle size={15} className="text-lime-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{f}</span></li>
                ))}
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg py-3">Book a Strategy Call →</Button>
            </Card>
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3"><Shield size={22} className="text-lime-600" /><p className="text-lg font-bold text-gray-900">100% Satisfaction Guarantee</p></div>
            <p className="text-gray-600 text-sm">If you are not completely happy with the design after your first revision round, we will refund your deposit. Zero risk.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-lime-500 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">Ready to Get More Clients?</h2>
            <p className="text-lg md:text-xl text-gray-800 mb-4">Book a free 30-minute website audit. We will show you exactly why your current site is not converting — and how to fix it.</p>
            <p className="text-gray-700 font-semibold mb-10">No pressure. No sales pitch. Just honest advice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={openContactForm} className="bg-gray-900 text-lime-400 hover:bg-gray-800 rounded-lg px-10 py-4 text-xl font-black flex items-center justify-center gap-2 shadow-xl">
                Book My Free Audit Now <ArrowRight size={22} />
              </Button>
              <a href="https://wa.me/2348160357708" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-lime-400 rounded-lg px-10 py-4 text-xl font-black transition-all">
                <MessageCircle size={22} /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-gray-800 text-sm font-semibold">
              <span className="flex items-center gap-2"><CheckCircle size={16} /> Free — no obligation</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} /> Results in 2–4 weeks</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} /> Only {slotsLeft} spots left this month</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="TechSynergy Solutions" className="w-10 h-10" />
                <span className="font-bold text-lg text-white">TechSynergy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">We help service businesses in the US &amp; UK get more clients with high-converting websites and lead generation systems.</p>
              <div className="flex items-center gap-1 mt-4">
                {[1,2,3,4,5].map((s) => <Star key={s} size={13} className="text-lime-400 fill-lime-400" />)}
                <span className="text-gray-400 text-xs ml-2">5.0 · 50+ clients</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {["High-Converting Websites", "Lead Generation Systems", "Business Automation", "Landing Pages", "SEO & Local Search"].map((s) => (
                  <li key={s}><a href="#services" className="text-gray-400 hover:text-lime-400 transition">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {[["Results", "#results"], ["Pricing", "#pricing"], ["Case Studies", "/case-study/nexorwa"], ["Blog", "/blog"]].map(([label, href]) => (
                  <li key={label}><a href={href} className="text-gray-400 hover:text-lime-400 transition">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3 text-sm">
                <a href="https://wa.me/2348160357708" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition"><MessageCircle size={15} /> WhatsApp Chat</a>
                <a href="mailto:info@techsynergyhq.com" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition"><Mail size={15} /> info@techsynergyhq.com</a>
                <a href="tel:+2348160357708" className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition"><Phone size={15} /> +234 816 035 7708</a>
              </div>
              <Button onClick={openContactForm} className="mt-6 w-full bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold rounded-lg text-sm">Book Free Audit →</Button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TechSynergy Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-lime-400 transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-lime-400 transition text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
