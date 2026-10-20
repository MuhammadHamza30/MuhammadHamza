import test, { beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import {
  fetchRepositories,
  filterRepositories,
  safeURL,
  linkedinEmbed,
} from "../src/lib/integrations.js";
const realFetch = globalThis.fetch;
const user = "MuhammadHamza30";
const makeRepo = (id, extra = {}) => ({
  id,
  name: `repo-${id}`,
  owner: { login: user },
  html_url: `https://github.com/${user}/repo-${id}`,
  updated_at: "2026-10-01T12:00:00Z",
  stargazers_count: id,
  forks_count: 0,
  language: "JavaScript",
  ...extra,
});
let storage;
beforeEach(() => {
  storage = new Map();
  globalThis.localStorage = {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  };
});
afterEach(() => {
  globalThis.fetch = realFetch;
});
test("only HTTP(S) external URLs are accepted", () => {
  assert.equal(safeURL("javascript:alert(1)"), null);
  assert.equal(safeURL("data:text/html,test"), null);
  assert.equal(safeURL("not a url"), null);
  assert.equal(safeURL("https://example.com"), "https://example.com/");
});
test("LinkedIn embeds accept official post formats and reject lookalike hosts", () => {
  assert.equal(
    linkedinEmbed(
      "https://www.linkedin.com/posts/muhammadhamza30_build-activity-7377701578222411777-abc",
    ),
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7377701578222411777",
  );
  assert.equal(
    linkedinEmbed(
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7377701578222411777/",
    ),
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7377701578222411777",
  );
  assert.equal(
    linkedinEmbed(
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7377701578222411777",
    ),
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7377701578222411777",
  );
  assert.equal(
    linkedinEmbed(
      "https://www.linkedin.com.evil.com/posts/activity-7377701578222411777",
    ),
    null,
  );
  assert.equal(
    linkedinEmbed("https://www.linkedin.com/in/muhammadhamza30"),
    null,
  );
});
test("repository search, language filters, sort, exclusion, and featured ordering work", () => {
  const data = [
    makeRepo(1, { name: "alpha", description: "A React UI" }),
    makeRepo(2, { name: "beta", language: "TypeScript" }),
    makeRepo(3, { name: "gamma", topics: ["react"] }),
  ];
  assert.equal(filterRepositories(data, { query: "react" }).length, 2);
  assert.equal(
    filterRepositories(data, { language: "TypeScript" })[0].name,
    "beta",
  );
  assert.equal(filterRepositories(data, { sort: "stars" })[0].name, "gamma");
  assert.equal(filterRepositories(data, { sort: "name" })[0].name, "alpha");
  assert.equal(
    filterRepositories(data, {
      excluded: ["gamma"],
      featured: ["alpha"],
      sort: "stars",
    })[0].name,
    "alpha",
  );
  assert.equal(filterRepositories(data, { query: "missing" }).length, 0);
  assert.deepEqual(
    data.map((x) => x.name),
    ["alpha", "beta", "gamma"],
  );
});
test("GitHub paginates and filters forks, archived, private and unrelated repos", async () => {
  let calls = 0;
  globalThis.fetch = async (url) => {
    calls++;
    assert.match(url, new RegExp(`page=${calls}$`));
    return new Response(
      JSON.stringify(
        calls === 1
          ? Array.from({ length: 100 }, (_, i) => makeRepo(i + 1))
          : [
              makeRepo(101),
              makeRepo(102, { fork: true }),
              makeRepo(103, { archived: true }),
              makeRepo(104, { private: true }),
              makeRepo(105, { owner: { login: "other" } }),
            ],
      ),
    );
  };
  const result = await fetchRepositories(user);
  assert.equal(calls, 2);
  assert.equal(result.repos.length, 101);
  assert.equal(result.cached, false);
});
test("fresh cache avoids requests and refresh bypasses the cache", async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return new Response(JSON.stringify([makeRepo(calls)]));
  };
  await fetchRepositories(user);
  assert.equal((await fetchRepositories(user)).cached, true);
  assert.equal(calls, 1);
  const result = await fetchRepositories(user, { refresh: true });
  assert.equal(calls, 2);
  assert.equal(result.repos[0].id, 2);
});
test("rate limits have a specific error state without cached data", async () => {
  globalThis.fetch = async () =>
    new Response("{}", {
      status: 403,
      headers: { "x-ratelimit-remaining": "0" },
    });
  await assert.rejects(
    fetchRepositories(user),
    (error) => error.code === "RATE_LIMIT",
  );
});
test("saved data remains available when a forced refresh hits a rate limit", async () => {
  globalThis.fetch = async () => new Response(JSON.stringify([makeRepo(1)]));
  await fetchRepositories(user);
  globalThis.fetch = async () => new Response("{}", { status: 429 });
  const result = await fetchRepositories(user, { refresh: true });
  assert.equal(result.cached, true);
  assert.equal(result.repos.length, 1);
  assert.match(result.warning, /limit/);
});
test("network failures without cache reject, successful empty responses remain empty", async () => {
  globalThis.fetch = async () => {
    throw new TypeError("Network unavailable");
  };
  await assert.rejects(fetchRepositories(user));
  globalThis.fetch = async () => new Response("[]");
  assert.deepEqual((await fetchRepositories(user)).repos, []);
});
test("abort signals are propagated and do not trigger a stale fallback", async () => {
  const controller = new AbortController();
  controller.abort();
  globalThis.fetch = async (_url, { signal }) => {
    signal.throwIfAborted();
  };
  await assert.rejects(fetchRepositories(user, { signal: controller.signal }), {
    name: "AbortError",
  });
});
test("blocked browser storage does not prevent loading", async () => {
  globalThis.localStorage = {
    getItem() {
      throw new Error("blocked");
    },
    setItem() {
      throw new Error("blocked");
    },
  };
  globalThis.fetch = async () => new Response(JSON.stringify([makeRepo(1)]));
  assert.equal((await fetchRepositories(user)).repos.length, 1);
});
