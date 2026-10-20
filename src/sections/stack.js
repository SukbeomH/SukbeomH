import { badgeUrl } from "../lib/urls.js";

export default function stack({ stack }) {
  return stack.groups
    .map((g) => [`### ${g.title}`, g.badges.map((b) => `![${b.label}](${badgeUrl(b)})`).join("\n")].join("\n\n"))
    .join("\n\n");
}
