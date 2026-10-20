import { SECTIONS } from "./sections/index.js";

export const BANNER =
  "<!-- 자동 생성 파일입니다. 직접 수정하지 말고 content/ 를 고친 뒤 `npm run build` 하세요. -->";

/** site.sections 순서대로 섹션을 렌더링해 하나의 README 문자열로 합친다. */
export function render(ctx) {
  const unknown = ctx.site.sections.filter((s) => s !== "---" && !SECTIONS[s]);
  if (unknown.length) throw new Error(`Unknown section(s): ${unknown.join(", ")}`);

  const parts = ctx.site.sections
    .map((s) => (s === "---" ? "---" : SECTIONS[s](ctx).trim()))
    .filter(Boolean)
    // 연속/선두/말미 구분선 제거 (빈 섹션 때문에 생기는 경우)
    .filter((p, i, arr) => !(p === "---" && (i === 0 || i === arr.length - 1 || arr[i - 1] === "---")));

  return `${BANNER}\n\n${parts.join("\n\n")}\n`;
}
