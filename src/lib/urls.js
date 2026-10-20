/** capsule-render 배너 URL. params의 키 순서를 유지하고 null/undefined 값은 생략한다. */
export function capsuleUrl(params) {
  const query = Object.entries(params)
    .filter(([, v]) => v !== null && v !== undefined)
    .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
    .join("&");
  return `https://capsule-render.vercel.app/api?${query}`;
}

/** shields.io static badge URL. label의 '-', '_' 는 shields 규칙대로 이중화한다. */
export function badgeUrl({ label, color, logo, logoColor = "white", style = "for-the-badge" }) {
  const text = encodeURIComponent(label.replace(/-/g, "--").replace(/_/g, "__"));
  const query = new URLSearchParams({ style, ...(logo && { logo }), logoColor });
  return `https://img.shields.io/badge/${text}-${color}?${query}`;
}
