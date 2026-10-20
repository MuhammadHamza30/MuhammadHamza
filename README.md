# Muhammad Hamza — modern React portfolio

A responsive portfolio updated from the supplied CV. Built with React 19, Vite, and react-icons. Includes a downloadable copy of the supplied CV, selected project work, an AI-assisted workflow explorer, experience, skills, contact links, and social integrations.

## Run locally (Windows, macOS, Linux)

Requires Node.js 20.19 or later (22.12+ or 24 also work). Netlify builds with Node 24.

```sh
npm ci
npm run dev
```

Use the localhost address printed by Vite. Do not open index.html by double-clicking.

```sh
npm run build
npm run preview
npm test
```

`dist/` is included and ready for static hosting. For Netlify, upload `dist/` or connect the repository (build: `npm run build`; publish: `dist`). `_redirects` retains support for the original `/About`, `/Projects`, `/Skills`, `/Contact` paths. The site redirects those visits to the corresponding section. Deploy at the domain root; subdirectory hosting needs a Vite base path and adjusted public URLs.

## Editing content

- `src/data/integrations.js`: `featured` and `excluded` arrays of exact repository names. Featured repositories appear first, then the selected sort is applied.
- `src/data/profile.js`: profile links, contact details, CV-based projects, experience, skills.
- `src/App.jsx`: page sections and the illustrative AI workflow explorer.
- `src/App.css`: responsive design and theme colors.
- `public/Muhammad-Hamza-CV.pdf`: download file. Replace this when your CV changes.
- `public/linkedin-posts.json`: LinkedIn embeds (see below).

No certifications were present in the uploaded CV, so none are claimed. Education includes the BS and FSc entries. Employment dates follow the uploaded CV, including the Qatar client role ending May 2026. The AI section describes assisted development, prompt/context work, and human review. It does not claim deployed autonomous agents, frameworks, certifications, or invented productivity metrics. Project visuals are labeled interface illustrations, not screenshots of client applications. Client application links may require login.

## Live GitHub projects

The portfolio loads public repositories directly from GitHub's official REST endpoint for `MuhammadHamza30`, including pagination. It excludes forks, archived, and private repositories. Visitors can search names/descriptions/topics, filter by language, sort by update/stars/name, and load more results. Repository homepages and source links open separately. Data is cached locally for 15 minutes; Refresh forces another request. If the network or API fails, cached data is shown when available, otherwise an honest error and direct GitHub link appear. Requests time out after 15 seconds.

No token is needed for public repositories. Anonymous requests share GitHub's public rate limits; busy sites may eventually benefit from a server-side cache. Never put GitHub tokens in Vite variables or browser code. GitHub must be reachable from the visitor's network. Live access was not verified from this build environment; request behavior is covered by mocked integration tests.

Documentation: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user

## LinkedIn posts: official embeds

LinkedIn does not provide a public, unauthenticated personal-profile posts feed. Its `r_member_social` read permission is restricted to approved applications. This static site therefore uses official individual-post embeds and a direct link to your own recent activity. No scraped or fabricated posts are included.

**Your individual post URLs were not included in the attachments or verifiable in search, so the initial section links to your activity feed.** To display real posts inside the portfolio:

1. Open one of your public LinkedIn posts.
2. Use the post menu → Embed this post (when available), or Copy link to post.
3. Copy the full `https://www.linkedin.com/posts/...-activity-123...` URL or the official embed's feed/update URL.
4. Add it to `public/linkedin-posts.json` as below, replacing the URL with your own. Repeat for up to six posts.
5. Run `npm run build` and deploy the new `dist` folder.

```json
{
  "posts": [
    {
      "title": "My project update",
      "url": "PASTE_YOUR_REAL_PUBLIC_LINKEDIN_POST_URL_HERE"
    }
  ]
}
```

Only valid LinkedIn post URLs are rendered. The site derives the iframe URL; it never injects supplied HTML. Each post has a direct link in case LinkedIn blocks embedding. Private/non-embeddable posts will not work. Tracking protection or a visitor's network can block third-party iframes. Existing embeds display LinkedIn's current content when loaded, but new posts are **not automatically discovered**. Use a properly approved server-side LinkedIn integration or a vetted feed service if you later need automatic discovery; credentials must remain on the server. No credentials were supplied or required for this build.

Documentation: https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api

## Other behavior

- Dark/light theme remembered on the current browser (works without storage).
- Accessible mobile navigation, keyboard focus, skip link, and reduced-motion support.
- AI workflow explorer is a labeled interactive process example, not a live AI chat or external model call.
- Contact form opens a draft in the visitor's email application; it does not send or store messages. A configured email app is required. Direct email and telephone links are also available.
- No API secrets, analytics, contact database, or fabricated testimonials.
- Google Fonts is optional; system fonts are used if blocked. LinkedIn frames only load when posts are configured.

## Verification

Production build and integration tests are run for this update. Tests cover GitHub pagination, filtering/sorting, caching, forced refresh, stale fallback, aborts, network failures, URL safety, and LinkedIn URL parsing. Browser visual verification was unavailable in the task environment; check desktop/mobile and social content after deploying. External project destinations have not been audited for current availability.

Social-preview metadata uses your existing Netlify domain from the CV. Change the two image URLs in `index.html` if you deploy under another domain. No environment file is needed: the site has no secrets or environment configuration.
