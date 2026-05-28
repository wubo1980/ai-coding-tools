import Link from "next/link";

import { SiteShell } from "@/components/layout/SiteShell";
import { getBlogPostsByNewest } from "@/content/blog";

/**
 * Metadata for the blog listing page.
 */
export const metadata = {
  title: "AI Coding Tools Blog — Industry Analysis & Developer Guides",
  description:
    "Analysis of AI coding tool market shifts, product comparisons, and developer guides. Latest: Microsoft cancels Claude Code licenses — what it means.",
};

/**
 * Renders the blog listing page with all posts sorted newest-first.
 */
export default function BlogPage() {
  const posts = getBlogPostsByNewest();

  return (
    <SiteShell>
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-14 lg:px-10 lg:py-16">
        <header>
          <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI Coding Tools Blog
          </h1>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            Analysis of market shifts, product comparisons, and guides for developers
            navigating the AI coding assistant landscape.
          </p>
        </header>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-[28px] border border-white/10 bg-[#121723] p-6 transition hover:border-[#10b981]/40"
            >
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-[#10b981]">
                  {post.category}
                </span>
                <span>{post.publishedAt}</span>
                <span>·</span>
                <span>{post.readTimeMinutes} min read</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-3 text-xl font-semibold leading-7 text-white transition group-hover:text-[#10b981]">
                  {post.title}
                </h2>
              </Link>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#10b981] transition hover:gap-2"
              >
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-sm text-zinc-500">
            No posts yet. Check back soon.
          </p>
        )}
      </div>
    </SiteShell>
  );
}
