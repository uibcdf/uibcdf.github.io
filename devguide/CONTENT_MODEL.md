# Content model — UIBCDF Lab Website

This document describes the editable content in `web/src/content/` and how it is used on the site.

## Frontmatter conventions (all collections)

All markdown entries in `web/src/content/*` follow these fields:

- `title` (string) — page/post title
- `date` (YYYY-MM-DD) — publication/event date (used for sorting)
- `tags` (list of strings) — controlled vocabulary per site (see below)
- `summary` (string) — 1–2 lines used in cards/previews
- `draft` (boolean) — `true` means do not show in production lists
- `featured` (boolean, optional) — highlight on the home page

**Rules**
- Use ISO dates.
- Prefer 1–3 tags per entry.
- Slugs should be derived from the file name: `YYYY-MM-DD-short-kebab-title.md`.
- Keep `summary` plain text (no markdown).

## Collections

### `updates/`
Unified stream for seminars, news, publications announcements, software releases, events, and opportunities. Used on the Updates page and (subset) on Home.

### `people/`
Profiles for team members (researchers, students, collaborators). Used on People page and optionally referenced elsewhere.

### `research/`
One entry per research line. Keeps the Research page structured and editable.

### `publications/`
Curated publication entries. Start minimal; can be expanded later with citations/DOIs.

## Tags vocabulary

Use the following canonical tags (avoid ad-hoc tags unless you *intend* to expand the vocabulary):

- `seminar`
- `news`
- `publication`
- `software`
- `event`
- `opportunity`


## Additional rules
**Updates tagging guidance**
- Seminar announcements: `seminar` (optionally also `event`)
- Publications announcements: `publication`
- New releases or major features: `software`
- Institutional events / workshops: `event`
- Calls, openings, scholarships: `opportunity`

## Note on seminars
Seminars are not a separate collection. Store them as `updates/` entries tagged with `seminar`.
