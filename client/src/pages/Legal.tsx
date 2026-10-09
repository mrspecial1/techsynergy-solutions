import { Link } from "wouter";

export default function Legal({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  const title = privacy ? "Privacy notice" : "Terms of service";
  const sections = privacy
    ? [["What we collect", "If you contact us, we may receive the information you choose to provide, such as your name, email address, company details, and project enquiry."], ["How we use it", "We use enquiry information to respond to you, assess potential work, and maintain relevant business records."], ["Contact", "For privacy questions, email hello@techsynergyhq.com."]]
    : [["Our services", "Project scope, deliverables, fees, timelines, and responsibilities are confirmed in a written proposal or agreement before work begins."], ["Website information", "This website is provided for general information. It is not a binding offer or guarantee of a particular business outcome."], ["Contact", "For questions about these terms, email hello@techsynergyhq.com."]];
  return <main className="min-h-screen bg-[#08110d] text-white"><div className="container max-w-3xl py-20 md:py-28"><Link href="/" className="text-lime-300 font-semibold">← Back to TechSynergy</Link><p className="mt-12 text-xs uppercase tracking-[.16em] text-lime-300">TechSynergy Solutions</p><h1 className="mt-3 text-4xl md:text-5xl font-bold">{title}</h1><p className="mt-5 text-gray-300">Last updated: October 2026</p><div className="mt-12 space-y-10">{sections.map(([heading, copy]) => <section key={heading}><h2 className="text-2xl font-bold">{heading}</h2><p className="mt-3 text-gray-300 leading-relaxed">{copy}</p></section>)}</div><p className="mt-12 rounded-xl border border-lime-300/20 bg-lime-300/10 p-4 text-sm text-gray-200">This page is a plain-language overview and should be reviewed for your applicable jurisdiction before paid marketing or collecting sensitive information.</p></div></main>;
}
