# Information architecture (IA) — UIBCDF Lab Website

This file freezes the sitemap and navigation for version `1.0.0`.

## Top navigation

- Home
- Research
- Team
- Publications
- >Code (route `/software`)
- Updates
- Contact

## Notes
- Menu behavior: keep `Home` as first item; current page is visually attenuated and marked with `aria-current="page"`.
- Updates are **one section** with **tags** to avoid fragmentation.
- Home highlights latest updates and links to the full Updates page.
- Publications are grouped by year (descending).
- Code is grouped in three sections: MolSysSuite ecosystem, Software engineering utilities, GitHub Actions.

## Next-version IA note
- Positioning/mission content is currently under-specified and should be made explicit.
- Preferred approach: add a dedicated mission block in Home (early in scroll flow) instead of adding a new top-level `About` menu item.
