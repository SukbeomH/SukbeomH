import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import ejs from "ejs";

import { fetchBlog } from "./fetchBlog.js";
import { fetchGitHub } from "./fetchGitHub.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const profile = JSON.parse(readFileSync(join(root, "profile.json"), "utf8"));
const template = readFileSync(join(root, "templates", "README.md.ejs"), "utf8");

const [blogPosts, github] = await Promise.all([
  fetchBlog(profile.rss.url, profile.rss.maxPosts),
  fetchGitHub(profile.username),
]);

const data = {
  ...profile,
  blogPosts,
  pinnedRepos: github.pinnedRepos,
};

const readme = ejs.render(template, data);
writeFileSync(join(root, "README.md"), readme, "utf8");

console.log(`README.md updated: ${blogPosts.length} blog posts, ${github.pinnedRepos.length} pinned repos`);
