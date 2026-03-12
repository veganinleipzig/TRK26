# Tierrechtskongress Leipzig

This repository contains the static 11ty one-pager for the Tierrechtskongress Leipzig site.

## Project Shape

- Source content and templates live under `src/`.
- The local preview build is generated into `output/site/`.

## Build

Build the root-hostable site into `output/site/`:

```bash
npm run build
```

## Local Preview

Start the local preview workflow:

```bash
npm run dev
```

The site is then available at:

```text
http://localhost:4000/
```

## Deployment

Deployment runs via GitHub Pages using the workflow in `.github/workflows/deploy.yaml`.
Pushes to `main` trigger a build and deploy from `output/site/`.

## Notes

- `output/` is intentionally ignored by Git.
- UI-facing changes should be checked with Playwright before shipping.
