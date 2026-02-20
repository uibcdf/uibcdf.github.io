# Content model — UIBCDF Lab Website

This document describes the editable content in `web/src/content/` and how it is used on the site.

## Frontmatter conventions (generic content collections)

Most markdown entries in `web/src/content/*` follow these fields:

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
Profiles for team members (researchers, students, collaborators). Used on Team page and optionally referenced elsewhere.

### `people-profiles/` (active for Team page)
Structured Team content with one directory per member, grouped by section and sorted numerically.

Folder layout:

- `web/src/content/people-profiles/researchers/01/line.md`
- `web/src/content/people-profiles/researchers/01/image.png`
- `web/src/content/people-profiles/researchers/01/cv.pdf` (optional)
- `web/src/content/people-profiles/students/01/line.md`
- `web/src/content/people-profiles/former_members/01/line.md`

Section order:

1. `researchers`
2. `students`
3. `former_members`

Member order:

- Numeric directory order (`01`, `02`, `03`, ...).

`line.md` frontmatter:

- `name` (string)
- `position` (string)
- `expertise` (string)
- `affiliation` (string)
- `linkedin`, `x`, `github`, `orcid`, `scholar` (optional URLs)
- `draft` (boolean)

Notes:

- Team cards show a `CV` toggle only when CV text and/or `cv.pdf` exists.
- Researchers display affiliation as `UIBCDF` in the UI.

### `research/`
Legacy/simple collection for research entries. The current Research page uses `research-lines/` (see below).

### `research-lines/` (active for Research page)
Structured collection for the Research page with one directory per line, sorted by directory number.

Folder layout:

- `web/src/content/research-lines/01/line.md`
- `web/src/content/research-lines/01/image.png`
- `web/src/content/research-lines/02/line.md`
- `web/src/content/research-lines/02/image.png`
- ...

Ordering:

- Directories are numeric (`01`, `02`, `03`, ...).
- Render order is top-to-bottom by numeric directory order.

`line.md` frontmatter:

- `title` (string)
- `summary` (string) — shown in the card; can be multiline YAML
- `draft` (boolean)
- `bodyImageWidth` (number, optional, 20–100) — width (%) for images inside expanded body
- `imageAlt` (string, optional) — alt text for the left-side `image.png`

`line.md` body:

- Rendered under “Show details / Hide details” in each line card.
- Supports normal markdown and embedded HTML.
- Image captions are supported with `<figure><img /><figcaption>...</figcaption></figure>`.

Deep-link support:

- `#line-02` or `?line=02` opens and focuses line 02 on load.

### `publication-papers/` (active for Publications page)
Structured collection for Publications, grouped by year and ordered within each year.

Folder layout:

- `web/src/content/publication-papers/2026/01/line.md`
- `web/src/content/publication-papers/2026/01/thumbnail.png`
- `web/src/content/publication-papers/2026/02/line.md`
- `web/src/content/publication-papers/2025/01/line.md`

Ordering:

- Year sections sort descending (`2026`, `2025`, ...).
- Inside each year, numeric directory order (`01`, `02`, `03`, ...).

`line.md` frontmatter:

- `title` (string)
- `authors` (string)
- `doi` (URL, optional)
- `preprint` (URL, optional)
- `abstract` (string, optional)
- `bodyImageWidth` (number, optional, 20–100) — width (%) for images inside expanded details
- `thumbnailAlt` (string, optional)
- `draft` (boolean)

`line.md` body:

- Optional expanded details (`Show details / Hide details`).
- Supports markdown/HTML, including inline images.

Required assets:

- `thumbnail.png` = left-side paper preview card image.

Optional assets:

- Extra illustrative images can be placed in the same paper folder and referenced from `line.md` (example: `illustration.png`).

### `publications/` (legacy)
Curated publication entries (generic schema). Kept for compatibility; current Publications page uses `publication-papers/`.

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
