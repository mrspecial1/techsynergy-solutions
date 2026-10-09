import { Link, useRoute } from "wouter";

const services: Record<string, { title: string; summary: string; includes: string[] }> = {
  "business-websites": { title: "High-performance business websites", summary: "A business website should clarify your offer, guide the right decision-makers, and give your team a dependable enquiry path.", includes: ["Discovery and information architecture", "A tailored responsive interface", "Clear enquiry and contact journeys", "Search-ready technical foundations"] },
  "client-portals": { title: "Client portals and web applications", summary: "We design secure, role-aware experiences that help clients and internal teams complete work in one connected place.", includes: ["Requirements mapping and user roles", "Client or staff dashboards", "Workflow and integration planning", "Maintainable delivery handover"] },
  "booking-systems": { title: "Booking and payment systems", summary: "Replace fragmented scheduling and payment handoffs with a clear workflow designed around how your clients book and your team operates.", includes: ["Booking journey design", "Confirmation and reminder flows", "Payment-provider integration planning", "Operational handover"] },
  "workflow-automation": { title: "Workflow automation and integrations", summary: "We identify repeatable handoffs and design systems that reduce unnecessary manual work without losing the human decisions that matter.", includes: ["Workflow discovery", "Integration and data-flow planning", "Automation implementation", "Documentation for your team"] },
};

export default function ServiceScope() {
  const [, params] = useRoute("/services/:service");
  const service = services[params?.service || ""];
  if (!service) return <main className="min-h-screen bg-[#08110d] p-12 text-white">Service not found.</main>;
  return <main className="min-h-screen bg-[#08110d] text-white"><div className="container max-w-4xl py-20 md:py-28"><Link href="/" className="text-lime-300 font-semibold">← Back to TechSynergy</Link><p className="mt-12 text-xs font-semibold uppercase tracking-[.16em] text-lime-300">Service scope</p><h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">{service.title}</h1><p className="mt-7 max-w-2xl text-xl leading-relaxed text-gray-300">{service.summary}</p><div className="mt-12 grid gap-3 sm:grid-cols-2">{service.includes.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-200">{item}</div>)}</div><Link href="/" className="mt-12 inline-flex rounded-full bg-lime-400 px-6 py-3 font-semibold text-gray-950">Return to book a consultation</Link></div></main>;
}
