import { useState } from "react";
import BlogArticle from "@/components/BlogArticle";
import { Search } from "lucide-react";

/**
 * Blog Page
 * SEO-optimized blog section with articles targeting high-intent keywords
 * Drives organic traffic and establishes authority
 */

export const blogArticles = [
  {
    id: "1",
    title: "Why 80% of Business Websites Fail to Convert Visitors Into Clients",
    excerpt: "Discover the common mistakes that prevent websites from generating leads and how to fix them. Learn the conversion optimization strategies that top agencies use.",
    content: `Most business websites fail because they focus on aesthetics rather than conversions. In this comprehensive guide, we'll explore the 5 critical mistakes that prevent websites from converting visitors into paying clients.

## The Problem with Most Websites

Many businesses invest thousands in building beautiful websites, only to discover they generate zero leads. Why? Because they're missing the fundamental principles of conversion optimization.

### Mistake #1: No Clear Value Proposition
Your homepage should immediately communicate what you do and why visitors should care. Instead, most websites bury this information or make it confusing.

### Mistake #2: Weak Call-to-Action Strategy
CTAs are scattered randomly across the site, use generic language like "Submit," and don't create urgency. Effective CTAs are strategic, specific, and repeated throughout the customer journey.

### Mistake #3: Poor Mobile Experience
Over 60% of web traffic comes from mobile devices. If your website isn't optimized for mobile, you're losing the majority of potential clients before they even see your services.

### Mistake #4: No Trust Signals
Visitors need proof that you're legitimate and deliver results. Without testimonials, case studies, certifications, or social proof, they'll leave and go to a competitor.

### Mistake #5: Slow Loading Speed
A website that takes more than 3 seconds to load loses 40% of visitors. Speed is both a user experience issue and a critical SEO ranking factor.

## The Solution

High-converting websites follow these principles:
- Clear, compelling value proposition above the fold
- Strategic CTAs throughout the customer journey
- Mobile-first responsive design
- Strong social proof and trust signals
- Lightning-fast load times
- Optimized for search engines

At TechSynergy Solutions, we build websites that not only look great but actually convert visitors into paying clients. Our average client sees a 45% increase in leads within the first month.`,
    author: "Chioma Okafor",
    date: "April 8, 2026",
    readTime: 8,
    category: "Web Design",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/automation-concept-f9tkgPfZFDHnjgSBecWyVy.webp",
    slug: "why-websites-fail-to-convert",
  },
  {
    id: "2",
    title: "How to Automate Your Business Operations and Save 20+ Hours Per Week",
    excerpt: "Learn the automation strategies that service-based businesses use to eliminate manual work, reduce costs, and scale without hiring. Real case studies included.",
    content: `Business automation is no longer a luxury—it's a necessity. In this guide, we'll show you exactly how to automate your operations and reclaim 20+ hours per week.

## Why Automation Matters

Manual processes are expensive, error-prone, and limit your ability to scale. Automation allows you to:
- Eliminate repetitive tasks
- Reduce human error
- Improve customer experience
- Scale without hiring
- Free up time for strategic work

## Key Areas to Automate

### 1. Booking & Scheduling
Use tools like Calendly, Acuity Scheduling, or custom booking systems to let clients book appointments 24/7 without your involvement.

### 2. Email & Communication
Set up automated email sequences for:
- Welcome emails
- Booking confirmations
- Appointment reminders
- Follow-ups
- Upsell campaigns

### 3. Payment Processing
Automate invoicing, payment collection, and receipts. This reduces no-shows and improves cash flow.

### 4. Data Entry & CRM
Integrate your tools so data flows automatically between systems. No more manual data entry.

### 5. Reporting & Analytics
Set up automated reports that track key metrics and send insights to your team.

## Real Results

One of our clients, Ogintech Services, automated their booking and payment system. Results:
- 80% reduction in manual work
- 60% increase in repeat bookings
- 15+ hours saved per week
- 25% increase in monthly revenue

## Getting Started

The best time to automate was yesterday. The second best time is today. Start by identifying your most time-consuming tasks and finding tools to automate them.`,
    author: "Tunde Adeyemi",
    date: "April 5, 2026",
    readTime: 10,
    category: "Business Automation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/services-illustration-eVfCNvbdRvM8yQvWjGp8Hj.webp",
    slug: "automate-business-operations",
  },
  {
    id: "3",
    title: "The Complete Guide to Landing Page Conversion Optimization in 2026",
    excerpt: "Master the science of high-converting landing pages. Learn the psychology, design principles, and copywriting strategies that turn visitors into customers.",
    content: `Landing pages are your most powerful sales tool. In this comprehensive guide, we'll teach you how to build landing pages that convert 10%+ of visitors.

## What Makes a High-Converting Landing Page

A high-converting landing page has these elements:
- Single, clear goal (one primary CTA)
- Compelling headline that speaks to visitor pain points
- Strong value proposition
- Social proof and testimonials
- Clear benefits (not features)
- Urgency and scarcity elements
- Mobile-optimized design
- Fast loading speed
- Minimal distractions

## The Conversion Formula

### Headline (Most Important)
Your headline has 3 seconds to grab attention. It should:
- Address a specific pain point
- Include a clear benefit
- Create curiosity or urgency

### Subheadline
Expand on the headline and clarify the offer.

### Hero Image/Video
Use a compelling visual that reinforces your message. Avoid generic stock photos.

### Body Copy
Keep it scannable with short paragraphs, bullet points, and subheadings. Focus on benefits, not features.

### Social Proof
Include testimonials, case studies, client logos, and statistics that build credibility.

### Call-to-Action
Make it big, bold, and specific. "Get Started" is weak. "Get a Free Website Review" is strong.

## Testing & Optimization

The best landing pages are built through testing:
- A/B test headlines
- Test different CTAs
- Test form fields (fewer = higher conversion)
- Test page layouts
- Test colors and design elements

## Results You Can Expect

With proper optimization, you can expect:
- 5-10% conversion rate for cold traffic
- 15-25% conversion rate for warm traffic
- 30%+ conversion rate for hot traffic (existing audience)

Our clients average a 12% conversion rate after optimization.`,
    author: "Chioma Okafor",
    date: "April 1, 2026",
    readTime: 12,
    category: "Conversion Optimization",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663542366846/HQEaRawH9PpqqwFQvErvZi/conversion-metrics-EYZeFay6NshivZjdXEfKeo.webp",
    slug: "landing-page-conversion-guide",
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["Web Design", "Business Automation", "Conversion Optimization"];

  const filteredArticles = blogArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-lime-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-gray-700">
              Learn proven strategies for building high-converting websites, automating your business, and growing faster. Updated weekly with actionable insights.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-lime-500 transition"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === null
                  ? "bg-lime-500 text-gray-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? "bg-lime-500 text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container pb-20">
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <BlogArticle key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No articles found. Try a different search.</p>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-lime-500 to-lime-600 py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Weekly Tips & Strategies
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Subscribe to our newsletter and get actionable insights on web design, automation, and lead generation delivered to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
                required
              />
              <button className="px-8 py-3 bg-gray-900 text-lime-400 font-semibold rounded-lg hover:bg-gray-800 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
