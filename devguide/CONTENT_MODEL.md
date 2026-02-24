# Content model — UIBCDF Lab Website

This document defines the editable content under `web/src/content/` for version `1.0.0`.

## Canonical collections
- `updates`
- `people-profiles`
- `research-lines`
- `publication-papers`
- `software-tools`

## `updates/`
Single stream used by Home and Updates.

Frontmatter:
- `title` (string)
- `date` (ISO date)
- `tags` (array of canonical tags)
- `summary` (string)
- `draft` (boolean, optional)
- `featured` (boolean, optional)

Canonical tags:
- `seminar`
- `news`
- `publication`
- `software`
- `event`
- `opportunity`

## `research-lines/`
Directory pattern:
- `web/src/content/research-lines/NN/line.md`
- `web/src/content/research-lines/NN/image.png`

Ordering:
- Numeric folder order (`01`, `02`, `03`, ...).

`line.md` frontmatter:
- `title` (string)
- `summary` (string; YAML folded style recommended for multiline)
- `bodyImageWidth` (number, optional, 20–100)
- `imageAlt` (string, optional)
- `draft` (boolean, optional)

Body:
- Rendered in expandable “Show details / Hide details”.
- Supports markdown and HTML (including figure/caption).

## `people-profiles/`
Directory pattern:
- `web/src/content/people-profiles/{researchers|students|collaborators|former_members}/NN/member.md`
- `web/src/content/people-profiles/{...}/NN/image.png`
- `web/src/content/people-profiles/{...}/NN/cv.pdf` (optional)

Section order:
1. `researchers`
2. `students`
3. `collaborators`
4. `former_members`

Optional hide marker:
- If a file named `hide` exists in a section folder, that full section is hidden.

`member.md` frontmatter:
- `name` (string)
- `position` (string)
- `expertise` (string)
- `affiliation` (string)
- `orcid` (url, optional)
- `scholar` (url, optional)
- `linkedin` (url, optional)
- `github` (url, optional)
- `x` (url, optional)
- `bluesky` or `bsky` (url, optional)
- `draft` (boolean, optional)

Body:
- Optional detailed CV text shown in expandable panel.
- If `cv.pdf` exists, “Download CV” is rendered.

## `publication-papers/`
Directory pattern:
- `web/src/content/publication-papers/YYYY/NN/paper.md`
- `web/src/content/publication-papers/YYYY/NN/thumbnail.png`
- `web/src/content/publication-papers/YYYY/NN/illustration.png` (optional)

Ordering:
- Years descending.
- Numeric order inside each year.

`paper.md` frontmatter:
- `title` (string)
- `authors` (string; HTML tags allowed for emphasis)
- `print` (url, optional)
- `preprint` (url, optional)
- `doi` (url, optional; legacy compatibility)
- `Print` / `Preprint` (optional compatibility aliases)
- `bodyImageWidth` (number, optional, 20–100)
- `thumbnailAlt` (string, optional)
- `draft` (boolean, optional)

Body:
- Used as abstract/details content (“Show abstract / Hide abstract”).

## `software-tools/`
Directory pattern:
- `web/src/content/software-tools/molsyssuite/NN/tool.md` + `logo.svg`
- `web/src/content/software-tools/utilities/NN/tool.md` + `logo.svg`
- `web/src/content/software-tools/github-actions/NN/tool.md` (no logo required)

Category order:
1. `molsyssuite`
2. `utilities`
3. `github-actions`

`tool.md` frontmatter:
- `title` (string)
- `tagline` (string)
- `github` (url)
- `docs` (url, optional)
- `thumbnailAlt` (string, optional)
- `draft` (boolean, optional)

Rendering:
- MolSysSuite and Utilities: logo + tagline + links.
- GitHub Actions: inline cards with title, tagline, and GitHub Marketplace link.
