import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { loadContent } from "../src/lib/load.js";
import { render, BANNER } from "../src/render.js";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const posts = [{ title: "[t] <x>", link: "https://example.com/1", date: "2026-01-01" }];

test("실제 content/ 로 렌더링: 모든 섹션이 나오고 구분선이 겹치지 않는다", () => {
  const md = render({ ...loadContent(ROOT), posts });
  assert.ok(md.startsWith(BANNER));
  for (const h of ["## 💼 Experience", "## 🧪 Side Projects", "## 📝 Recent Posts"]) assert.ok(md.includes(h), h);
  assert.ok(md.includes("[\\[t\\] &lt;x&gt;](https://example.com/1)"));
  assert.ok(!/---\n\n---/.test(md));
  assert.ok(md.endsWith("\n") && !md.endsWith("\n\n"));
});

test("글이 없으면 블로그 섹션과 그 앞 구분선이 사라진다", () => {
  const md = render({ ...loadContent(ROOT), posts: [] });
  assert.ok(!md.includes("Recent Posts"));
  assert.ok(!md.trimEnd().endsWith("---"));
});

test("알 수 없는 섹션은 에러", () => {
  const c = loadContent(ROOT);
  assert.throws(() => render({ ...c, site: { ...c.site, sections: ["nope"] }, posts }), /Unknown section/);
});
