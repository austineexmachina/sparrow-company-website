# Sparrow Love Edit — Company Website

An independent corporate coming-soon website for Sparrow Love Edit. This repository contains the company website only; it is separate from the Sparrow editing application.

Public website: <https://sparrow-company-website.austinechibueze905.workers.dev>

## Website

The site presents Sparrow Love Edit’s company vision, creator ecosystem, founder information, contact options, and coming-soon waitlist. The website does not provide production editing, rendering, livestreaming, or booking services. Privacy and Terms pages are draft documents for founder/legal review and must not be treated as finalized legal terms.

The six supplied promotional PNG files are retained in `public/images/`. `assets.manifest.json` records their original filenames, byte sizes, and SHA-256 hashes.

## Technology

- Next.js 15 App Router and React Server Components
- TypeScript
- Tailwind CSS v4
- GSAP / ScrollTrigger and Motion
- vinext with Cloudflare’s Vite plugin for Cloudflare Workers
- Cloudflare D1 for deployed waitlist storage
- SQLite for local Next.js development
- React Hook Form and Zod for forms
- Wrangler for local Worker development, D1 migrations, and manual deployment

## Local setup

Requirements: Node.js 22.12 or newer and npm.

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

The Next.js development server runs at `http://localhost:3000`. Its local waitlist database is created under `data/`, which is ignored by Git. Never commit local database files or registration data.

For the Cloudflare Worker runtime locally, apply the checked-in migration to Wrangler’s local D1 state and start the built Worker:

```powershell
npx wrangler d1 migrations apply sparrow-company-waitlist --local
npm run build:vinext
npm run start:vinext
```

The Worker preview defaults to `http://127.0.0.1:8787`. Wrangler local state is stored under `.wrangler/` and is ignored.

## Checks

```powershell
npm run typecheck
npm run lint
npm test
npm run test:e2e
npm run build:vinext
npm audit --omit=dev
```

`npm run test:e2e` uses the Playwright configuration in `playwright.config.ts` and expects a local site at port 3000. The Cloudflare Worker build can be exercised with Wrangler separately.

## Cloudflare D1 and manual deployment

The Worker is configured in `wrangler.jsonc`, with D1 bound as `DB`. Versioned SQL migrations live in `migrations/`. The production database name is `sparrow-company-waitlist`.

After authenticating Wrangler to the intended Cloudflare account, a maintainer may apply pending migrations and deploy manually:

```powershell
npm run build:vinext
npx wrangler d1 migrations apply sparrow-company-waitlist --remote
npx wrangler deploy --config dist/server/wrangler.json
```

Review the account, Worker name, D1 binding, and migration state before running these commands. No GitHub Actions workflow in this repository deploys the Worker.

For Contact email delivery, first verify a sender domain with Resend and configure its provider-supplied DNS records. Then set the API key and authorized sender/recipient values as Worker secrets; do not put credentials in source files or browser code. Contact submissions are not reported successful unless Resend accepts them. The waitlist does not require Resend.

## Configuration and privacy

Start with `.env.example` for local development settings. Keep `.env.local`, `.env.production`, `.dev.vars`, Wrangler state, secrets, local databases, private backups, and logs out of Git. Production credentials belong in Cloudflare Worker secrets. Never publish waitlist registrations or other personal data.
