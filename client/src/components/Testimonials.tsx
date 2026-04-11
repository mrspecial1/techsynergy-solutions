import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

/**
 * Testimonials Component
 * Displays client reviews and case study metrics to build social proof
 */

const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    company: "Nexorwa Energies",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    quote: "TechSynergy transformed our online presence completely. Our website now converts 45% more visitors into qualified leads. The team was professional, responsive, and delivered on time.",
    metric: "+45% Lead Generation",
  },
  {
    id: 2,
    name: "Tunde Adeyemi",
    company: "Ogintech Services",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    quote: "The booking system they built saved us 15+ hours per week on scheduling. Our clients love the seamless experience, and we've seen a 60% increase in repeat bookings.",
    metric: "+60% Repeat Bookings",
  },
  {
    id: 3,
    name: "Zainab Hassan",
    company: "Digital Marketing Agency",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    quote: "Working with TechSynergy was a game-changer. They didn't just build a website—they built a lead generation machine. Our revenue increased by 3x within 6 months.",
    metric: "3x Revenue Growth",
  },
  {
    id: 4,
    name: "Emeka Obi",
    company: "Consulting Firm",
    role: "Business Development",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    quote: "The automation workflows they implemented eliminated manual data entry and follow-ups. Our team is now 40% more productive, and client satisfaction is at an all-time high.",
    metric: "+40% Team Productivity",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Service-Based Businesses
          </h2>
          <p className="text-lg text-gray-700">
            See how we've helped clients like you achieve remarkable growth and transform their businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-xl transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-lime-500 text-lime-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Metric Badge */}
              <div className="mb-6 inline-block">
                <span className="px-4 py-2 bg-lime-100 text-lime-700 rounded-full font-bold text-sm">
                  {testimonial.metric}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-semibold text-lime-600">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-gradient-to-r from-lime-50 to-lime-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">50+</p>
              <p className="text-gray-700 font-semibold">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">98%</p>
              <p className="text-gray-700 font-semibold">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">$15M+</p>
              <p className="text-gray-700 font-semibold">Client Revenue Generated</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">5 Years</p>
              <p className="text-gray-700 font-semibold">Industry Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
