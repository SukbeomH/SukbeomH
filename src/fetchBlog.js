import Parser from "rss-parser";

const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

const HTML_ENTITIES = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">",
  "&quot;": '"', "&#39;": "'", "&apos;": "'",
};

function decodeHtmlEntities(str) {
  return str.replace(/&(?:amp|lt|gt|quot|apos|#39);/g, (m) => HTML_ENTITIES[m] ?? m);
}

export async function fetchBlog(url, maxPosts = 10) {
  try {
    const feed = await parser.parseURL(url);
    const items = feed.items ?? [];
    return items.slice(0, maxPosts).map(({ title, link }) => ({
      title: decodeHtmlEntities(title ?? ""),
      link,
    }));
  } catch (err) {
    console.error("RSS fetch failed:", err.message);
    return [];
  }
}
