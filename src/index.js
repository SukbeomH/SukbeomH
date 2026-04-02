import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import ejs from "ejs";

import { fetchBlog } from "./fetchBlog.js";
import { fetchGitHub } from "./fetchGitHub.js";
import { generateCards } from "./generateCards.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function sanitizeMarkdownLink(text) {
  return text.replace(/[\[\]()]/g, (ch) => `\\${ch}`);
}

async function main() {
  const profile = JSON.parse(readFileSync(join(root, "profile.json"), "utf8"));
  const template = readFileSync(join(root, "templates", "README.md.ejs"), "utf8");

  const [blogPosts, github] = await Promise.all([
    fetchBlog(profile.rss.url, profile.rss.maxPosts),
    fetchGitHub(profile.username),
  ]);

  const cards = generateCards(root, profile.username, github.stats, github.languages);

  const data = {
    ...profile,
    blogPosts: blogPosts.map((p) => ({
      title: sanitizeMarkdownLink(p.title),
      link: p.link,
    })),
    pinnedRepos: github.pinnedRepos,
    cards,
    encodeURIComponent,
  };

  const readme = ejs.render(template, data);
  writeFileSync(join(root, "README.md"), readme, "utf8");

  console.log(`README.md updated: ${blogPosts.length} blog posts, ${github.pinnedRepos.length} pinned repos, cards: stats=${cards.hasStats} langs=${cards.hasLangs}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
