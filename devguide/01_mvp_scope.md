# MVP scope — UIBCDF Lab Website

This file defines what version `1.1.0` includes and what remains out of scope.

## MVP (`1.1.0`) included
- Home page with staged scroll narrative (`S0` to `S4`) and tuned transitions (`T01` to `T34`).
- Pages: Mission, Research, Team, Publications, `>Code` (route `/software`), Updates, Contact.
- Structured content collections for research lines, member profiles, publications, software tools, and updates.
- Unified updates stream with tag/date/text filtering.
- Static deploy to `https://www.uibcdf.org` through GitHub Pages (`gh-pages` branch).

## Not in MVP
- CMS/editor backend (Git-based editing only).
- Live external feeds as primary content source.
- User accounts, private member area, or any dynamic backend.
- Full bibliographic automation pipeline.

## Next-phase candidates
- Optional CMS layer (only if content editing load requires it).
- Automated bibliographic helpers (import/check tooling).
- Internationalization if needed (ES/EN).
- Editorial consistency pass (microcopy and naming normalization).
- Technical quality pass: responsive QA + accessibility + performance.
- SEO refinement pass per section and content entry.
