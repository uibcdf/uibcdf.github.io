# Working with Codex locally — UIBCDF Lab Website

This repo is intended to be developed locally with Codex (CLI) after the initial skeleton is in place.

## Recommended session flow
1. **Start from the devguide**: ensure Codex reads `devguide/` first.
2. **Implement one vertical slice**:
   - a page route
   - the content collection it depends on
   - one reusable component
   - minimal styling consistent with `devguide/BRAND.md`
3. **Commit small**:
   - one feature per commit
   - descriptive messages
4. **Validate build locally** before pushing:
   - `npm/pnpm run build`
   - `npm/pnpm run preview`

## Guardrails
- Do not introduce backend dependencies for MVP.
- Prefer content-driven pages: add entries under `web/src/content/` rather than hard-coding.
- Keep navigation minimal (see `devguide/02_information_architecture.md`).
- Maintain one primary CTA per page.

## What Codex should *not* change without an explicit decision
- The MVP sitemap
- The tag vocabulary
- Deployment base path
- The “less is more” constraints

## Handoff checkpoints
When a meaningful milestone is reached, update:
- `devguide/DECISIONS.md` (if a decision was made)
- `devguide/07_backlog.md` (move items across: TODO → Doing → Done)
