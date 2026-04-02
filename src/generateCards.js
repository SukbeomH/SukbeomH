import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function statsSvg(username, stats) {
  const rows = [
    ["⭐", "Total Stars", stats.totalStars],
    ["📝", "Total Commits", stats.totalCommits],
    ["🔀", "Total PRs", stats.totalPRs],
    ["❗", "Total Issues", stats.totalIssues],
    ["📦", "Total Repos", stats.totalRepos],
    ["👥", "Followers", stats.followers],
  ];

  const rowsMarkup = rows
    .map(
      ([icon, label, value], i) => `
    <g transform="translate(0, ${i * 28})">
      <text x="25" y="18" class="label">${icon} ${label}:</text>
      <text x="280" y="18" class="value">${value.toLocaleString()}</text>
    </g>`
    )
    .join("");

  return `<svg width="350" height="220" viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    .header { font: 600 16px 'Segoe UI', Ubuntu, sans-serif; fill: #2f80ed; }
    .label { font: 400 13px 'Segoe UI', Ubuntu, sans-serif; fill: #333; }
    .value { font: 600 13px 'Segoe UI', Ubuntu, sans-serif; fill: #333; text-anchor: end; }
  </style>
  <rect width="350" height="220" rx="6" fill="#fafafa" stroke="#e4e2e2" stroke-width="1"/>
  <g transform="translate(25, 30)">
    <text class="header">${username}'s GitHub Stats</text>
    <g transform="translate(0, 20)">${rowsMarkup}
    </g>
  </g>
</svg>`;
}

function langsSvg(languages) {
  let barOffset = 0;
  const barSegments = languages
    .map((lang) => {
      const width = Math.max(parseFloat(lang.percent), 0.5);
      const segment = `<rect x="${barOffset}%" width="${width}%" height="8" rx="1" fill="${lang.color}"/>`;
      barOffset += width;
      return segment;
    })
    .join("\n      ");

  const legendItems = languages
    .map(
      (lang, i) => `
    <g transform="translate(${(i % 2) * 150}, ${Math.floor(i / 2) * 22})">
      <circle cx="6" cy="6" r="5" fill="${lang.color}"/>
      <text x="16" y="10" class="lang">${lang.name} ${lang.percent}%</text>
    </g>`
    )
    .join("");

  const legendHeight = Math.ceil(languages.length / 2) * 22 + 10;

  return `<svg width="350" height="${80 + legendHeight}" viewBox="0 0 350 ${80 + legendHeight}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .header { font: 600 16px 'Segoe UI', Ubuntu, sans-serif; fill: #2f80ed; }
    .lang { font: 400 12px 'Segoe UI', Ubuntu, sans-serif; fill: #333; }
  </style>
  <rect width="350" height="${80 + legendHeight}" rx="6" fill="#fafafa" stroke="#e4e2e2" stroke-width="1"/>
  <g transform="translate(25, 30)">
    <text class="header">Most Used Languages</text>
    <svg x="0" y="18" width="300" height="8">
      ${barSegments}
    </svg>
    <g transform="translate(0, 38)">
      ${legendItems}
    </g>
  </g>
</svg>`;
}

export function generateCards(root, username, stats, languages) {
  const assetsDir = join(root, "assets");
  mkdirSync(assetsDir, { recursive: true });

  if (stats) {
    writeFileSync(join(assetsDir, "stats.svg"), statsSvg(username, stats), "utf8");
    console.log("Generated assets/stats.svg");
  }

  if (languages && languages.length > 0) {
    writeFileSync(join(assetsDir, "top-langs.svg"), langsSvg(languages), "utf8");
    console.log("Generated assets/top-langs.svg");
  }

  return { hasStats: !!stats, hasLangs: !!(languages && languages.length > 0) };
}
