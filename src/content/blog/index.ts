import type { BlogPost } from "@/types/blog";

/**
 * Re-export convenience functions that read from JSON content files
 * at build time via fs.readFileSync in content-reader.
 *
 * This module is a thin adapter: the actual data lives in content/blog/ JSON files.
 */
export { getBlogPostsByNewest, getBlogPost } from "@/data/content-reader";

/**
 * Returns all blog post slugs for static generation.
 * Synchronous — reads the existing import-time module data via JSON.
 */
import { readFileSync } from "fs";
import { join } from "path";

const INDEX_PATH = join(process.cwd(), "content", "blog", "index.json");

export const blogPosts: BlogPost[] = (() => {
  try {
    const raw = readFileSync(INDEX_PATH, "utf-8");
    const metaOnly: Omit<BlogPost, "content">[] = JSON.parse(raw);
    // Return blogPosts without content for lightweight in-memory access
    // (generateStaticParams only needs slugs anyway)
    return metaOnly.map((meta) => ({
      ...meta,
      content: "",
    }));
  } catch {
    return [];
  }
})();
