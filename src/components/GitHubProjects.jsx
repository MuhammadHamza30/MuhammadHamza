import { useEffect, useState } from "react";
import {
  FiGithub,
  FiRefreshCw,
  FiSearch,
  FiCode,
  FiArrowUpRight,
  FiStar,
  FiGitBranch,
  FiChevronDown,
} from "react-icons/fi";
import { profile } from "../data/profile";
import { githubSettings } from "../data/integrations";
import {
  fetchRepositories,
  filterRepositories,
  safeURL,
} from "../lib/integrations";
import { External } from "./Shared";
export default function GitHubProjects() {
  const [repos, setRepos] = useState([]),
    [status, setStatus] = useState("loading"),
    [error, setError] = useState(""),
    [query, setQuery] = useState(""),
    [language, setLanguage] = useState("All"),
    [sort, setSort] = useState("updated"),
    [visible, setVisible] = useState(6),
    [reload, setReload] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetchRepositories(profile.github, {
      signal: controller.signal,
      refresh: reload > 0,
    })
      .then((result) => {
        setRepos(result.repos);
        setStatus(result.cached ? "cached" : "live");
        setError(result.warning || "");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(
            err.message ||
              "GitHub could not be reached. Browse my repositories directly on GitHub.",
          );
          setStatus("error");
        }
      });
    return () => controller.abort();
  }, [reload]);
  const filtered = filterRepositories(repos, {
    query,
    language,
    sort,
    ...githubSettings,
  });
  const languages = [
    ...new Set(repos.map((r) => r.language).filter(Boolean)),
  ].sort();
  return (
    <div className="github-section" id="github">
      <div className="subheading">
        <div>
          <FiGithub />
          <h3>From my GitHub</h3>
          <span className="live-label">
            <i />
            {status === "live"
              ? "Live public repositories"
              : status === "cached"
                ? "Saved repositories"
                : status === "loading"
                  ? "Connecting…"
                  : "Public repositories"}
          </span>
        </div>
        <button
          className="icon-button"
          aria-label="Refresh GitHub projects"
          disabled={status === "loading"}
          onClick={() => {
            setStatus("loading");
            setError("");
            setReload((v) => v + 1);
          }}
        >
          <FiRefreshCw className={status === "loading" ? "spin" : ""} />
        </button>
      </div>
      <p className="integration-note">
        Automatically loaded from GitHub · selected repositories appear first.
      </p>
      <div className="repo-toolbar">
        <label className="search">
          <FiSearch />
          <input
            placeholder="Search repositories…"
            aria-label="Search repositories"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(6);
            }}
          />
        </label>
        <select
          aria-label="Filter by language"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setVisible(6);
          }}
        >
          <option value="All">All languages</option>
          {languages.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
        <select
          aria-label="Sort repositories"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="updated">Recently updated</option>
          <option value="stars">Most stars</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
      {error && (
        <p className="notice" role="status">
          {error}
        </p>
      )}
      {status === "loading" && !repos.length ? (
        <div className="repo-grid" aria-label="Loading repositories">
          {[1, 2, 3].map((i) => (
            <div className="repo-card skeleton" key={i}>
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="result-count" aria-live="polite">
            {filtered.length} repositories{query ? ` matching “${query}”` : ""}
          </p>
          <div className="repo-grid">
            {filtered.slice(0, visible).map((repo) => (
              <article className="repo-card" key={repo.id}>
                <div className="repo-title">
                  <FiCode />
                  <External href={repo.html_url}>
                    <h4>{repo.name.replaceAll("_", " ")}</h4>
                    <FiArrowUpRight />
                  </External>
                </div>
                {githubSettings.featured.includes(repo.name) && (
                  <span className="featured-repo">Featured repository</span>
                )}
                <p>
                  {repo.description ||
                    "Explore the source code, implementation, and project details on GitHub."}
                </p>
                <div className="repo-meta">
                  <span>
                    <i />
                    {repo.language || "Source code"}
                  </span>
                  <span>
                    <FiStar />
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <FiGitBranch />
                    {repo.forks_count}
                  </span>
                </div>
                <div className="repo-bottom">
                  <small>
                    Updated{" "}
                    {new Date(repo.updated_at).toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                    })}
                  </small>
                  {safeURL(repo.homepage) && (
                    <External href={safeURL(repo.homepage)}>
                      Live site <FiArrowUpRight />
                    </External>
                  )}
                </div>
              </article>
            ))}
          </div>
          {!filtered.length && status !== "error" && (
            <div className="empty-state">
              No repositories match these filters. Try another search or
              language.
            </div>
          )}
          {visible < filtered.length && (
            <button
              className="button secondary load-more"
              onClick={() => setVisible((v) => v + 6)}
            >
              Show more repositories <FiChevronDown />
            </button>
          )}
        </>
      )}
      <External
        className="text-link github-all"
        href={`https://github.com/${profile.github}?tab=repositories`}
      >
        Explore all repositories on GitHub <FiArrowUpRight />
      </External>
    </div>
  );
}
