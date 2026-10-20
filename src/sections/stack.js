import { badgeUrl } from "../lib/urls.js";

export default function stack({ stack }) {
  const caps = (stack.capabilities ?? []).map((c) => `- **${c.title}** — ${c.text}`).join("\n");
  const groups = stack.groups.map((g) =>
    [`### ${g.title}`, g.badges.map((b) => `![${b.label}](${badgeUrl(b)})`).join("\n")].join("\n\n"),
  );
  return ["## 🛠 What I build", caps, ...groups].filter(Boolean).join("\n\n");
}
