import { Link, useRoute } from "wouter";
import NotFound from "./NotFound";
import { blogArticles } from "./Blog";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const article = blogArticles.find((item) => item.slug === params?.slug);
  if (!article) return <NotFound />;

  return <main className="min-h-screen bg-white text-gray-900"><article className="container max-w-3xl py-16 md:py-24">
    <Link href="/blog" className="text-lime-700 font-semibold hover:text-lime-800">← Back to resources</Link>
    <p className="mt-10 text-sm font-bold uppercase tracking-wide text-lime-700">{article.category}</p>
    <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{article.title}</h1>
    <p className="mt-5 text-gray-600">{article.date} · {article.readTime} min read</p>
    <img src={article.image} alt="" className="mt-10 h-72 w-full rounded-2xl object-cover" />
    <div className="mt-10 space-y-5 text-lg leading-relaxed text-gray-700">{article.content.split("\n\n").map((paragraph) => {
      if (paragraph.startsWith("## ")) return <h2 key={paragraph} className="pt-5 text-3xl font-bold text-gray-900">{paragraph.slice(3)}</h2>;
      if (paragraph.startsWith("### ")) return <h3 key={paragraph} className="pt-3 text-2xl font-bold text-gray-900">{paragraph.slice(4)}</h3>;
      return <p key={paragraph}>{paragraph}</p>;
    })}</div>
  </article></main>;
}
