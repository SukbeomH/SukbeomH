import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { parseArgs } from "node:util";

import { loadContent } from "./lib/load.js";
import { loadFeed } from "./lib/rss.js";
import { render } from "./render.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const README = join(ROOT, "README.md");

const { values: opts } = parseArgs({
  options: {
    "dry-run": { type: "boolean", default: false }, // stdout으로 출력만
    check: { type: "boolean", default: false }, // README가 최신이 아니면 exit 1
    "feed-file": { type: "string" }, // 네트워크 대신 로컬 RSS 파일
    "no-feed": { type: "boolean", default: false }, // 블로그 섹션 생략
  },
});

async function main() {
  const content = loadContent(ROOT);
  const posts = opts["no-feed"]
    ? []
    : await loadFeed({ url: content.site.blog.rss, file: opts["feed-file"] });

  const readme = render({ ...content, posts });

  if (opts["dry-run"]) return void process.stdout.write(readme);

  const current = existsSync(README) ? readFileSync(README, "utf8") : "";
  if (opts.check) {
    if (current !== readme) {
      console.error("README.md is out of date. Run `npm run build`.");
      process.exitCode = 1;
    } else console.log("README.md is up to date.");
    return;
  }

  if (current === readme) return void console.log("README.md unchanged.");
  writeFileSync(README, readme, "utf8");
  console.log(`README.md written (${Math.min(posts.length, content.site.blog.maxPosts)} posts).`);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
