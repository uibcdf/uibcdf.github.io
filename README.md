# UIBCDF Website

Website for the **Unidad de Investigación en Biología Computacional y Diseño de Fármacos (UIBCDF)**.

Live site: `https://www.uibcdf.org/`

Current frozen release: `1.0.0`

## Repository structure
- `web/` — Astro site source
- `devguide/` — project documentation (scope, IA, content model, decisions, workflow)
- `resources/` — auxiliary assets

## Site navigation (v1.0.0)
- Home
- Research
- Team
- Publications
- >Code (route: `/software`)
- Updates
- Contact

## Content model
Content is Markdown-first and lives in `web/src/content/`.

Collections used in production:
- `updates`
- `research-lines`
- `people-profiles`
- `publication-papers`
- `software-tools`

See `devguide/CONTENT_MODEL.md` for folder conventions and frontmatter fields.

## Local development
```bash
cd web
npm install
npm run dev
```

Build check:
```bash
cd web
npm run build
```

## Deployment
- GitHub Actions workflow builds and publishes to `gh-pages`
- Custom domain: `www.uibcdf.org`
- Deployment workflow file: `.github/workflows/deploy-gh-pages.yml`

## Project docs
- Start here: `devguide/README.md`
- Decisions: `devguide/DECISIONS.md`
- MVP scope: `devguide/01_mvp_scope.md`
- Information architecture: `devguide/02_information_architecture.md`
- Build/deploy: `devguide/05_build_and_deploy.md`
