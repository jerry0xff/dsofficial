# Public content and restricted services

Updated 2026-11-15 after explicit approval to open public marketing content while retaining mainland China / US restrictions for trading, administration and APIs.

## Applied Cloudflare change

Zone `deshare.finance` (`7a9090394ef915de5c1a7efae825ca1b`). Updated only these existing rules, preserving their actions, enabled state, redirect destination and previous exceptions:

- Single Redirect ruleset `cb2836a345994ae286a8a62294326e9c`, rule `39698f97f11d43fd901866faf8281b0f`; ruleset version 4 → 5.
- Custom WAF ruleset `dca70e6f4cad440f89171193dcdd0631`, rule `06315550962247ef9a1d4f1871a9283b`; ruleset version 8 → 9.

Both original rule expressions were wrapped in parentheses and appended with `and not` followed by this public-content predicate:

```text
(
  http.host in {"deshare.finance" "www.deshare.finance"}
  and http.request.method in {"GET" "HEAD"}
  and (
    http.request.uri.path in {"/" "/guides" "/robots.txt" "/sitemap.xml" "/favicon.png"}
    or starts_with(http.request.uri.path, "/guides/")
    or starts_with(http.request.uri.path, "/assets/")
  )
)
```

Cloudflare returned HTTP 200/success for each update, and independent GET readback confirmed both expressions. No DNS records, origin settings, other security rules, API code or trading application configuration were changed. Only GET/HEAD public content on the two named hosts is exempt; `/api/` paths, other hosts and write methods are not exempt. Unknown future public paths need explicit review.

## Previous expressions (rollback reference)

Single Redirect:

```text
(ip.src.country in {"CN" "US"})
and (http.request.method in {"GET" "HEAD"})
and not starts_with(http.request.uri.path, "/api/")
and not (
  http.host eq "deshare.finance"
  and http.request.uri.path eq "/region-restricted.html"
)
```

WAF block:

```text
(ip.src.country in {"CN" "US"})
and not (
  http.host eq "deshare.finance"
  and http.request.uri.path eq "/region-restricted.html"
)
```

Rollback means restoring these expressions on the named rules after inspecting current state, without replacing whole rulesets.

## Vercel verification pending

DNS audit shows `app`, `monad`, `test`, `op`, `monadadmin`, `partner` and `doc` are DNS-only CNAMEs to Vercel. Cloudflare zone security does not protect those requests. Active Vercel firewall rules must be checked per owning project, including default `vercel.app` aliases to prevent alternative-host bypass. The restriction notice must remain accessible if served from the same restricted project.

The connected Vercel account currently cannot access team `team_AXz0tWL5Fvef0ThrMYoIk4Lz` (`jerry0xffs-projects`), returning 403 even after the initial authorization attempt. A fresh team authorization was requested; project ownership and geo controls are not yet verified. Do not interpret this Cloudflare change as proof that Vercel-hosted services are protected.

No API credentials are stored in this repository. Revoke the temporary Cloudflare token after the operation; it was shared in chat.
