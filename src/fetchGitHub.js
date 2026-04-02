const QUERY = `
query($username: String!) {
  user(login: $username) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
        }
      }
    }
  }
}`;

export async function fetchGitHub(username) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn("GITHUB_TOKEN not set, skipping pinned repos");
    return { pinnedRepos: [] };
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
    });

    if (!res.ok) {
      console.error(`GitHub API returned ${res.status}: ${res.statusText}`);
      return { pinnedRepos: [] };
    }

    const json = await res.json();
    if (json.errors) {
      console.error("GitHub GraphQL errors:", json.errors.map((e) => e.message).join(", "));
      return { pinnedRepos: [] };
    }

    const pinnedRepos = (json.data?.user?.pinnedItems?.nodes ?? []).map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      url: repo.url,
      stars: repo.stargazerCount,
    }));

    return { pinnedRepos };
  } catch (err) {
    console.error("GitHub API failed:", err.message);
    return { pinnedRepos: [] };
  }
}
