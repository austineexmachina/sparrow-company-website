# Claude Code Instructions — Sparrow Love Edit Company Website

## Project boundary
- This repository is the **Sparrow Love Edit company website only**.
- Do not confuse it with, import code from, or make changes to the separate Sparrow Love Edit editing application.
- Public site: https://sparrow-company-website.austinechibueze905.workers.dev
- Work only in this repository and the branch explicitly selected for the task.

## Product and company truth
- Sparrow Love Edit is pre-incorporation, pre-seed, pre-revenue, and has a working prototype.
- UK headquarters and UK incorporation are planned for 2027; do not imply they already exist.
- Never invent customers, users, revenue, awards, press, partnerships, testimonials, offices, employees, a UK company number, or a UK street address.
- Clearly distinguish existing prototype functionality from proposed roadmap features.
- Do not describe roadmap items as currently available.
- Do not invent performance statistics or product capabilities.
- Founder information and contact details must be taken from the existing approved website content. Do not invent or embellish biography details.

## Brand and creative direction
- Preserve the approved Sparrow Love Edit brand identity and existing official logo/assets.
- Purple and pink are the brand accents; maintain strong text contrast and accessible interactions.
- The approved visual direction is premium, cinematic, near-black, spacious, and polished—not a generic template.
- Do not use Mercedes, Formula 1, car, driver, racing, or sponsor imagery, names, logos, or content.
- Do not generate fake people or faces, and never synthesize or redraw the founder's face.
- The repository currently retains two approved original promotional PNGs. Preserve both exact files and their integrity; do not replace, crop destructively, rename, or remove them without explicit approval.
- Do not introduce new promotional artwork or stock imagery without approval.

## Technical architecture
- Existing stack: Next.js 15 App Router, React Server Components, TypeScript, Tailwind CSS v4, GSAP/ScrollTrigger, Motion, vinext, Cloudflare Vite plugin, Cloudflare Workers, Cloudflare D1, SQLite for local development, Wrangler.
- Read the README, package scripts, project configuration, migrations, and relevant components before making changes.
- Follow the existing architecture and coding conventions. Do not migrate frameworks or replace the stack unless explicitly asked.
- Keep the site deployable on Cloudflare Workers.
- Keep secrets out of source code, browser bundles, commits, logs, and generated documentation.
- Never expose waitlist registrations, private user data, local databases, backups, or environment files.

## Safe working procedure
1. Start by inspecting the repository, current branch, git status, and relevant files.
2. Before editing, summarize the intended changes and identify any risks or assumptions.
3. Make focused changes; preserve existing content, routes, working features, integrations, and accessibility.
4. Do not delete, rewrite, or replace existing pages, data, migrations, assets, or integrations unless the task explicitly requires it.
5. Do not run remote D1 migrations, change production resources, rotate secrets, or alter Cloudflare account settings without explicit approval.
6. Do not deploy to production, merge to the default branch, or overwrite production without explicit approval.
7. Use a separate feature branch and open a pull request for review.
8. Report exactly what changed, commands run, test/build outcomes, known issues, and any manual steps.

## Validation
Use the checks defined in package.json and README.md where applicable. The documented checks include:
- npm run typecheck
- npm run lint
- npm test
- npm run test:e2e
- npm run build:vinext
- npm audit --omit=dev

Do not claim a check passed unless you actually ran it and observed success. If a check cannot run, explain why. Review responsive layouts, keyboard navigation, focus states, reduced-motion behavior, metadata, and image loading when relevant.

## First task when opening this repository
Perform a read-only audit first:
- Map the application structure and important routes.
- Identify the current design system, page sections, reusable components, and asset usage.
- Explain the current Cloudflare Worker and D1 deployment setup.
- Identify existing tests and any deployment blockers.
- Propose a small, reviewable plan.
Do not edit files or deploy during this initial audit.
