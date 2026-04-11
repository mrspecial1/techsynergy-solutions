import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ Component
 * Expandable accordion addressing common objections about pricing, timeline, and process
 * Reduces friction and builds trust with potential clients
 */

const faqItems = [
  {
    id: 1,
    category: "Pricing",
    question: "What's included in each pricing tier?",
    answer:
      "Starter ($500) includes a professional website with mobile responsiveness and basic SEO. Growth ($1000-1500) adds landing pages, booking system, and basic automation. Premium ($2000+) includes everything plus advanced automation, custom features, and priority support. All packages include ongoing support and maintenance.",
  },
  {
    id: 2,
    category: "Pricing",
    question: "Do you offer custom pricing for larger projects?",
    answer:
      "Absolutely! Our Premium tier starts at $2000, but we work with enterprises on custom projects. We'll assess your specific needs and provide a tailored quote. Contact us for a consultation to discuss your requirements.",
  },
  {
    id: 3,
    category: "Pricing",
    question: "Are there any hidden fees or ongoing costs?",
    answer:
      "No hidden fees. The pricing shown is what you pay upfront. We include hosting, domain setup, and 3 months of free support. After that, optional maintenance packages start at $99/month. You own your website and can move it anytime.",
  },
  {
    id: 4,
    category: "Timeline",
    question: "How long does it take to build a website?",
    answer:
      "Typical timelines: Starter websites take 2-3 weeks, Growth tier projects take 3-4 weeks, and Premium projects take 4-6 weeks. This includes design, development, testing, and deployment. We'll provide a detailed timeline after our initial consultation.",
  },
  {
    id: 5,
    category: "Timeline",
    question: "Can you expedite the project timeline?",
    answer:
      "Yes, we offer rush delivery for an additional 20% fee. This reduces timelines by 40-50%. However, we recommend standard timelines for quality assurance. Contact us to discuss rush options for your specific project.",
  },
  {
    id: 6,
    category: "Timeline",
    question: "What if I need revisions after launch?",
    answer:
      "All packages include 3 months of free revisions and support. After launch, we provide unlimited revisions during this period. Beyond 3 months, revisions are handled through our maintenance packages or billed hourly at $75/hour.",
  },
  {
    id: 7,
    category: "Process",
    question: "What's your development process?",
    answer:
      "Our process: (1) Discovery call to understand your goals, (2) Proposal and timeline, (3) Design mockups for approval, (4) Development and integration, (5) Testing and QA, (6) Launch and training. You're involved at every stage with regular updates.",
  },
  {
    id: 8,
    category: "Process",
    question: "Do you handle domain and hosting setup?",
    answer:
      "Yes! We handle everything. If you already have a domain, we'll migrate it. If not, we'll register one for you (included in the package). We set up reliable hosting optimized for performance and security. You get full access and can manage it anytime.",
  },
  {
    id: 9,
    category: "Process",
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes, absolutely. All our websites are mobile-first responsive and include SEO optimization (meta tags, structured data, fast loading, clean URLs). For advanced SEO strategies, we recommend our Growth or Premium tiers which include ongoing optimization.",
  },
  {
    id: 10,
    category: "Process",
    question: "Can I update my website content myself?",
    answer:
      "Yes! We build websites with easy-to-use CMS platforms. We provide training on how to update content, add blog posts, and manage your site. For complex changes, our support team is always available to help.",
  },
  {
    id: 11,
    category: "Process",
    question: "What happens if I'm not satisfied with the result?",
    answer:
      "We're confident in our work, but if you're not satisfied, we offer unlimited revisions during your 3-month support period. We'll work with you until you're happy. If major changes are needed, we'll discuss options and pricing.",
  },
  {
    id: 12,
    category: "Process",
    question: "Do you provide analytics and performance reports?",
    answer:
      "Yes! Growth and Premium packages include Google Analytics setup and monthly performance reports. You'll see visitor data, conversion rates, traffic sources, and recommendations for improvement. Starter tier includes basic analytics access.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Pricing", "Timeline", "Process"];
  const filteredFAQs = selectedCategory
    ? faqItems.filter((item) => item.category === selectedCategory)
    : faqItems;

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Everything you need to know about our services, pricing, and process. Can't find what you're looking for?{" "}
            <a href="#" className="text-lime-600 font-semibold hover:text-lime-700">
              Contact us
            </a>
            .
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedCategory === null
                ? "bg-lime-500 text-gray-900"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-lime-400"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? "bg-lime-500 text-gray-900"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-lime-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-xs font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-lime-600 flex-shrink-0 transition-transform ${
                    expandedId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedId === item.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Our team is ready to answer any questions and discuss how we can help your business grow. Let's chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348160357708"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-900 text-lime-400 font-semibold rounded-lg hover:bg-gray-800 transition inline-flex items-center justify-center gap-2"
            >
              Message on WhatsApp
            </a>
            <button className="px-8 py-3 bg-gray-900 text-lime-400 font-semibold rounded-lg hover:bg-gray-800 transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
