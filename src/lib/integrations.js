export function safeURL(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}
export function linkedinEmbed(value) {
  const safe = safeURL(value);
  if (!safe) return null;
  const url = new URL(safe);
  if (!["linkedin.com", "www.linkedin.com"].includes(url.hostname)) return null;
  const match = url.pathname.match(
    /(?:urn:li:(share|ugcPost|activity):|activity-)(\d{15,25})/,
  );
  if (!match) return null;
  return `https://www.linkedin.com/embed/feed/update/urn:li:${match[1] || "share"}:${match[2]}`;
}
export function filterRepositories(
  repos,
  {
    query = "",
    language = "All",
    sort = "updated",
    excluded = [],
    featured = [],
  } = {},
) {
  const search = query.trim().toLowerCase();
  return repos
    .filter(
      (r) =>
        !excluded.includes(r.name) &&
        (language === "All" || r.language === language) &&
        `${r.name} ${r.description || ""} ${(r.topics || []).join(" ")}`
          .toLowerCase()
          .includes(search),
    )
    .sort(
      (a, b) =>
        Number(featured.includes(b.name)) - Number(featured.includes(a.name)) ||
        (sort === "stars"
          ? b.stargazers_count - a.stargazers_count
          : sort === "name"
            ? a.name.localeCompare(b.name)
            : new Date(b.updated_at) - new Date(a.updated_at)),
    );
}
function validRepos(repos, user) {
  if (!Array.isArray(repos)) return [];
  return repos.filter(
    (r) =>
      !r.fork &&
      !r.archived &&
      !r.private &&
      typeof r.name === "string" &&
      Number.isInteger(r.id) &&
      r.owner?.login?.toLowerCase() === user.toLowerCase() &&
      safeURL(r.html_url)?.startsWith(`https://github.com/${user}/`) &&
      !Number.isNaN(Date.parse(r.updated_at)),
  );
}
export async function fetchRepositories(
  user,
  { signal, refresh = false } = {},
) {
  const cacheKey = `portfolio-github-${user}-v1`;
  let cache;
  try {
    cache = JSON.parse(localStorage.getItem(cacheKey));
  } catch {
    /* Storage may be unavailable. */
  }
  if (
    !refresh &&
    cache?.timestamp > Date.now() - 15 * 60 * 1000 &&
    Array.isArray(cache.repos)
  )
    return { repos: validRepos(cache.repos, user), cached: true };
  const timeout = AbortSignal.timeout(15000);
  const requestSignal = signal ? AbortSignal.any([signal, timeout]) : timeout;
  try {
    let repos = [];
    // Fetch all pages, rather than silently dropping repositories after the first 100.
    for (let page = 1; ; page++) {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&direction=desc&per_page=100&page=${page}`,
        {
          signal: requestSignal,
          headers: { Accept: "application/vnd.github+json" },
        },
      );
      if (!response.ok) {
        const rateLimited =
          response.status === 429 ||
          (response.status === 403 &&
            response.headers.get("x-ratelimit-remaining") === "0");
        const error = new Error(
          rateLimited
            ? "GitHub’s public API limit has been reached. Try again later or browse my projects directly on GitHub."
            : "GitHub is unavailable right now. Please try again or browse my repositories directly.",
        );
        error.code = rateLimited ? "RATE_LIMIT" : "API_ERROR";
        throw error;
      }
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Unexpected GitHub response");
      repos.push(...validRepos(data, user));
      if (data.length < 100) break;
    }
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ repos, timestamp: Date.now() }),
      );
    } catch {
      /* Rendering works without storage. */
    }
    return { repos, cached: false };
  } catch (error) {
    if (signal?.aborted) throw error;
    if (cache?.repos?.length)
      return {
        repos: validRepos(cache.repos, user),
        cached: true,
        warning: `Showing saved repositories. ${error.code === "RATE_LIMIT" ? error.message : "GitHub could not be refreshed right now."}`,
      };
    throw error;
  }
}
