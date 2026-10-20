import { escapeLinkText } from "../lib/escape.js";

export default function blog({ site, posts }) {
  if (!posts.length) return "";
  const list = posts
    .slice(0, site.blog.maxPosts)
    .map((p) => `- [${escapeLinkText(p.title)}](${p.link})${p.date ? ` <sub>${p.date}</sub>` : ""}`)
    .join("\n");
  return `## 📝 Recent Posts\n\n${list}\n\n<sub>[더 보기 →](${site.blog.home})</sub>`;
}
