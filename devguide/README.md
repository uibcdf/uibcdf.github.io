# Devguide — UIBCDF Lab Website

This folder is the project checkpoint for the current public site version.
It should let a collaborator continue development with the same architecture and editorial rules.

## Read order
1. `00_concept.md`
2. `01_mvp_scope.md`
3. `02_information_architecture.md`
4. `CONTENT_MODEL.md`
5. `BRAND.md`
6. `DECISIONS.md`
7. `04_updates_and_social.md`
8. `05_build_and_deploy.md`
9. `06_workflow_with_codex.md`
10. `07_backlog.md`

## Project invariants
- Static Astro site (no backend in v1).
- Markdown-first content under `web/src/content/`.
- Canonical deployment through GitHub Actions to `gh-pages`.
- Root custom domain setup for `https://www.uibcdf.org`.
- Keep UI minimal and content-first.

## Repo structure
- `web/` — Astro source
- `devguide/` — project docs and decisions
- `resources/` — auxiliary assets

## Current status (2026-02-24)
- Version `1.0.0` frozen.
- Routes: Home, Research, Team, Publications, `>Code` (route `/software`), Updates, Contact.
- Content collections in use: `updates`, `people-profiles`, `research-lines`, `publication-papers`, `software-tools`.
- Deployment workflow: `.github/workflows/deploy-gh-pages.yml`.
- Updates includes client-side tag/date/text filters, sticky search/filter panel, and draggable vertical progress bar.
- Contact page uses image + institutional address + email + social links.
