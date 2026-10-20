import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseRss, isoDate } from "../src/lib/rss.js";

const xml = readFileSync(new URL("./fixtures/feed.xml", import.meta.url), "utf8");

test("parseRss: 이중 인코딩·CDATA를 풀고 링크 없는 항목은 버린다", () => {
  const items = parseRss(xml);
  assert.deepEqual(items, [
    { title: `[EKS] status.Phase: Invalid value: "Active": may only be 'Terminating'`, link: "https://example.tistory.com/3", date: "2025-05-07" },
    { title: "CDATA <제목> & 기호", link: "https://example.tistory.com/2", date: "2025-04-22" },
    { title: "날짜 없는 글", link: "https://example.tistory.com/1", date: null },
  ]);
});

test("isoDate: 피드 시간대 기준 날짜를 유지한다", () => {
  assert.equal(isoDate("Wed, 7 May 2025 00:30:00 +0900"), "2025-05-07");
  assert.equal(isoDate("Tue, 06 May 2025 23:30:00 -0500"), "2025-05-06");
  assert.equal(isoDate("garbage"), null);
});
