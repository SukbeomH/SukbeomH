import Parser from "rss-parser";

const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

export async function fetchBlog(url, maxPosts = 10) {
  try {
    const feed = await parser.parseURL(url);
    const items = feed.items ?? [];
    return items.slice(0, maxPosts).map(({ title, link }) => ({ title, link }));
  } catch (err) {
    console.error("RSS fetch failed:", err.message);
    return [];
  }
}
