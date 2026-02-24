# Updates & social diffusion policy — UIBCDF Lab Website

This site is Markdown-first and static. Social platforms are distribution channels, not source of truth.

## Canonical source of truth
- Posts under `web/src/content/updates/` are canonical.
- Social posts should link back to this site.

## Embeds and external dependencies
- Embeds are optional and never required for core content.
- Avoid fragile auto-fetch dependencies for MVP and stable operation.

## Sharing
- Each update should have a clear title and concise summary.
- Keep OpenGraph metadata strong so links preview well across platforms.

## Project-specific behavior
- Updates uses one unified stream (no separate news/blog/seminars sections).
- Client-side filters: tag, text search, and date range.
- Sticky “Search and filter” panel while scrolling posts.
- Vertical progress bar acts as scroll indicator and draggable slider.
