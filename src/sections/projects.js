function featured(p) {
  const tags = p.tags?.length ? ` <sub>${p.tags.map((t) => `\`${t}\``).join(" ")}</sub>` : "";
  return `- [**${p.name}**](${p.url}) — ${p.summary}${tags}`;
}

export default function projects({ projects }) {
  const groups = projects.featured.map((g) => [`### ${g.area}`, g.items.map(featured).join("\n")].join("\n\n"));
  const priv = projects.private.length
    ? [
        "<details>\n<summary><b>🔒 Private work (요약)</b></summary>\n",
        projects.private.map((p) => `- **${p.area}** — ${p.summary}`).join("\n"),
        "\n</details>",
      ].join("\n")
    : null;
  return ["## 🧪 Side Projects", ...groups, priv].filter(Boolean).join("\n\n");
}
