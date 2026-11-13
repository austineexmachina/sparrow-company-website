# Sparrow company website — investor readiness / backend release gates

This repository is the company site, not the creator editing application. Preserve existing design, animations, artwork, navigation, and brand.

Official configured company site: https://sparrow-company-website.austinechibueze905.workers.dev/
Status: production availability unverified; do NOT use this URL in investor outreach until it loads reliably and passes a safe-browser check.

## Inspected code
- Next.js 15 / TypeScript / Cloudflare Worker + D1 for deployed waitlist; SQLite local development.
- POST /api/waitlist validates with Zod, limits body size, honeypot, checks rate limit and persists via store.
- POST /api/contact validates with Zod, checks a rate limit, sends via Resend and fails closed without provider configuration.
- src/lib/rate-limit.ts uses an in-memory Map: this is **not durable or globally enforced across Cloudflare Worker isolates**. Do not call it distributed abuse protection.
- Waitlist confirmation email is optional; its provider result should be checked and failures logged without exposing personal information.

## Required backend improvements before promotion
1. Replace in-memory rate limiting with durable Cloudflare D1/DO-backed counters, with tests for concurrency, expiry, and IP spoofing; trust only platform-verified client IP.
2. Restrict POST APIs to expected Origin/Host, with CSRF-aware policy and tests.
3. Add operational health/diagnostic endpoint without exposing secrets or customer data; verify live D1 binding and Resend configuration via authorized tests.
4. Verify Resend sender domain, contact delivery, retry/error handling, and delivery observability.
5. Validate D1 migrations, idempotent waitlist registration, backup/export, privacy deletion workflow, and abuse controls.
6. Run npm ci, typecheck, lint, unit and e2e tests, build and dependency audit on isolated branch.
7. Verify HTTPS, Cloudflare production deployment ID, Safe Browsing status, uptime and mobile contact/waitlist form before investor sharing.
8. Preserve website UI; no production deploy or migrations without explicit approval.

## Investor claims
- One platform with ten connected applications is a roadmap/vision, not proof all ten are live.
- Netflix-style Movieverse is a planned experience, not a Netflix affiliation.
- Up to 5M users is a modeled capacity target, not usage or tested capacity.
- Security work is ongoing; no completed independent audit claimed.
- Current fundraising request: USD 100,000–500,000 pre-seed.
