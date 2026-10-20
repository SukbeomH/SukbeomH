const NAMED = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

/** XML/HTML 엔티티를 한 단계 디코드한다 (named + 10/16진 numeric). */
export function decodeEntities(str) {
  return str.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, body) => {
    if (body[0] === "#") {
      const code = body[1] === "x" || body[1] === "X" ? parseInt(body.slice(2), 16) : parseInt(body.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return NAMED[body.toLowerCase()] ?? m;
  });
}

/** 마크다운 링크 텍스트에 안전하게 넣는다: 대괄호·역슬래시 이스케이프, 꺾쇠는 엔티티로. */
export function escapeLinkText(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/[[\]]/g, (ch) => `\\${ch}`)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
