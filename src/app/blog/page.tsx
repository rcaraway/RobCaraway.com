import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Thoughts on mobile development, app growth, and engineering leadership"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {posts.length === 0 ? (
          <p style={{ color: "var(--color-muted)" }}>No posts yet.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-100 pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="no-underline group">
                  <h2
                    className="text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors"
                    style={{ color: "var(--color-heading)" }}
                  >
                    {post.title}
                  </h2>
                </Link>
                <time className="text-sm" style={{ color: "var(--color-muted)" }}>
                  {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#e8f4f8", color: "var(--color-primary)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
