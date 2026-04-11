import { Card } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

/**
 * BlogArticle Component
 * Displays individual blog articles with metadata and SEO optimization
 */

interface BlogArticleProps {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
  slug: string;
}

export default function BlogArticle({
  title,
  excerpt,
  author,
  date,
  readTime,
  category,
  image,
  slug,
}: BlogArticleProps) {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
      {/* Featured Image */}
      <div className="relative h-48 bg-gradient-to-br from-lime-500 to-lime-700 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-xs font-bold mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Read More Link */}
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-semibold transition"
        >
          Read Article
          <ArrowRight size={16} />
        </a>
      </div>
    </Card>
  );
}
