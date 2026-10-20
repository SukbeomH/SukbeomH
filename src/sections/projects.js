function featured(p) {
  const tags = p.tags?.length ? ` <sub>${p.tags.map((t) => `\`${t}\``).join(" ")}</sub>` : "";
  const fork = p.upstream ? ` <sub>fork of [${p.upstream}](https://github.com/${p.upstream})</sub>` : "";
  return `- [**${p.name}**](${p.url})${fork} — ${p.summary}${tags}`;
}

export default function projects({ projects }) {
  const groups = projects.featured.map((g) => [`### ${g.area}`, g.items.map(featured).join("\n")].join("\n\n"));
  const priv = projects.private.length
    ? [
        "### 🔒 Private work\n\n<sub>비공개 저장소는 이름 없이 분야별로 요약합니다.</sub>\n",
        projects.private.map((p) => `- **${p.area}** — ${p.summary}`).join("\n"),
      ].join("\n")
    : null;
  return ["## 🧪 Side Projects", ...groups, priv].filter(Boolean).join("\n\n");
}
