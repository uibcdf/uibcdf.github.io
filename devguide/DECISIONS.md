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

---

## 2026-02-18 — MVP scaffold and deployment pipeline implemented

**Context**  
Planning decisions were approved and needed to be materialized in repository code.

**Decision**  
Implement the minimum executable Astro scaffold in `web/`, wire the MVP routes to content collections, and add GitHub Actions deployment to `gh-pages`.

**Consequences**  
- Repository now contains a buildable Astro project and locked dependencies (`web/package-lock.json`).
- `main` branch changes are deployable through CI to GitHub Pages.

---

## 2026-02-19 — Team route, structured Team content, and navigation behavior

**Context**  
The People page evolved into a richer Team page with grouped member cards, social links, and optional CV expansion. Navigation also needed an explicit Home option while avoiding redundant current-page links.

**Decision**  
- Replace `/people` with `/team` as the canonical route.
- Use structured content under `web/src/content/people-profiles/`:
  `researchers/`, `students/`, `former_members/`, each with numeric member folders.
- Add `Home` to top navigation and hide the current page item so 6 items are shown consistently.

**Consequences**  
- Team content editing is now directory-driven and predictable.
- Navigation back to home is explicit and discoverable.

---

## 2026-02-24 — Freeze public release `1.0.0`

**Context**  
The website reached a stable and publishable state across all MVP routes, content collections, and deployment pipeline.

**Decision**  
Freeze the current state as version `1.0.0`.

**Consequences**  
- `devguide/` documentation is synchronized to the implemented architecture.
- Subsequent changes should be treated as post-1.0 iterative improvements.

---

## 2026-02-24 — Version tag format without `v` prefix

**Context**  
Release naming should be explicit and simple for this repository.

**Decision**  
Use release tags in `MAJOR.MINOR.PATCH` format (example: `1.0.0`), without `v` prefix.

**Consequences**  
- First frozen release tag is `1.0.0`.
- Future tags should follow the same format (for example: `1.0.1`, `1.1.0`, `2.0.0`).

---

## 2026-02-25 — Release `1.1.0`: Mission + Home choreography refinement

**Context**  
After `1.0.0`, the site needed stronger positioning clarity and smoother Home transition behavior between staged stops.

**Decision**  
- Add and publish `Mission` as a first-class route in top navigation.
- Add the `S1` message stop in Home with direct CTA to `Mission`.
- Refine Home transition timing and line/serpent choreography across `T01`, `T12`, `T23`, and `T34`.
- Freeze and tag the state as `1.1.0`.

**Consequences**  
- IA now includes `Mission` as a stable route.
- Home narrative is now explicitly five-stop (`S0`..`S4`) with shared notation in workflow docs.
- Tag `1.1.0` is now the canonical reference for this iteration.
