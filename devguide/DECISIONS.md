# Decisions (mini-ADRs) — UIBCDF Lab Website

This file is the canonical record of technical/product decisions for this repository.
Keep entries short, dated, and explicit. If a decision changes, add a new entry.

---

## 2026-02-18 — Use Astro + GitHub Pages with `gh-pages` branch

**Context**  
We need a modern, maintainable static site deployable on GitHub Pages. The site should remain easy to evolve and keep “less is more” aesthetics.

**Decision**  
Use Astro to build a static site, deployed via GitHub Actions to the `gh-pages` branch.

**Alternatives considered**  
- Keeping Nikola: rejected (legacy workflow, not aligned with current goals).  
- Publishing directly from `main` `/docs`: possible, but `gh-pages` is the canonical clean separation for built assets.

**Consequences**  
- A GitHub Actions workflow will build on push to `main` and publish to `gh-pages`.  
- The site source lives in `web/` to keep repo root clean.

---

## 2026-02-18 — Content-first architecture with Markdown in `web/src/content`

**Context**  
We want fast iteration and easy updates via GitHub edits (optionally Decap CMS later), without adding backend infrastructure.

**Decision**  
Use Astro Content Collections under `web/src/content/*` as the source of truth for site content.

**Consequences**  
- Content is versioned with code.  
- Later adoption of Decap CMS is straightforward because content is structured.

---

## 2026-02-18 — “Less is more” as a design constraint

**Decision**  
Keep navigation minimal, enforce a single primary CTA per page, and keep home pages focused (latest 3–5 items + “View all”).

**Consequences**  
- Avoid infinite feeds and heavy embeds.  
- Prefer curated cards and clear information hierarchy.

---

## 2026-02-18 — URL / deployment context

**Context**  
This repository is the org/user Pages site (`uibcdf.github.io`) and serves as the root of the custom domain `www.uibcdf.org`.

**Decision**  
Configure Astro `site` and `base` accordingly (details in `devguide/05_build_and_deploy.md`).
