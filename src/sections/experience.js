function role(r) {
  const head = `### ${r.org} · ${r.title}${r.current ? " — **Now**" : ""}\n<sub>${r.period}${r.team ? ` · ${r.team}` : ""}</sub>`;
  const work = (r.work ?? []).map((w) => [`**${w.name}**`, ...w.highlights.map((h) => `- ${h}`)].join("\n"));
  return [head, ...work].join("\n\n");
}

export default function experience({ experience }) {
  const history = experience.history.map((h) => `- **${h.period}** · ${h.text}`).join("\n");
  return [
    "## 💼 Experience",
    ...experience.roles.map(role),
    `<details>\n<summary><b>📖 History</b></summary>\n\n${history}\n\n</details>`,
  ].join("\n\n");
}
