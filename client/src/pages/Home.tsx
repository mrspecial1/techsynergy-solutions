import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Smartphone, Cog, TrendingUp, ExternalLink, MessageCircle, Mail, Phone, CheckCircle, AlertTriangle, Clock, Star, DollarSign, Shield, Search } from "lucide-react";
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
      <div className="bg-gray-900 text-center py-2 px-4 text-sm font-semibold z-50 relative">
        <span className="text-gray-400">Only </span>
        <span className="text-lime-400 font-bold">{slotsLeft} client spots</span>
        <span className="text-gray-400"> available this month — </span>
        <button onClick={openContactForm} className="text-white underline hover:text-lime-400 transition">Claim yours before it's gone →</button>
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
            <a href="#audit" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm hidden md:inline">Free Audit</a>
            <a href="#pricing" className="text-gray-700 hover:text-lime-600 transition font-medium text-sm hidden md:inline">Pricing</a>
            <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg px-4 md:px-6 py-2 text-sm transition-all hover:shadow-lg">
              Book Free Audit →
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/hero-background-jLzVKRuEcukMN8VdXkfvE7.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/97 to-white/50 z-0" />

        <div className="container relative z-10">
          <div className="max-w-2xl">

            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 bg-lime-50 border border-lime-200 rounded-full px-4 py-2 mb-8">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => <Star key={s} size={12} className="text-lime-500 fill-lime-500" />)}
              </div>
              <span className="text-sm font-semibold text-gray-700">50+ service businesses trust us in the US &amp; UK</span>
            </div>

            {/* HEADLINE — believable, outcome-driven */}
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-5 leading-tight">
              We Build Lead-Generating Websites That Turn{" "}
              <span className="text-lime-600">Visitors Into Paying Clients</span>
            </h1>

            {/* SUBHEADLINE — explains HOW */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We design conversion-focused websites, landing pages, and systems that capture leads and turn them into paying customers — automatically. Built specifically for construction companies, local service providers, and real estate firms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-black rounded-lg px-8 py-4 text-lg flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all">
                Book Your Free Website Audit <ArrowRight size={20} />
              </Button>
              <Button onClick={openContactForm} variant="outline" className="border-2 border-gray-300 text-gray-700 rounded-lg px-8 py-4 text-lg font-bold hover:border-lime-500 hover:bg-lime-50 transition-all">
                Get More Clients Now →
              </Button>
            </div>

            {/* Trust stats — ABOVE THE FOLD */}
            <div className="flex flex-wrap gap-8 mb-6">
              {[
                { num: "50+", label: "Projects Completed" },
                { num: "98%", label: "Client Satisfaction" },
                { num: "£/$3k+", label: "Avg. Client Revenue Gained" },
                { num: "5 Yrs", label: "Industry Experience" },
              ].map((s) => (
                <div key={s.num}>
                  <p className="text-2xl md:text-3xl font-black text-lime-600">{s.num}</p>
                  <p className="text-sm text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trusted by logos row */}
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Trusted by growing businesses</p>
            <div className="flex flex-wrap gap-6 opacity-50">
              {["Nexorwa Energies", "Ogintech Services", "Premier Realty", "SwiftFix Plumbing"].map((name) => (
                <span key={name} className="text-gray-500 font-bold text-xs border border-gray-200 rounded px-3 py-1">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION — hits HARD ===== */}
      <section className="py-20 md:py-28 bg-gray-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block bg-red-500/20 text-red-400 text-xs font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">The Brutal Truth</span>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Your Website Looks Good.<br />
              <span className="text-red-400">But It's Not Bringing You Clients.</span>
            </h2>

            <div className="space-y-6 mb-12 text-lg text-gray-300 leading-relaxed max-w-2xl">
              <p>Visitors come to your site — and leave without calling.</p>
              <p>You've got no way to capture their details. No follow-up. No system.</p>
              <p className="font-semibold text-white">Meanwhile, your competitors — with faster, sharper, conversion-built websites — are capturing those exact same leads and turning them into paying customers.</p>
              <p className="text-xl font-black text-red-400">Every day your website doesn't convert... you're losing money. Real money.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <AlertTriangle size={24} className="text-red-400" />, title: "You're invisible on Google", body: "If you're not on page 1, you don't exist. Competitors are stealing traffic you should own." },
                { icon: <TrendingUp size={24} className="text-orange-400" />, title: "Your website leaks leads", body: "No clear CTA. No lead capture. Visitors leave and you never know they existed." },
                { icon: <Clock size={24} className="text-yellow-400" />, title: "You chase every enquiry manually", body: "You're too busy on the job to follow up fast. The client calls someone else. Job lost." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/40 transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-lime-500 rounded-2xl p-8 text-center">
              <p className="text-gray-900 text-xl md:text-2xl font-black mb-6">
                This is fixable. And it starts with one free conversation.
              </p>
              <Button onClick={openContactForm} className="bg-gray-900 text-lime-400 hover:bg-gray-800 font-black px-8 py-3 rounded-lg text-lg">
                Claim Your Free Website Audit →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">How We Help</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              We Do Not Build Websites.<br />
              <span className="text-lime-600">We Build Client-Getting Machines.</span>
            </h2>
            <p className="text-lg text-gray-600">
              Every page, every button, every word on your website is engineered to do one thing: turn visitors into paying clients. Here is how.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <TrendingUp size={20} />, title: "Turn visitors into paying clients", body: "Every page is built with conversion architecture — trust signals, clear messaging, and CTAs that guide visitors straight to contacting you." },
              { icon: <Zap size={20} />, title: "Capture leads automatically — even at 2am", body: "While you sleep, your website collects enquiries, sends follow-ups, and books appointments. Wake up to new leads in your inbox." },
              { icon: <Smartphone size={20} />, title: "Look more credible than any competitor", body: "A fast, professional, mobile-perfect site instantly positions you as the premium choice — before you even speak to a client." },
              { icon: <Cog size={20} />, title: "Automate follow-ups — stop losing warm leads", body: "Automated sequences re-engage every enquiry. No more lost leads because you were too busy to reply fast enough." },
              { icon: <Globe size={20} />, title: "Get found on Google — for free", body: "Built SEO-first so local customers find you when they search for your services. Consistent traffic. Zero ad spend." },
              { icon: <DollarSign size={20} />, title: "Know exactly what your website earns you", body: "Clear analytics tracking leads, calls, and bookings. You will know your website's ROI down to the last pound or dollar." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-lime-300 hover:shadow-md transition-all">
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

      {/* ===== SERVICES — OUTCOME-BASED ===== */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Three Ways We Get You More Clients
            </h2>
            <p className="text-lg text-gray-600">Not features. Not tech. Pure outcomes — more enquiries, more bookings, more revenue.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-lime-600" size={32} />,
                tag: "Most Popular",
                outcome: "More enquiries from your website",
                title: "High-Converting Websites",
                body: "Forget brochure websites. We build sites that are engineered to generate leads. Every element — layout, copy, speed, CTAs — is optimised to turn visitors into clients.",
                features: ["Conversion-optimised design", "Mobile-first & fast-loading", "Local SEO built in", "Lead capture forms", "Trust signals & social proof"],
                cta: "Get My Client-Winning Website →",
              },
              {
                icon: <Smartphone className="text-lime-600" size={32} />,
                tag: null,
                outcome: "Consistent enquiries on autopilot",
                title: "Lead Generation Systems",
                body: "Landing pages, booking systems, and automated follow-up sequences that work 24/7 — so you wake up to new leads without lifting a finger.",
                features: ["High-converting landing pages", "Online booking & scheduling", "Automated email follow-ups", "CRM integration", "Lead tracking dashboard"],
                cta: "Start Getting Leads Automatically →",
              },
              {
                icon: <Zap className="text-lime-600" size={32} />,
                tag: null,
                outcome: "Hours saved. Revenue gained.",
                title: "Business Automation",
                body: "Stop drowning in admin. We automate your quotes, follow-ups, reminders, and onboarding — so you spend time doing the work that makes you money.",
                features: ["Automated quote follow-ups", "Review collection system", "Appointment reminders", "Client onboarding workflows", "Payment integrations"],
                cta: "Automate My Business →",
              },
            ].map((s) => (
              <Card key={s.title} className="p-8 border-2 border-gray-100 hover:border-lime-400 hover:shadow-xl transition-all group relative overflow-hidden bg-white">
                {s.tag && <div className="absolute top-0 right-0 bg-lime-500 text-gray-900 text-xs font-black px-3 py-1 rounded-bl-lg uppercase tracking-wide">{s.tag}</div>}
                <div className="w-16 h-16 bg-lime-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-100 transition-all">{s.icon}</div>
                <p className="text-lime-600 text-xs font-black uppercase tracking-wider mb-2">→ {s.outcome}</p>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{s.body}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle size={15} className="text-lime-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg text-sm">{s.cta}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section id="results" className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-lime-500/20 text-lime-400 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Proof It Works</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Real Businesses. Real Results.</h2>
            <p className="text-lg text-gray-400">We do not guess. We do not promise. We deliver — and here is the proof.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/automation-concept-f9tkgPfZFDHnjgSBecWyVy.webp",
                tag: "Energy Sector",
                name: "Nexorwa Energies",
                sub: "Corporate website redesign + lead generation system",
                rows: [
                  { label: "Problem", color: "text-red-400", text: "Outdated website losing B2B contracts to competitors with a stronger online presence. No lead capture whatsoever." },
                  { label: "Solution", color: "text-blue-400", text: "Full corporate redesign with conversion-optimised service pages, trust signals, case studies, and a strategic enquiry system." },
                  { label: "Result", color: "text-lime-400", text: "45% increase in qualified enquiries within 60 days. First new contract attributed directly to the website within 3 weeks." },
                ],
                stats: [{ n: "+45%", l: "More Leads" }, { n: "60", l: "Days to Results" }, { n: "3x", l: "More Page Views" }],
                caseHref: "/case-study/nexorwa",
                liveHref: "https://nexorwaenergies.com",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/conversion-metrics-EYZeFay6NshivZjdXEfKeo.webp",
                tag: "Service Business",
                name: "Ogintech Services",
                sub: "Website + booking system + automation",
                rows: [
                  { label: "Problem", color: "text-red-400", text: "Owner spending 3+ hours daily on manual scheduling, missed calls, and unpaid invoice chasing — with zero time to grow." },
                  { label: "Solution", color: "text-blue-400", text: "Professional website with online booking, automated reminders, and an invoice workflow that runs without the owner." },
                  { label: "Result", color: "text-lime-400", text: "80% less manual admin. 15+ hours per week reclaimed. Bookings doubled within 90 days of launch." },
                ],
                stats: [{ n: "80%", l: "Less Admin" }, { n: "15hrs", l: "Saved Per Week" }, { n: "2x", l: "More Bookings" }],
                caseHref: "/case-study/ogintech",
                liveHref: "https://ogintechservices.com",
              },
            ].map((c) => (
              <div key={c.name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all group">
                <div className="relative h-52 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-lime-500 text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase">{c.tag}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-1">{c.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{c.sub}</p>
                  <div className="space-y-3 mb-6">
                    {c.rows.map((row) => (
                      <div key={row.label} className="flex gap-3">
                        <span className={`${row.color} font-bold text-xs w-16 flex-shrink-0 pt-0.5`}>{row.label}:</span>
                        <span className="text-gray-300 text-sm">{row.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 mb-6 border-t border-white/10 pt-6">
                    {c.stats.map((st) => (
                      <div key={st.l}>
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
            <p className="text-gray-400 mb-4 text-lg">Your business could be the next success story.</p>
            <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-400 text-gray-900 font-black px-10 py-4 rounded-lg text-lg">Get My Free Website Audit →</Button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ===== FREE AUDIT SECTION — GAME CHANGER ===== */}
      <section id="audit" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">Free — No Obligation</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                  Get a Free Website Audit
                  <span className="block text-lime-600">Worth $500</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We will analyse your current website and show you exactly why you are not getting leads — and the precise steps to fix it. No fluff. No sales pressure. Just actionable insights you can use immediately.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Why your website is not converting visitors into leads",
                    "What your competitors are doing that you are missing",
                    "The exact changes that will get you more enquiries",
                    "A custom roadmap to grow your online leads",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-lime-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={openContactForm} className="bg-lime-500 hover:bg-lime-600 text-gray-900 font-black px-10 py-4 rounded-lg text-lg flex items-center gap-2 hover:shadow-xl transition-all">
                  <Search size={20} />
                  Claim Your Free Audit Now →
                </Button>
                <p className="text-gray-400 text-sm mt-3">Takes 2 minutes to request. Response within 24 hours.</p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-black text-white mb-6">What We Will Cover:</h3>
                <div className="space-y-5">
                  {[
                    { num: "01", title: "Conversion Analysis", body: "We check every page for missed conversion opportunities — CTAs, trust signals, and layout issues costing you leads." },
                    { num: "02", title: "SEO Health Check", body: "We identify why Google is not sending you traffic and what it will take to rank above your competitors." },
                    { num: "03", title: "Speed & Mobile Review", body: "Slow sites lose clients. We test your site speed and mobile experience against industry benchmarks." },
                    { num: "04", title: "Competitor Comparison", body: "We compare your site against your top 3 local competitors and show you exactly where you are losing ground." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <span className="text-lime-400 font-black text-lg w-8 flex-shrink-0">{item.num}</span>
                      <div>
                        <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                        <p className="text-gray-400 text-sm">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="text-center text-gray-400 text-sm">Valued at <span className="text-white font-bold line-through">$500</span> — yours <span className="text-lime-400 font-black">FREE</span> this month only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <ComparisonChart />

      {/* ===== PRICING ===== */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <span className="inline-block bg-lime-100 text-lime-700 text-xs font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">Investment</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Stop Losing Clients. Start Winning Them.</h2>
            <p className="text-lg text-gray-600">One-time investment. A website that pays for itself — over and over again.</p>
          </div>

          <div className="max-w-xl mx-auto mb-12 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <p className="text-amber-800 font-semibold text-sm">
              We only take on <strong>{slotsLeft} new clients per month</strong> to guarantee results. <strong>{slotsLeft} spots</strong> currently available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-300 transition-all">
              <p className="text-xs font-black text-gray-400 uppercase tracking-wide mb-2">For Startups</p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">Launch Package</h3>
              <p className="text-gray-500 text-sm mb-6">Get a professional website fast — so you stop losing clients to competitors who look the part</p>
              <div className="mb-8"><span className="text-5xl font-black text-gray-900">$500</span><p className="text-gray-400 mt-1 text-sm">One-time · No hidden fees</p></div>
              <ul className="space-y-3 mb-8">
                {["5-page professional website", "Mobile responsive design", "Lead capture contact forms", "Basic on-page SEO", "Google Analytics setup", "30-day post-launch support"].map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle size={15} className="text-lime-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{f}</span></li>
                ))}
              </ul>
              <Button onClick={openContactForm} className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-lg font-bold py-3">Get Started →</Button>
            </Card>

            {/* Growth */}
            <Card className="p-8 bg-gray-900 text-white border-2 border-lime-500 shadow-2xl relative scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-gray-900 px-5 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap">⭐ Best Value</div>
              <p className="text-xs font-black text-lime-400 uppercase tracking-wide mb-2">For Growing Businesses</p>
              <h3 className="text-2xl font-black text-white mb-1">Lead Machine Package</h3>
              <p className="text-gray-400 text-sm mb-6">Your complete client-getting system — built to generate consistent enquiries and book clients on autopilot</p>
              <div className="mb-8"><span className="text-5xl font-black text-white">$1,200</span><span className="text-gray-400 ml-2 text-sm">– $1,500</span><p className="text-gray-400 mt-1 text-sm">One-time · No hidden fees</p></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Launch", "High-converting landing pages", "Online booking system", "Automated lead follow-up sequences", "Local SEO optimisation", "Google Business Profile setup", "Conversion & lead tracking", "60-day post-launch support"].map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle size={15} className="text-lime-400 flex-shrink-0 mt-0.5" /><span className="text-gray-200 text-sm">{f}</span></li>
                ))}
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-400 text-gray-900 font-black rounded-lg py-3 text-base">Get More Clients Now →</Button>
              <p className="text-center text-gray-500 text-xs mt-3">Most clients earn this back within their first 1–2 new jobs</p>
            </Card>

            {/* Premium */}
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-lime-300 transition-all">
              <p className="text-xs font-black text-gray-400 uppercase tracking-wide mb-2">For Market Leaders</p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">Domination Package</h3>
              <p className="text-gray-500 text-sm mb-6">The full system — website, automation, and CRM — to dominate your local market and scale</p>
              <div className="mb-8"><span className="text-5xl font-black text-gray-900">$2,000</span><span className="text-gray-500 ml-1 text-sm">+</span><p className="text-gray-400 mt-1 text-sm">Custom quote — bespoke solution</p></div>
              <ul className="space-y-3 mb-8">
                {["Everything in Lead Machine", "Full business automation suite", "Payment & invoicing system", "Custom CRM integration", "Reputation management", "Multi-location support", "Priority support & SLA", "Quarterly growth reviews"].map((f) => (
                  <li key={f} className="flex items-start gap-2"><CheckCircle size={15} className="text-lime-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700 text-sm">{f}</span></li>
                ))}
              </ul>
              <Button onClick={openContactForm} className="w-full bg-lime-500 hover:bg-lime-600 text-gray-900 font-bold rounded-lg py-3">Book a Strategy Call →</Button>
            </Card>
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3"><Shield size={22} className="text-lime-600" /><p className="text-lg font-bold text-gray-900">100% Satisfaction Guarantee</p></div>
            <p className="text-gray-500 text-sm">Not happy with your first design? We will revise until you are — or refund your deposit. You have nothing to lose.</p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-32 bg-lime-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Every Day You Wait Is a Client Your Competitor Gets.
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-3 font-semibold">
              Book your free 30-minute website audit today.
            </p>
            <p className="text-gray-700 mb-10">
              We will tell you exactly what is stopping you from getting leads — and exactly how to fix it. No cost. No obligation. Just clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={openContactForm} className="bg-gray-900 text-lime-400 hover:bg-gray-800 rounded-lg px-10 py-4 text-xl font-black flex items-center justify-center gap-2 shadow-xl">
                Book My Free Audit Now <ArrowRight size={22} />
              </Button>
              <a href="https://wa.me/2348160357708" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-lime-400 rounded-lg px-10 py-4 text-xl font-black transition-all">
                <MessageCircle size={22} /> Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-800 text-sm font-semibold">
              <span className="flex items-center gap-2"><CheckCircle size={16} /> 100% Free — no strings</span>
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
                {[["Results", "#results"], ["Free Audit", "#audit"], ["Pricing", "#pricing"], ["Blog", "/blog"]].map(([label, href]) => (
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
              <Button onClick={openContactForm} className="mt-6 w-full bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold rounded-lg text-sm">Claim Free Audit →</Button>
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
