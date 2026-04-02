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
    repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
      totalCount
      nodes {
        stargazerCount
        primaryLanguage { name }
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges { size node { name color } }
        }
      }
    }
    contributionsCollection {
      totalCommitContributions
      restrictedContributionsCount
      totalPullRequestContributions
      totalIssueContributions
    }
    followers { totalCount }
    pullRequests { totalCount }
    issues { totalCount }
  }
}`;

async function queryGitHub(token, username) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: QUERY, variables: { username } }),
  });

  if (!res.ok) {
    throw new Error(`GitHub API returned ${res.status}: ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`GraphQL errors: ${json.errors.map((e) => e.message).join(", ")}`);
  }

  return json.data.user;
}

function extractStats(user) {
  const repos = user.repositories.nodes;
  const totalStars = repos.reduce((sum, r) => sum + r.stargazerCount, 0);
  const cc = user.contributionsCollection;

  return {
    totalStars,
    totalCommits: cc.totalCommitContributions + cc.restrictedContributionsCount,
    totalPRs: user.pullRequests.totalCount,
    totalIssues: user.issues.totalCount,
    totalRepos: user.repositories.totalCount,
    followers: user.followers.totalCount,
  };
}

function extractLanguages(user) {
  const langMap = {};
  for (const repo of user.repositories.nodes) {
    for (const edge of repo.languages.edges) {
      const name = edge.node.name;
      if (!langMap[name]) langMap[name] = { size: 0, color: edge.node.color || "#888" };
      langMap[name].size += edge.size;
    }
  }
  const sorted = Object.entries(langMap)
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, 8);
  const total = sorted.reduce((s, [, v]) => s + v.size, 0);
  return sorted.map(([name, { size, color }]) => ({
    name,
    color,
    percent: ((size / total) * 100).toFixed(1),
  }));
}

export async function fetchGitHub(username) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn("GITHUB_TOKEN not set, skipping GitHub data");
    return { pinnedRepos: [], stats: null, languages: null };
  }

  try {
    const user = await queryGitHub(token, username);

    const pinnedRepos = (user.pinnedItems?.nodes ?? []).map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      url: repo.url,
      stars: repo.stargazerCount,
    }));

    return {
      pinnedRepos,
      stats: extractStats(user),
      languages: extractLanguages(user),
    };
  } catch (err) {
    console.error("GitHub API failed:", err.message);
    return { pinnedRepos: [], stats: null, languages: null };
  }
}
