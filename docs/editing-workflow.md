# Editing Workflow

## Goal

Changes should fit 11ty well, stay easy to maintain, and remain quick to verify visually.

## Order of Changes

1. First determine whether a change is content, structure, or styling.
2. Prefer editing content in Markdown or data files.
3. Only change templates when structure or reuse needs to change.
4. Add CSS or JS afterwards in a targeted way.

## 11ty-Specific Rules

- Use the data cascade intentionally.
- Template-specific content should primarily live in JSON or template-specific data files such as `*.11tydata.json`.
- Includes and macros should encapsulate rendering, not store content.

## Verification

- Run the build after changes.
- Build the preview into `output/site/` and check changes there afterwards.
- Review responsive behavior at least for mobile and tablet.
- Verify UI-facing changes with Playwright, not only by reading templates or CSS.
- If content editing is expected to happen in Pages CMS, keep `.pages.yml` aligned with the current data structure so the online editor does not drift from the live 11ty content model.
- Keep deployment output rooted in `output/site/` and avoid duplicate copy or sync stages when Eleventy passthrough can handle static assets directly.

## Deployment Workflow

- GitHub Pages consumes the same root-hostable site output via `.github/workflows/deploy.yaml`.
- The local preview should use root-relative paths and must not depend on a `/TRK26/` prefix.
- Build the site once with `npm run build`, which writes root-hostable output to `output/site/`.
- After deployment-related changes, verify that generated HTML in `output/site/` uses root-relative paths such as `/assets/...`.

## For This Repository

- Do not introduce backend or infrastructure abstractions.
- Do not add unnecessary frameworks or extra build steps.
- Only change existing paths, includes, or data structures when the benefit clearly outweighs the migration cost.
