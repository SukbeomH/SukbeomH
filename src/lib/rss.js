import { readFile } from "node:fs/promises";
import { decodeEntities } from "./escape.js";

function unwrap(raw) {
  const cdata = raw.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  if (cdata) return cdata[1].trim();
  // Tistory는 제목을 이중 인코딩한다(&amp;quot;). 엔티티가 남아 있으면 한 번 더 푼다.
  let text = decodeEntities(raw.trim());
  if (/&(#x?[0-9a-f]+|[a-z]+);/i.test(text)) text = decodeEntities(text);
  return text;
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  return m ? unwrap(m[1]) : "";
}

/** pubDate를 피드에 적힌 시간대 기준 YYYY-MM-DD 로 바꾼다 (UTC 변환으로 날짜가 밀리지 않도록). */
export function isoDate(value) {
  const t = Date.parse(value);
  if (Number.isNaN(t)) return null;
  const tz = value.trim().match(/([+-])(\d{2}):?(\d{2})$/);
  const offsetMin = tz ? (tz[1] === "-" ? -1 : 1) * (Number(tz[2]) * 60 + Number(tz[3])) : 0;
  return new Date(t + offsetMin * 60_000).toISOString().slice(0, 10);
}

/** RSS 2.0 <item> 목록을 { title, link, date } 로 파싱한다. 의존성 없는 최소 파서. */
export function parseRss(xml) {
  const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map((m) => m[1]);
  return items
    .map((block) => ({
      title: tag(block, "title"),
      link: tag(block, "link"),
      date: isoDate(tag(block, "pubDate")),
    }))
    .filter((it) => it.title && /^https?:\/\//.test(it.link));
}

/** 피드를 가져온다. 실패 시 예외를 던진다 (README를 빈 목록으로 덮어쓰지 않기 위해). */
export async function loadFeed({ url, file, timeoutMs = 15000 }) {
  if (file) return parseRss(await readFile(file, "utf8"));
  const res = await fetch(url, {
    headers: { Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.1" },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`RSS ${url} -> HTTP ${res.status}`);
  const items = parseRss(await res.text());
  if (items.length === 0) throw new Error(`RSS ${url} -> no items parsed`);
  return items;
}
