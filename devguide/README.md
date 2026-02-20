# Devguide (checkpoint) — UIBCDF Lab Website

    This folder is intended to act as a **complete checkpoint** of the planning discussion for this website.
    A new collaborator (human or agent) should be able to read this folder and proceed with development
    as if they had been present in the original planning conversation.

    ## Read order (recommended)
    1. `00_concept.md` — purpose, audience, constraints
    2. `01_mvp_scope.md` — MVP vs non-goals vs phase 2
    3. `02_information_architecture.md` — sitemap/menu decisions
    4. `CONTENT_MODEL.md` — collections, frontmatter rules, tags vocabulary
    5. `BRAND.md` — “less is more” design + tone
    6. `DECISIONS.md` — mini-ADRs (why we chose what we chose)
    7. `04_updates_and_social.md` — updates/blog policy + social diffusion stance
    8. `05_build_and_deploy.md` — GitHub Pages + base path invariants
    9. `06_workflow_with_codex.md` — how to develop locally with Codex
    10. `07_backlog.md` — TODO list for implementation

    ## Project invariants (do not change casually)
    - Static site (no backend for MVP).
    - Markdown-first content under `web/src/content/`.
    - Minimal navigation and a single primary CTA per page.
    - GitHub Pages deployment via CI to `gh-pages` (canonical).
    - Avoid fragile “live” social feeds; prefer curated/optional embeds and strong OpenGraph metadata.

    ## Repo structure
    - `web/` — site source (Astro project)
    - `resources/` — logos/screenshots/OG images
    - `devguide/` — this checkpoint

    ## Notes specific to this project
    - Domain: `www.uibcdf.org` (root site).
- Updates are unified under one stream with tags: `seminar`, `news`, `publication`, `software`, `event`, `opportunity`.
- Editing is via GitHub (no CMS in v1). Decap CMS is an optional phase-2 accelerator.
- Publications start curated/minimal; do not over-engineer a bibliography system in v1.

## Current status (2026-02-18)
- Astro MVP scaffold is implemented under `web/`.
- MVP routes are live in source: Home, Research, Team, Publications, Software, Updates, Contact.
- Content Collections are configured for `updates`, `people`, `people-profiles`, `research`, `research-lines`, `publications` (legacy), and `publication-papers` (active for Publications page).
- CI workflow exists at `.github/workflows/deploy-gh-pages.yml` and deploys to `gh-pages`.
