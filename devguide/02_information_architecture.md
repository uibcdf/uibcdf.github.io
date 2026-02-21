# Information architecture (IA) — UIBCDF Lab Website

This file freezes the MVP sitemap and navigation decisions.

## Top navigation (MVP)

- Home
- Research
- Team
- Publications
- Software
- Updates
- Contact

## Notes
- Menu behavior: show `Home` as first item and keep all main sections visible; mark current page with visual attenuation (`aria-current="page"`).
- Updates are **one section** with **tags** to avoid fragmentation.
- Home shows only the latest 3–5 updates, plus a link to the full index.
- Publications can start as a simple curated list; later we can add BibTeX/DOI tooling if useful.
- Software page should highlight MolSysSuite and link out to per-repo Sphinx docs.
