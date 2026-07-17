/**
 * Extraction script: reads blogPosts from src/content/blog/index.ts
 * and writes them to content/blog/ JSON directory.
 *
 * Usage: npx tsx scripts/extract-blog-content.ts
 */
import type { BlogPost } from "../src/types/blog";
import { blogPosts } from "../src/content/blog/index";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..");
const CONTENT_DIR = join(ROOT, "content", "blog");

function main() {
  // Ensure directories exist
  const articlesDir = join(CONTENT_DIR, "articles");
  if (!existsSync(articlesDir)) {
    mkdirSync(articlesDir, { recursive: true });
  }

  // Write each article JSON
  for (const post of blogPosts) {
    const articlePath = join(articlesDir, `${post.slug}.json`);
    writeFileSync(articlePath, JSON.stringify(post, null, 2), "utf-8");
    console.log(`✓ Written: articles/${post.slug}.json`);
  }

  // Write index JSON (without full content for lightweight listing)
  const indexData = blogPosts.map(({ content, ...meta }) => meta);
  const indexPath = join(CONTENT_DIR, "index.json");
  writeFileSync(indexPath, JSON.stringify(indexData, null, 2), "utf-8");
  console.log(`✓ Written: index.json (${indexData.length} posts)`);
}

main();
