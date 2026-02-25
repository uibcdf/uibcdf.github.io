# Backlog — UIBCDF Lab Website

A lightweight backlog to keep scope under control.

## TODO

- [ ] Curate real production content for all placeholders.
- [ ] Unify microcopy style across all pages (tone, length, consistency).
- [ ] Run full responsive QA pass (mobile/tablet/desktop) for Home transitions and cards.
- [ ] Apply collection-level SEO polish (page titles, meta descriptions, share metadata).
- [ ] Run a lightweight performance pass (image weight, lazy loading, loading strategy).
- [ ] Run accessibility fine-tuning pass (keyboard flow, focus states, contrast checks).
- [ ] Add automated content lint/check scripts for frontmatter consistency.
- [ ] Evaluate optional CMS adoption only if editing throughput requires it.

## Doing
- [ ] (empty)

## Done
- [x] Initial planning & repo skeleton
- [x] Create Astro project under `web/` with minimal routes for MVP pages
- [x] Implement Content Collections schemas for updates/team/research/publications/code
- [x] Build Home page hero + latest updates widget
- [x] Create Updates index with filtering by tag
- [x] Enhance Updates UX with text/date filters, sticky filter panel, and draggable vertical scroll indicator
- [x] Create Team page and profile cards
- [x] Create Publications page with year sections and `publication-papers/YYYY/NN` content model
- [x] Create Code page with structured `software-tools/{molsyssuite|utilities|github-actions}/NN` content model
- [x] Add Contact page with institutional context
- [x] Redesign Contact page with photo + institutional data + social icon row
- [x] Add GitHub Actions workflow to publish to `gh-pages`
- [x] Freeze release `1.0.0` and synchronize `devguide/` with implemented architecture
