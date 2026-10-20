import { capsuleUrl } from "../lib/urls.js";

export default function header({ site, profile }) {
  const url = capsuleUrl({ ...site.banners.header, text: profile.username, desc: profile.role });
  return `![${profile.username}](${url})`;
}
