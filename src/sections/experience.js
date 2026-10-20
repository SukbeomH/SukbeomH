const role = (r) => `- **${r.period}** · ${r.org} · ${r.title}${r.team ? ` (${r.team})` : ""}`;

export default function experience({ experience, profile }) {
  const history = experience.history.map((h) => `- **${h.period}** · ${h.text}`).join("\n");
  const more = profile.contact.linkedin ? `<sub>상세 경력은 [LinkedIn](${profile.contact.linkedin})</sub>` : null;
  return [
    "## 💼 Career",
    experience.roles.map(role).join("\n"),
    `<details>\n<summary><b>📖 History</b></summary>\n\n${history}\n\n</details>`,
    more,
  ]
    .filter(Boolean)
    .join("\n\n");
}
