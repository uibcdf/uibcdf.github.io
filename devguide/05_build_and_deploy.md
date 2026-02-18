# Build & deploy — UIBCDF Lab Website

**Target URL:** `https://www.uibcdf.org`  
**Astro base path:** `/`  
**Publishing model:** GitHub Actions builds and publishes to `gh-pages` branch.

## Repository layout
- `web/` contains the Astro project (source).
- `devguide/` contains the project checkpoint (this folder).
- Built output is produced by CI and pushed to `gh-pages`.

## Astro configuration (conceptual)
In `web/astro.config.mjs`:
- `site` must be `https://www.uibcdf.org` (or the canonical domain)
- `base` must be `/` (use `/` for root sites; use `/repo-name/` for subpath sites)

## GitHub Pages configuration (expected)
- Settings → Pages → Source: `gh-pages` branch, folder `/` (root)
- Custom domain (if applicable) is configured in the Pages settings and a `CNAME` file is generated.

## Local dev workflow
- `cd web`
- install dependencies
- run dev server
- build and preview before pushing

## Deployment invariants (do not break these)
- For subpath sites, `base` must match the published path exactly.
- Avoid absolute links that assume root, unless they are external.
- Keep assets referenced via Astro helpers so paths resolve correctly.
