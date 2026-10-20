import { test } from "node:test";
import assert from "node:assert/strict";
import { decodeEntities, escapeLinkText } from "../src/lib/escape.js";
import { capsuleUrl, badgeUrl } from "../src/lib/urls.js";

test("decodeEntities: named + numeric", () => {
  assert.equal(decodeEntities("&lt;a&gt; &amp; &#39;x&#39; &#x2014; &unknown;"), "<a> & 'x' — &unknown;");
});

test("escapeLinkText: 대괄호·역슬래시·꺾쇠", () => {
  assert.equal(escapeLinkText("[K8s] a\\b <c>"), "\\[K8s\\] a\\\\b &lt;c&gt;");
});

test("capsuleUrl: 키 순서 유지, null 생략, 값 인코딩", () => {
  assert.equal(
    capsuleUrl({ type: "rounded", text: "A B", desc: null, height: 100 }),
    "https://capsule-render.vercel.app/api?type=rounded&text=A%20B&height=100",
  );
});

test("badgeUrl: shields 구분자 이스케이프", () => {
  assert.equal(
    badgeUrl({ label: "Node-RED_x", color: "8F0000", logo: "nodered" }),
    "https://img.shields.io/badge/Node--RED__x-8F0000?style=for-the-badge&logo=nodered&logoColor=white",
  );
});
