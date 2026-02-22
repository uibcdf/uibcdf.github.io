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
- For Research page content, use `web/src/content/research-lines/NN/` with `line.md` + `image.png` (numeric order defines render order).
- For Team page content, use `web/src/content/people-profiles/{researchers|students|collaborators|former_members}/NN/` with `member.md` + `image.png` (and optional `cv.pdf`).
- For Publications page content, use `web/src/content/publication-papers/YYYY/NN/` with `paper.md` + `thumbnail.png` (year sections sort descending, items sort by numeric `NN`).
- For Code page content, use `web/src/content/software-tools/{molsyssuite|utilities|github-actions}/NN/` with `tool.md` and category-specific assets:
  - `molsyssuite` / `utilities`: `logo.svg` shown in cards
  - `github-actions`: text-only inline cards (no logo)

## Home scroll notation (shared vocabulary)
For iterative UI work on the Home page scroll choreography, use this notation:

- `S0` = `cover`
- `S1` = `hub`
- `S2` = `latest-updates`
- `S3` = `final`

Transitions:

- `T01` = scroll from `S0` to `S1`
- `T12` = scroll from `S1` to `S2`
- `T23` = scroll from `S2` to `S3`

Rule: when requesting visual tweaks, specify whether the change targets a state (`S*`) or a transition (`T*`).

## What Codex should *not* change without an explicit decision
- The MVP sitemap
- The tag vocabulary
- Deployment base path
- The “less is more” constraints

## Handoff checkpoints
When a meaningful milestone is reached, update:
- `devguide/DECISIONS.md` (if a decision was made)
- `devguide/07_backlog.md` (move items across: TODO → Doing → Done)
