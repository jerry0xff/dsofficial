# SEO content release

## Scope

Repository: `https://github.com/jerry0xff/dsofficial`. Production: Cloudflare Pages, `deshare.finance`; trading app: `app.deshare.finance` (unchanged).

Keep React + Vite and the existing homepage. The homepage adds buying-guide links; its initial HTML includes a short brand introduction and a crawlable guide link. The existing React marketing homepage is still client-rendered, not fully prerendered.

`npm run build` compiles the application, then generates a Chinese guide hub and five complete static articles from `scripts/seo-content.mjs`. No runtime API, wallet, JavaScript or external font is needed for these articles. Static `404.html` prevents Cloudflare Pages' implicit SPA fallback from presenting nonexistent URLs as successful pages. The application currently only registers the `/` route.

Pages: `/guides/`, `/guides/buy-us-stocks/`, `/guides/buy-hk-stocks/`, `/guides/usdt-stock-trading/`, `/guides/tokenized-stocks-vs-broker/`, `/guides/fees-and-risks/`. Directory index files use trailing-slash canonicals, matching Cloudflare Pages HTML serving behavior.

Includes per-page titles, descriptions, Open Graph, Twitter summary, canonical links, Article/CollectionPage structured data, robots.txt and a sitemap with seven public canonical URLs. No fabricated review ratings, regulatory approvals, stock ownership rights or guaranteed returns. Fee examples are explicitly hypothetical, not hardcoded live tariffs. Official external sources are linked where used.

## Verification and deployment

Run `npm ci`, `npm run build`, `npm test`, `git diff --check`. Inspect the changed-file ESLint checks separately from the legacy repository lint baseline. Commit and push to production `main` only after checking the remote has not advanced; follow the Cloudflare Pages GitHub check and verify the production HTML, sitemap and actual missing-page status.

No Cloudflare security, DNS, geo-restriction, API or trading-contract configuration is changed. Mainland China and US restrictions remain required; Google crawling from restricted locations may remain limited. Do not exempt bots or bypass geographic rules for SEO.

Search volume and rankings have not been measured and cannot be guaranteed. After release, add `https://deshare.finance/sitemap.xml` to the verified Search Console property, check indexing and track qualified visits and app click-through. No Search Console credentials were provided, so submission is a separate account action. English/traditional-Chinese guide editions and their hreflang relationships can be added after editorial review; none are falsely declared in this release.

## Baseline observations (2026-11-15)

Full repository lint reports 70 errors and 3 warnings, all outside changed files. Targeted lint for the new scripts/tests and modified homepage passes. Dependency audit reports 21 pre-existing vulnerabilities (1 low, 5 moderate, 15 high); this content release does not upgrade dependencies. Vite also warns about the existing bundle size and outdated Browserslist data.

The live Cloudflare-managed robots response currently disallows Baiduspider and several AI crawlers. This release preserves those edge policies; Chinese content does not imply Baidu can index it. The sitemap in the origin robots file must be checked on production because Cloudflare prepends managed content and may cache the response.
