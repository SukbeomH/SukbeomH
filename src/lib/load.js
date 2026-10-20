import { readFileSync } from "node:fs";
import { join } from "node:path";

const FILES = {
  site: "config/site.json",
  profile: "content/profile.json",
  stack: "content/stack.json",
  experience: "content/experience.json",
  projects: "content/projects.json",
};

const REQUIRED = {
  site: ["sections", "banners", "blog"],
  profile: ["name", "username", "role", "intro", "contact"],
  stack: ["groups"],
  experience: ["roles", "history"],
  projects: ["featured", "private"],
};

/** config/ 와 content/ 의 JSON을 읽고 필수 키를 검증한다. 문제는 한 번에 모아서 보고한다. */
export function loadContent(root) {
  const out = {};
  const errors = [];
  for (const [key, rel] of Object.entries(FILES)) {
    try {
      out[key] = JSON.parse(readFileSync(join(root, rel), "utf8"));
    } catch (err) {
      errors.push(`${rel}: ${err.message}`);
      continue;
    }
    const missing = REQUIRED[key].filter((k) => out[key][k] === undefined);
    if (missing.length) errors.push(`${rel}: missing ${missing.join(", ")}`);
  }
  if (errors.length) throw new Error(`Invalid content:\n  - ${errors.join("\n  - ")}`);
  return out;
}
