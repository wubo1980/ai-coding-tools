import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/SiteShell";
import { getBlogPost, blogPosts } from "@/content/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Returns static paths for all blog posts (required for static export).
 */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * Generates metadata for a blog post page.
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: {
      canonical: post.seo.canonicalPath,
    },
  };
}

/**
 * Converts plain markdown-like text into JSX elements.
 * Supports: headers, bold, italic, links, unordered lists.
 */
function renderContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = (key: string) => {
    if (inList) {
      elements.push(
        <ul key={key} className="mt-4 space-y-2">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, i) => {
    const textKey = `line-${i}`;

    // Headers
    if (line.startsWith("### ")) {
      flushList(`list-end-${i}`);
      elements.push(
        <h3 key={textKey} className="mt-8 text-lg font-semibold text-white">
          {line.slice(4)}
        </h3>
      );
      return;
    }
    if (line.startsWith("## ")) {
      flushList(`list-end-${i}`);
      elements.push(
        <h2 key={textKey} className="mt-10 text-xl font-semibold tracking-tight text-white">
          {line.slice(3)}
        </h2>
      );
      return;
    }
    if (line.startsWith("# ")) {
      flushList(`list-end-${i}`);
      elements.push(
        <h1 key={textKey} className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {line.slice(2)}
        </h1>
      );
      return;
    }

    // Horizontal rule
    if (line.startsWith("---")) {
      flushList(`list-end-${i}`);
      elements.push(
        <hr key={textKey} className="my-10 border-t border-white/10" />
      );
      return;
    }

    // Unordered list items
    if (line.startsWith("- ")) {
      // Process bold/italic markers
      const text = line.slice(2);
      inList = true;
      listItems.push(
        <li key={textKey} className="flex items-start gap-2 text-sm leading-7 text-zinc-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981]" />
          <span>{renderInline(text)}</span>
        </li>
      );
      return;
    }

    // Empty line
    if (line.trim() === "") {
      flushList(`list-end-${i}`);
      return;
    }

    // Bold text at start (like **text**)
    if (line.startsWith("**")) {
      flushList(`list-end-${i}`);
      elements.push(
        <p key={textKey} className="mt-4 text-sm leading-7 text-zinc-300">
          {renderInline(line)}
        </p>
      );
      return;
    }

    // Regular paragraph
    flushList(`list-end-${i}`);
    elements.push(
      <p key={textKey} className="mt-4 text-sm leading-7 text-zinc-300">
        {renderInline(line)}
      </p>
    );
  });

  // Flush any remaining list
  flushList(`list-end-final`);

  return elements;
}

/**
 * Renders inline markdown: bold (**), italic (*), links ([text](url)).
 */
function renderInline(text: string): React.ReactNode {
  // Process links first: [text](url)
  const linkParts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  const nodes: React.ReactNode[] = [];
  let linkIdx = 0;

  linkParts.forEach((part) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, linkText, linkUrl] = linkMatch;
      const isExternal = linkUrl.startsWith("http");
      if (isExternal) {
        nodes.push(
          <a
            key={`link-${linkIdx++}`}
            href={linkUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#10b981] underline decoration-[#10b981]/30 underline-offset-2 transition hover:decoration-[#10b981]"
          >
            {linkText}
          </a>
        );
      } else {
        nodes.push(
          <Link
            key={`link-${linkIdx++}`}
            href={linkUrl}
            className="text-[#10b981] underline decoration-[#10b981]/30 underline-offset-2 transition hover:decoration-[#10b981]"
          >
            {linkText}
          </Link>
        );
      }
      return;
    }
    // Process bold and italic in remaining text
    const segments = part.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    segments.forEach((seg) => {
      const boldMatch = seg.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        nodes.push(
          <strong key={`bold-${linkIdx++}`} className="font-semibold text-white">
            {boldMatch[1]}
          </strong>
        );
        return;
      }
      const italicMatch = seg.match(/^\*([^*]+)\*$/);
      if (italicMatch) {
        nodes.push(
          <em key={`italic-${linkIdx++}`} className="italic text-zinc-200">
            {italicMatch[1]}
          </em>
        );
        return;
      }
      if (seg) {
        nodes.push(<span key={`text-${linkIdx++}`}>{seg}</span>);
      }
    });
  });

  return nodes;
}

/**
 * Renders an individual blog post page.
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-14 lg:px-10 lg:py-16">
        <header>
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <Link
              href="/blog"
              className="flex items-center gap-1 text-[#10b981] transition hover:gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Blog
            </Link>
            <span>·</span>
            <span className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-[#10b981]">
              {post.category}
            </span>
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-zinc-400">
            {post.description}
          </p>
        </header>

        <div className="mt-6 border-t border-white/10 pt-8">
          {renderContent(post.content)}
        </div>

        <footer className="mt-12 border-t border-white/10 pt-8">
          <div className="rounded-[28px] border border-white/10 bg-[#121723] p-6">
            <p className="text-xs font-medium tracking-[0.24em] text-[#10b981] uppercase">
              Compare AI coding tools
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Not sure which AI coding assistant fits your workflow? Check our{" "}
              <Link href="/" className="text-[#10b981] underline decoration-[#10b981]/30 underline-offset-2 transition hover:decoration-[#10b981]">
                up-to-date comparison table
              </Link>{" "}
              with pricing, scenario recommendations, and honest trade-offs.
            </p>
          </div>
        </footer>
      </article>
    </SiteShell>
  );
}
