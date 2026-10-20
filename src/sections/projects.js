function featured(p) {
  const tags = p.tags?.length ? ` <sub>${p.tags.map((t) => `\`${t}\``).join(" ")}</sub>` : "";
  const fork = p.upstream ? ` <sub>fork of [${p.upstream}](https://github.com/${p.upstream})</sub>` : "";
  return `- [**${p.name}**](${p.url})${fork} — ${p.summary}${tags}`;
}

const heading = (area, lead) => `### ${area}${lead ? ` — ${lead}` : ""}`;

export default function projects({ projects }) {
  const groups = projects.featured.map((g) => [heading(g.area, g.lead), g.items.map(featured).join("\n")].join("\n\n"));
  const priv = projects.private.length
    ? [heading("🔒 Private work", "이름 없이 분야만"), projects.private.map((p) => `- **${p.area}** — ${p.summary}`).join("\n")].join("\n\n")
    : null;
  const interests = projects.interests?.length ? `📌 **Interests** · ${projects.interests.join(" · ")}` : null;
  return ["## 🧪 Projects & Interests", ...groups, priv, interests].filter(Boolean).join("\n\n");
}
