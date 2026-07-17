import { readFileSync } from "fs";
import { join } from "path";
import type { BlogPost } from "@/types/blog";

const CONTENT_BLOG_DIR = join(process.cwd(), "content", "blog");
const ARTICLES_DIR = join(CONTENT_BLOG_DIR, "articles");

/**
 * Reads all blog post metadata from the JSON index file.
 * This is a lightweight operation (no full article content).
 */
function readIndexSync(): Omit<BlogPost, "content">[] {
  const indexPath = join(CONTENT_BLOG_DIR, "index.json");
  const raw = readFileSync(indexPath, "utf-8");
  return JSON.parse(raw);
}

/**
 * Reads a single blog post by slug (includes full content).
 */
function readArticleSync(slug: string): BlogPost {
  const articlePath = join(ARTICLES_DIR, `${slug}.json`);
  const raw = readFileSync(articlePath, "utf-8");
  return JSON.parse(raw);
}

/**
 * Returns all blog posts sorted by newest first (lightweight, no content).
 */
export function getBlogPostsByNewest(): Omit<BlogPost, "content">[] {
  const posts = readIndexSync();
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Returns a single blog post with full content.
 */
export function getBlogPost(slug: string): BlogPost | undefined {
  try {
    return readArticleSync(slug);
  } catch {
    return undefined;
  }
}
